import React from 'react'; // Imported React for component structure

// Imported Vertical Timeline components for displaying experiences
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { motion } from 'framer-motion'; // Imported motion for animations

import 'react-vertical-timeline-component/style.min.css'; // Imported timeline component styles

import { styles } from '../styles'; // Imported styles for consistent design
import { experiences } from '../constants'; // Imported experiences data
import { SectionWrapper } from '../hoc'; // Imported HOC for section styling
import { textVariant } from '../utils/motion'; // Imported animation variant

// Component for rendering an individual experience card
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Set background color for card
        color: "#fff", // Set text color
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }} // Styling for the arrow pointing to the timeline
      date={experience.date} // Display the date of the experience
      iconStyle={{ background: experience.iconBg }} // Set background color for the icon
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon} // Display company logo
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain' // Ensure image fits within the icon area
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> {/* Job title */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name} {/* Company name */}
        </p>
      </div>

      {/* List of key responsibilities or achievements */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience component that renders all experience cards
const Experience = () => {
  return (
    <>
      {/* Section header with animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline container for experiences */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each experience
              experience={experience} // Passing experience data to ExperienceCard component
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work'); // Wrapped Experience component with HOC for section styling
