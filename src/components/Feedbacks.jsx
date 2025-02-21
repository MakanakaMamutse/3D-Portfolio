import React from 'react'; 
import { motion } from 'framer-motion'; // Imported motion for animations

import { styles } from '../styles'; 
import { SectionWrapper } from '../hoc'; // Imported HOC for section wrapping
import { fadeIn, textVariant } from '../utils/motion'; // Imported animation utilities

import { testimonials } from '../constants'; // Imported testimonials data

// Component for individual feedback/testimonial card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)} // Applied fade-in animation with delay based on index
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full' // Styling for card appearance
  >
    <p className='text-white font-black text-[48px]'>"</p> {/* Quotation mark for aesthetic effect */}

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> {/* Testimonial text */}

      {/* Container for user details */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name} {/* Name with a gradient highlight */}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company} {/* User designation and company */}
          </p>
        </div>

        {/* User profile image */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

// Main Feedbacks component
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}> {/* Feedback section container */}
      
      {/* Section header with a background */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}> {/* Applied text variant animation */}
          <p className={styles.sectionSubText}>What others say</p> {/* Subtitle */}
          <h2 className={styles.sectionHeadText}>Testimonials.</h2> {/* Section heading */}
        </motion.div>
      </div>

      {/* Testimonials list with animation and layout */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} /> // Mapped testimonials into FeedbackCard components
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, ""); // Wrapped component with HOC for styling and export
