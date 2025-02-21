import React, { useRef, useState } from "react"; // Importing React along with useRef and useState hooks
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import emailjs from "@emailjs/browser"; // Importing EmailJS for handling form submission

import { styles } from "../styles"; // Importing styles for consistent UI
import { EarthCanvas } from "./canvas"; // Importing 3D Earth component
import { SectionWrapper } from "../hoc"; // Importing Higher-Order Component for section wrapping
import { slideIn } from "../utils/motion"; // Importing motion utility for animations

// Contact component definition
const Contact = () => {
  const formRef = useRef(); // Creating a reference for the form element
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  }); // Initializing form state to hold user input

  const [loading, setLoading] = useState(false); // State to track form submission loading state

  // Handles changes in input fields and updates the state
  const handleChange = (e) => { 
    const { target } = e; // Extract target element from event
    const { name, value } = target; // Extract name and value of input field

    setForm({
      ...form, // Keep previous form values
      [name]: value, // Update the specific field dynamically
    });
  };
  
  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    setLoading(true); // Set loading state to true while sending email

    // Sending email using EmailJS service
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID from environment variables
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID
        {
          from_name: form.name, // Sender's name
          to_name: "Makanaka Mamutse", // Recipient's name
          from_email: form.email, // Sender's email address
          to_email: "makanakamamutse@gmail.com", // Recipient's email address
          message: form.message, // The message typed by the user
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // Public key for authentication
      )
      .then(
        () => {
          setLoading(false); // Stop loading animation
          alert("Thank you. I will get back to you as soon as possible."); // Show success message

          // Reset form fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Stop loading animation
          console.error(error); // Log error to console

          alert("Ahh, something went wrong. Please try again."); // Show error message
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Contact Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Slide-in animation from left
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Contact Form */}
        <form
          ref={formRef} // Assign form reference
          onSubmit={handleSubmit} // Handle form submission
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name Input Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name} // Controlled component
              onChange={handleChange} // Update state on change
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Email Input Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Message Input Field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"} {/* Change button text when loading */}
          </button>
        </form>
      </motion.div>

      {/* 3D Earth Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Slide-in animation from right
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> {/* Displays 3D rotating Earth */}
      </motion.div>
    </div>
  );
};

// Export the component wrapped inside SectionWrapper for styling and layout adjustments
export default SectionWrapper(Contact, "contact");
