import { motion } from "framer-motion"; // Imported motion for animations
import { styles } from "../styles"; // Imported shared styles
import { staggerContainer } from "../utils/motion"; // Imported stagger animation function

// Higher-Order Component (HOC) that wraps a given component with an animated section
const SectionWrapper = (Component, idName) => 
    function HOC() {
        return (
          <motion.section
            variants={staggerContainer()} // Applied staggered animation for child elements
            initial='hidden' // Set initial state before animation starts
            whileInView='show' // Trigger animation when the section enters the viewport
            viewport={{ once: true, amount: 0.25 }} // Ensured animation runs once when 25% of the section is visible
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Applied global styles for spacing and positioning
          >
            {/* Invisible span for linking via ID */}
            <span className='hash-span' id={idName}>
             &nbsp;
            </span>

            <Component /> {/* Rendered the wrapped component */}
          </motion.section>
        );
    }

export default SectionWrapper; // Exported the Higher-Order Component
