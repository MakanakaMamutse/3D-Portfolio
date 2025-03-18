// Importing necessary libraries, components, and assets
import React, { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import { Link } from "react-router-dom"; // Link component for navigation
import { styles } from "../styles"; // Custom styles for the component
import { navLinks } from "../constants"; // Navigation links data
import { menu, close } from "../assets"; // Icons for the mobile menu toggle


// Navbar Component: Represents the navigation bar for the application
const Navbar = () => {
  // State to track the active navigation link
  const [active, setActive] = useState("");
  // State to toggle the mobile menu visibility
  const [toggle, setToggle] = useState(false);

  return (
    // Navigation bar container with fixed positioning and styling
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      {/* Container for the navbar content with max-width and alignment */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and brand name section */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Reset active state
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
        >
          {/* Logo image */}
          <img src="/mLogo.png" alt='logo' className='w-10 h-10 object-contain' />
          {/* My name with conditional rendering for responsiveness */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Makanaka&nbsp; <span className='sm:block hidden'>|&nbsp;Mamutse</span>
          </p>
        </Link>

        {/* Desktop navigation links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} // Set the active link
            >
              <a href={`#${link.id}`}>{link.title}</a> {/* Navigation link */}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle and navigation links */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Toggle button for mobile menu */}
          <img
            src={toggle ? close : menu} // Toggle between menu and close icons
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Toggle the mobile menu state
          />

          {/* Mobile menu dropdown with animation and styling */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* List of mobile navigation links */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // Close the mobile menu
                    setActive(link.title); // Set the active link
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a> {/* Navigation link */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar