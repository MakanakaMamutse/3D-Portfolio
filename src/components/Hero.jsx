import { motion } from "framer-motion"; // Imported motion for animations

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"; // Imported 3D canvas component for the hero section

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero section container with absolute positioning */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* Left-side vertical line and dot design */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/> {/* Purple dot */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/* Gradient line */}
        </div>

        {/* Hero text content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Makanaka</span> {/* Name highlighted */}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I help to solve problems, through <br className='sm:block hidden' />
            the use of my tech skills
          </p>
        </div>
      </div>

      {/* 3D animated background */}
      <ComputersCanvas/>

      {/* Scroll-down animation indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0], // Moves up and down for a looping animation
              }}
              transition={{
                duration: 1.75, // Animation duration
                repeat: Infinity, // Loops indefinitely
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1' // Animated small ball inside the scroll indicator
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero