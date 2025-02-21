import React from 'react' // Importing React
import { Tilt } from 'react-tilt' // Importing Tilt for 3D tilt effect
import { motion } from 'framer-motion' // Importing Framer Motion for animations

import { styles } from '../styles' // Importing styling configurations
import { services } from '../constants' // Importing an array of services
import { fadeIn, textVariant } from '../utils/motion' // Importing animation utility functions

import { SectionWrapper } from '../hoc' // Importing HOC to apply consistent section styles

// Component to render each service card
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'> {/* 3D tilt effect */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Animation with staggered effect
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' // Gradient border and shadow
    >
      <div
        options={{
          max: 45, // Maximum tilt rotation
          scale: 1, // No scaling on hover
          speed: 450, // Speed of tilt effect
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* Service Icon */}
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        {/* Service Title */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Main About Section
const About = () => {
  return (
    <>
      {/* Animated introduction */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Animated paragraph with fade-in effect */}
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Service Cards */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// Exporting About section wrapped inside SectionWrapper for layout and styling
export default SectionWrapper(About, "about")
