// Importing necessary libraries and components
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations

import { styles } from "../styles"; // Custom styles for the component
import { journeyMoments } from "../constants"; // Evidence board data (photos, captions, dates)

// Preset rotations so each polaroid looks hand-pinned (deterministic — no flicker on re-render)
const ROTATIONS = [-5, 4, -3, 6, -4, 3, -6, 5];

// Reveal timeline, in seconds. The board deliberately unfolds slowly rather than
// popping in all at once: heading, then the brief, then the photos one by one,
// and only once they're all pinned does the string get threaded between them.
// Every value below is a start time except the two durations — tune here to
// speed the whole sequence up or draw it out further.
const TIMELINE = {
  label: 0.4, // "Case file: Makanaka"
  labelDuration: 1.4,
  title: 1.3, // "The Evidence Board."
  titleDuration: 1.8, // Deliberately the slowest fade on the page
  intro: 2.5, // The paragraph under the title
  introDuration: 1.5,
  firstCard: 3.4, // The first polaroid drops onto the board
  cardGap: 0.5, // Each following polaroid, half a second behind the last
  cardDuration: 1.1,
  cardSettle: 0.7, // How long a photo takes to visually come to rest (springs settle before they formally end)
  stringPause: 0.7, // Beat between the last photo settling and the string appearing
  stringDraw: 3.2, // How long the red thread takes to draw itself end to end
};

// The string is only threaded once every photo is pinned up and has stopped moving
const STRING_DELAY =
  TIMELINE.firstCard +
  TIMELINE.cardGap * Math.max(journeyMoments.length - 1, 0) +
  TIMELINE.cardSettle +
  TIMELINE.stringPause;

// Builds a sagging "red string" path through the pin points, like thread between board pins
const buildStringPath = (points) => {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    const sagY = Math.max(prev.y, curr.y) + 45; // Control point below both pins to make the thread droop
    d += ` Q ${midX} ${sagY} ${curr.x} ${curr.y}`;
  }
  return d;
};

// Fingerprint icon for the case-file button — line icon in the same family as the Footer's
// contact icons, so the two glass panels at the bottom of the page read as one set
const FingerprintIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='relative w-[22px] h-[22px] text-[#915EFF] transition-colors duration-300 group-hover:text-white'
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
    />
  </svg>
);

// Red push-pin graphic that "holds" each polaroid to the board
const Pin = () => (
  <div className='absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none'>
    <div
      className='w-5 h-5 rounded-full'
      style={{
        background: "radial-gradient(circle at 35% 30%, #ff8a80, #e53935 55%, #8e0000)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.55)",
      }}
    />
  </div>
);

// PolaroidCard Component: a single pinned photo with a handwritten caption
const PolaroidCard = ({ index, image, caption, date, blurb, registerRef }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.92 }} // Explicit animation (section mounts on button click, not on scroll)
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      type: "spring",
      delay: TIMELINE.firstCard + index * TIMELINE.cardGap, // Staggered so photos land one at a time
      duration: TIMELINE.cardDuration,
      bounce: 0.35, // Slight overshoot so each photo pops as it lands
    }}
    ref={registerRef} // Registered so the red string knows where this pin sits
    className={`relative z-10 ${index % 2 === 1 ? "md:mt-20" : ""}`} // Alternating offset for a scattered board feel
  >
    <Pin />
    {/* The polaroid itself — rotated at rest, straightens and lifts on hover */}
    <motion.div
      style={{
        rotate: ROTATIONS[index % ROTATIONS.length],
        // Slightly warm white + layered shadow to read as paper against the dark board
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3)",
      }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className='w-[240px] bg-[#f4efe4] p-3 pb-4 rounded-sm cursor-pointer'
    >
      {/* Photo area — fixed height keeps the board layout stable */}
      {image ? (
        <img
          src={image}
          alt={caption}
          className='w-full h-[210px] object-cover'
        />
      ) : (
        // Placeholder shown until a real photo is added in constants/index.js
        <div className='w-full h-[210px] bg-[#151030] border-2 border-dashed border-[#aaa6c3]/40 flex items-center justify-center'>
          <span
            className='uppercase tracking-widest font-bold text-[11px] px-3 py-1 border-2 rounded-sm'
            style={{ color: "#e53935", borderColor: "#e53935", transform: "rotate(-8deg)", opacity: 0.8 }}
          >
            Evidence Pending
          </span>
        </div>
      )}

      {/* Handwritten caption area, like ink on the polaroid border */}
      <div className='mt-3 text-center' style={{ fontFamily: "'Caveat', cursive" }}>
        <p className='text-[#1f1f2e] text-[22px] leading-6 font-semibold'>{caption}</p>
        <p className='text-[#5a5a6e] text-[16px]'>{date}</p>
        {blurb && (
          <p className='text-[#44445a] text-[15px] leading-5 mt-1'>{blurb}</p>
        )}
      </div>
    </motion.div>
  </motion.div>
);

// Journey Component: hidden CSI-style evidence board, revealed by the case-file button
// Sits after the footer — an "after-credits" section for the curious
const Journey = () => {
  const [revealed, setRevealed] = useState(false); // The board only exists once the button is pressed
  const boardRef = useRef(null); // The board container the string coordinates are relative to
  const cardRefs = useRef([]); // One ref per polaroid, used to locate each pin
  const [stringPath, setStringPath] = useState(""); // SVG path of the red string
  const [boardSize, setBoardSize] = useState({ w: 0, h: 0 }); // SVG canvas dimensions

  // Measures pin positions from layout offsets (ignores animation transforms) and rebuilds the string
  const measure = useCallback(() => {
    const board = boardRef.current;
    if (!board) return;

    const points = cardRefs.current
      .filter(Boolean)
      .map((el) => ({
        x: el.offsetLeft + el.offsetWidth / 2, // Pin sits at the top-centre of each card
        y: el.offsetTop - 2,
      }));

    setBoardSize({ w: board.scrollWidth, h: board.scrollHeight });
    setStringPath(buildStringPath(points));
  }, []);

  // Re-measure once the board is revealed and whenever it resizes (e.g. cards wrap on smaller screens)
  useLayoutEffect(() => {
    if (!revealed) return;

    measure();
    window.addEventListener("resize", measure);

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (observer && boardRef.current) observer.observe(boardRef.current);

    return () => {
      window.removeEventListener("resize", measure);
      if (observer) observer.disconnect();
    };
  }, [revealed, measure]);

  // Opens the case file and brings the board into view
  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => {
      document.getElementById("journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150); // Small delay so the section has mounted before scrolling
  };

  return (
    <section id='journey' className={`${styles.padding} max-w-7xl mx-auto relative z-10`}>
      {!revealed ? (
        // Teaser: a lone case-file button after the credits roll
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='flex flex-col items-center gap-4 py-10'
        >
          <p className='text-secondary text-[14px] uppercase tracking-widest'>
            You&apos;ve reached the end of the official record
          </p>
          {/* Frosted glass button — the inset top highlight is what gives it the gloss */}
          <button
            type='button'
            onClick={handleReveal}
            className='group relative overflow-hidden flex items-center gap-3 px-9 py-4 rounded-full text-white font-semibold text-[16px] transition-all duration-300 hover:-translate-y-0.5'
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.03))",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.20), 0 10px 30px rgba(0, 0, 0, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(145, 94, 255, 0.55)";
              e.currentTarget.style.boxShadow =
                "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 10px 40px rgba(145, 94, 255, 0.30)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
              e.currentTarget.style.boxShadow =
                "inset 0 1px 0 rgba(255, 255, 255, 0.20), 0 10px 30px rgba(0, 0, 0, 0.35)";
            }}
          >
            {/* A band of light sweeps across the glass on hover */}
            <span
              aria-hidden='true'
              className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out pointer-events-none'
              style={{
                background:
                  "linear-gradient(100deg, transparent 30%, rgba(255, 255, 255, 0.14) 50%, transparent 70%)",
              }}
            />
            <FingerprintIcon />
            <span className='relative'>Still want to know more?</span>
          </button>
          <p className='text-secondary text-[12px]'>Open the case file</p>
        </motion.div>
      ) : (
        // The revealed evidence board
        // No fade on the wrapper — each element below times its own entrance
        <div>
          {/* Section header, revealed line by line rather than all at once */}
          <motion.p
            className={styles.sectionSubText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: TIMELINE.label, duration: TIMELINE.labelDuration, ease: "easeOut" }}
          >
            Case file: Makanaka
          </motion.p>

          <motion.h2
            className={styles.sectionHeadText}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: TIMELINE.title, duration: TIMELINE.titleDuration, ease: "easeOut" }}
          >
            The Evidence Board.
          </motion.h2>

          <motion.p
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: TIMELINE.intro, duration: TIMELINE.introDuration, ease: "easeOut" }}
          >
            Exhibit A through F: proof that there&apos;s a person behind the
            code. Hackathons, milestones, and the moments in between — follow
            the red string.
          </motion.p>

          {/* The board: polaroids pinned in a scattered row, connected by the red string */}
          <div ref={boardRef} className='relative mt-16'>
            {/* Red string overlay — draws itself once the pins are placed */}
            <svg
              width={boardSize.w}
              height={boardSize.h}
              className='absolute top-0 left-0 pointer-events-none overflow-visible'
            >
              {/* Soft shadow under the string for depth — drawn in step with the thread
                  itself, otherwise the shadow would sit there fully drawn while the red
                  string is still being threaded */}
              <motion.path
                d={stringPath}
                fill='none'
                stroke='rgba(0, 0, 0, 0.35)'
                strokeWidth='2.5'
                transform='translate(2, 4)'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: TIMELINE.stringDraw, delay: STRING_DELAY, ease: "easeInOut" }}
              />
              <motion.path
                d={stringPath}
                fill='none'
                stroke='#e53935'
                strokeWidth='2.5'
                strokeLinecap='round'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: TIMELINE.stringDraw, delay: STRING_DELAY, ease: "easeInOut" }}
              />
            </svg>

            {/* Polaroid cards — sit above the string so it tucks behind the photos */}
            <div className='flex flex-wrap justify-center gap-x-10 gap-y-16'>
              {journeyMoments.map((moment, index) => (
                <PolaroidCard
                  key={moment.caption}
                  index={index}
                  registerRef={(el) => (cardRefs.current[index] = el)}
                  {...moment}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Exported without SectionWrapper — the reveal flow manages its own animations and anchor
export default Journey;
