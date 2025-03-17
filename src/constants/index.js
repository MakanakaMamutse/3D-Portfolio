// Imported assets including icons, logos, and images for use throughout the application
import {
    mobile,
    backend,
    creator,
    web,


    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Java, 
    Python,
    mySQL,


    meta,
    starbucks,
    Lead4Life,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Shop2Shop,
    ComingSoon,
    portfolio3D,
  } from "../assets";
  
  // Navigation links for the application, defining the sections available in the navigation bar
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // Services offered or roles performed, each associated with an icon for visual representation
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Student",
      icon: creator,
    },
  ];
  
  // Technologies and tools used, each paired with an icon for display purposes
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "mySQL",
      icon: mySQL,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "Python",
      icon: Python,
    },
  ];
  
  // Professional experiences, detailing roles, companies, and key responsibilities
  const experiences = [
    {
      title: "Operations Intern",
      company_name: "Shop2Shop",
      icon: Shop2Shop,
      iconBg: "#FFA500",
      date: " Late 2022 - Mid 2023",
      points: [
        "Processed and verified customer legal documents to ensure compliance with Know Your Customer (KYC) regulations on the company’s native application.",
        "Collaborated with cross-functional teams to streamline document verification processes, improving efficiency and accuracy.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Gained hands-on experience in customer data management and maintaining confidentiality of sensitive information.",
      ],
    },
    {
      title: "Program Facilitator",
      company_name: "Lead4Life",
      icon: Lead4Life,
      iconBg: "#fff",
      date: "Jan 2024 - Present",
      points: [
        "Designed and delivered innovative experiential learning programs for schools, businesses, and community organizations, fostering personal and professional development.",
        "Facilitated engaging workshops and training sessions, utilizing interactive techniques to enhance participant learning and retention.",
        "Collaborated with cross-functional teams to tailor programs to the unique needs of diverse audiences, ensuring alignment with organizational goals.",
        "Monitored and evaluated program effectiveness, gathering feedback to continuously improve content and delivery methods.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "This is some dummy text. I'm working towards the next mission",
      ],
    },
  ];

  // Testimonials from clients or colleagues, highlighting feedback and endorsements
  const testimonials = [
    {
      testimonial:
        "I'm still working on this part,",
      name: "Triple H",
      designation: "CFO",
      company: "WWE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9681a8hm7zgsej_Blqn-oJZ4vW2SUhs7tw&s",
    },
    {
      testimonial:
        "I better start making some calls and sending messages.",
      name: "Joe Mama",
      designation: "COO",
      company: "Marvel Indsutries",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Let me know if you have nice things to say...👍🏾🌟",
      name: "Lisa Wang",
      designation: "CTO",
      company: "City of Brakpan",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];
  
  // Projects worked on, including descriptions, technologies used, and links to source code
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "A stunning 3D portfolio website I built with cutting-edge web technologies to showcase my projects and skills in an interactive and engaging way.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "vite",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio3D,
      source_code_link: "https://github.com/MakanakaMamutse/3D-Portfolio",
    },
    {
      name: "Lorem Ipsum",
      description:
        "New projects are in the works. Stay tuned for updates—I’m excited to share them with you soon.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ComingSoon,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lorem Ipsum",
      description:
        "New projects are in the works. Stay tuned for updates—I’m excited to share them with you soon.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ComingSoon,
      source_code_link: "https://github.com/",
    },
  ];
  
  // Exported constants for use in other parts of the application
  export { services, technologies, experiences, testimonials, projects };