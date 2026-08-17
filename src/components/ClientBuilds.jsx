// Importing necessary libraries and components
import React from 'react'
import { Tilt } from 'react-tilt'; // Tilt effect for interactive card animations

import { motion } from 'framer-motion'; // Framer Motion for animations
import { styles } from '../styles'; // Custom styles for the component
import { github } from '../assets'
import { SectionWrapper } from '../hoc' // Higher-Order Component (HOC) for section wrapping
import { clientBuilds } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

// Globe icon for the "visit the live site" button.
// Inline SVG (rather than an image asset) so it inherits colour and stays sharp at any size.
const GlobeIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-1/2 h-1/2 text-white'
    aria-hidden='true'
  >
    <circle cx='12' cy='12' r='10' /> {/* The globe outline */}
    <path d='M2 12h20' /> {/* The equator */}
    {/* The curved meridian, giving the flat circle its 3D read */}
    <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
  </svg>
);

// Pulls a clean domain out of a live link (e.g. "https://www.example.co.za/" -> "example.co.za")
// Returns an empty string for placeholder links so nothing broken is ever displayed.
const getDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

// ClientBuildCard Component: a single website built for a client
const ClientBuildCard = ({
  index, // Index of the build for staggered animations
  name, // Name of the client / site
  description, // What was built and why
  tags, // Technologies used on the build
  image, // Screenshot of the live site
  live_site_link, // Link to the live website
  source_code_link, // Optional link to the repository (omitted for private client code)
}) => {
  const domain = getDomain(live_site_link);

  return (
    // Motion wrapper for fade-in animation
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className='w-full h-full'>
      {/* Tilt effect for interactive hover animations — gentler than the project cards, since these are wider */}
      <Tilt
        options={{
          max: 15, // Maximum tilt angle
          scale: 1.02, // Subtle scale on hover
          speed: 450, // Speed of the tilt animation
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full' // Styling for the card
      >
        {/* Container for the site screenshot */}
        <div className='relative w-full h-[280px]'>
          {/* The screenshot itself is a link to the live site */}
          <a
            href={live_site_link}
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full'
            aria-label={`Visit the ${name} website`}
          >
            <img
              src={image} // Screenshot of the client site
              alt={`${name} website`} // Alt text for accessibility
              className='w-full h-full object-cover rounded-2xl' // Styling for the image
            />
          </a>

          {/* Icon buttons overlaid in the top-right corner of the screenshot */}
          <div className='absolute top-3 right-3 flex gap-2'>
            {/* Globe icon — opens the live website */}
            <a
              href={live_site_link}
              target='_blank'
              rel='noopener noreferrer'
              title='Visit live site'
              aria-label={`Visit the ${name} live site`}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <GlobeIcon />
            </a>

            {/* GitHub icon — only rendered when the code is public */}
            {source_code_link && (
              <a
                href={source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                title='View source code'
                aria-label={`View the ${name} source code`}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github} // GitHub icon
                  alt='source code' // Alt text for accessibility
                  className='w-1/2 h-1/2 object-contain' // Styling for the icon
                />
              </a>
            )}
          </div>
        </div>

        {/* Build details section */}
        <div className='mt-5'>
          <div className='flex items-center justify-between gap-3 flex-wrap'>
            <a
              href={live_site_link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-[24px] hover:text-secondary transition-colors'
            >
              {name} {/* Client site name */}
            </a>

            {/* Domain of the live site, pulled straight from the link */}
            {domain && (
              <span className='text-secondary text-[13px]'>{domain} ↗</span>
            )}
          </div>

          <p className='mt-2 text-secondary text-[14px]'>{description}</p> {/* What was built */}
        </div>

        {/* Tags section for technologies used on the build */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag
              className={`text-[14px] ${tag.color}`} // Dynamic styling for tag colors
            >
              #{tag.name} {/* Tag name */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// ClientBuilds Component: highlights websites shipped for paying clients, above the personal projects
const ClientBuilds = () => {
  return (
    <>
      {/* Section header with text animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Client work</p> {/* Subtitle */}
        <h2 className={`${styles.sectionHeadText}`}>Featured Client Builds.</h2> {/* Title */}
      </motion.div>

      {/* Section description with fade-in animation */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Animation settings
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' // Styling for the description
        >
          Beyond personal projects, these are live websites I designed and built
          for real clients — briefed, scoped, and shipped to production. Click
          through to visit any of them.
        </motion.p>
      </div>

      {/* Two cards side by side on desktop, stacked on mobile */}
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-7'>
        {clientBuilds.map((build, index) => (
          <ClientBuildCard key={`client-build-${index}`} index={index} {...build} /> // Render each client build card
        ))}
      </div>
    </>
  );
};

// Export the ClientBuilds component wrapped with the SectionWrapper HOC
export default SectionWrapper(ClientBuilds, 'client-work');
