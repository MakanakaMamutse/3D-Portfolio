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
  } from "../assets";
  
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Operations Intern",
      company_name: "Shop2Shop",
      icon: Shop2Shop,
      iconBg: "#FFA500",
      date: "2022 - 2023",
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
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
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
  
  const projects = [
    {
      name: "Something Car's",
      description:
        "This project is in the making. I'm not sure excatly when i'll finish, as im cooking other pots aswell...",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
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
  
  export { services, technologies, experiences, testimonials, projects };