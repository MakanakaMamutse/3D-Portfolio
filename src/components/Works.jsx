// Importing necessary libraries and components
import React from 'react'
import { Tilt } from 'react-tilt'; // Tilt effect for interactive card animations

import { motion } from 'framer-motion'; // Framer Motion for animations
import { styles } from '../styles'; // Custom styles for the component
import { github } from '../assets'
import { SectionWrapper } from '../hoc' // Higher-Order Component (HOC) for section wrapping
import { projects } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'


// ProjectCard Component: Represents a single project card with details and animations
const ProjectCard = ({
  index, // Index of the project for staggered animations
  name, // Name of the project
  description, // Description of the project
  tags, // Technologies or tags associated with the project
  image, // Image or screenshot of the project
  source_code_link, // Link to the project's source code
}) => {
  return (
    // Motion wrapper for fade-in animation
    <motion.div variants={fadeIn("up", "spring", index * 0.8, 1.25)}>
      {/* Tilt effect for interactive hover animations */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle
          scale: 1.1, // Scale effect on hover
          speed: 450, // Speed of the tilt animation
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' // Styling for the card
      >
        {/* Container for the project image */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image} // Project image
            alt='project_image' // Alt text for accessibility
            className='w-full h-full object-cover rounded-2xl' // Styling for the image
          />

          {/* GitHub icon overlay for source code link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Opens the source code link in a new tab
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' // Styling for the GitHub icon
            >
              <img
                src={github} // GitHub icon
                alt='source code' // Alt text for accessibility
                className='w-1/2 h-1/2 object-contain' // Styling for the icon
              />
            </div>
          </div>
        </div>

        {/* Project details section */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3> {/* Project name */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p> {/* Project description */}
        </div>

        {/* Tags section for technologies used in the project */}
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

// Works Component: Displays a list of projects with animations and descriptions
const Works = () => {
  return (
    <>
      {/* Section header with text animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p> {/* Subtitle */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2> {/* Title */}
      </motion.div>

      {/* Section description with fade-in animation */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Animation settings
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' // Styling for the description
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Container for the list of project cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} /> // Render each project card
        ))}
      </div>
    </>
  );
};

// Export the Works component wrapped with the SectionWrapper HOC
export default SectionWrapper(Works, 'projects');