// Defines an animation variant for text appearance with a vertical slide-in effect.
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50, // Starts 50 pixels above
      opacity: 0, // Initially hidden
    },
    show: {
      y: 0, // Moves to original position
      opacity: 1, // Becomes visible
      transition: {
        type: "spring", // Spring animation for a natural bounce effect
        duration: 1.25, // Animation duration
        delay: delay, // Customizable delay before animation starts
      },
    },
  };
};

// Defines a fade-in effect with directional movement.
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Moves horizontally based on direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // Moves vertically based on direction
      opacity: 0, // Initially hidden
    },
    show: {
      x: 0, // Moves to original position
      y: 0,
      opacity: 1, // Becomes visible
      transition: {
        type: type, // Defines transition type (spring, tween, etc.)
        delay: delay, // Customizable delay before animation starts
        duration: duration, // Duration of the animation
        ease: "easeOut", // Smooth exit effect
      },
    },
  };
};

// Defines a zoom-in effect with scaling and opacity.
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0, // Starts from a small size
      opacity: 0, // Initially hidden
    },
    show: {
      scale: 1, // Scales up to original size
      opacity: 1, // Becomes visible
      transition: {
        type: "tween", // Smooth tween animation
        delay: delay, // Customizable delay before animation starts
        duration: duration, // Duration of the animation
        ease: "easeOut", // Smooth exit effect
      },
    },
  };
};

// Defines a sliding animation from a specified direction.
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Moves horizontally based on direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // Moves vertically based on direction
    },
    show: {
      x: 0, // Moves to original position
      y: 0,
      transition: {
        type: type, // Defines transition type
        delay: delay, // Customizable delay before animation starts
        duration: duration, // Duration of the animation
        ease: "easeOut", // Smooth exit effect
      },
    },
  };
};

// Defines a staggered animation container for child elements.
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {}, // Initial hidden state
    show: {
      transition: {
        staggerChildren: staggerChildren, // Defines time delay between child animations
        delayChildren: delayChildren || 0, // Optional initial delay before animations start
      },
    },
  };
};
