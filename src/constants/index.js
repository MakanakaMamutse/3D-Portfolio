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
    facialRecognition,
    EcommercePHP,
    CitiWay,
  } from "../assets";

  export const navLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  const services = [
    { title: "Full-Stack Developer", icon: web },
    { title: "Software Engineer", icon: mobile },
    { title: "Solutions Engineer", icon: backend },
    { title: "Tech Consultant", icon: creator },
  ];

  const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    { name: "mySQL", icon: mySQL },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Three JS", icon: threejs },
    { name: "git", icon: git },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
  ];

  const experiences = [
    {
      title: "Operations Intern",
      company_name: "Shop2Shop",
      icon: Shop2Shop,
      iconBg: "#FFA500",
      date: "Late 2022 - Mid 2023",
      points: [
        "Processed and verified customer legal documents to ensure compliance with Know Your Customer (KYC) regulations on the company native application.",
        "Collaborated with cross-functional teams to streamline document verification processes, improving efficiency and accuracy.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Gained hands-on experience in customer data management and maintaining confidentiality of sensitive information.",
      ],
    },
    {
      title: "Independent Software Developer & Consultant",
      company_name: "Contract-Based",
      icon: creator,
      iconBg: "#915EFF",
      date: "Jul 2023 - Present",
      points: [
        "Developed custom software solutions for diverse clients, including responsive web applications with modern frameworks, AI integration, and cross-platform compatibility.",
        "Delivered complete digital transformations including 10,000+ line codebase projects, performance optimization, and infrastructure overhauls.",
        "Provided technical consultancy services offering expert guidance on software architecture, digital solutions, and resolving complex implementation challenges.",
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
  ];

  const testimonials = [
    {
      testimonial: "I'm still working on this part,",
      name: "Triple H",
      designation: "CFO",
      company: "WWE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9681a8hm7zgsej_Blqn-oJZ4vW2SUhs7tw&s",
    },
    {
      testimonial: "I better start making some calls and sending messages.",
      name: "Joe Mama",
      designation: "COO",
      company: "Marvel Indsutries",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: "Let me know if you have nice things to say...👍🏾🌟",
      name: "Lisa Wang",
      designation: "CTO",
      company: "City of Brakpan",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];

  const projects = [
    {
      name: "M&M Sports",
      description:
        "Full-stack e-commerce web application built with PHP from the ground up. Features a complete backend admin platform with role-based access control, product management, order processing, and secure customer authentication.",
      tags: [
        { name: "php", color: "blue-text-gradient" },
        { name: "mysql", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
        { name: "bootstrap", color: "orange-text-gradient" },
      ],
      image: EcommercePHP,
      source_code_link: "https://github.com/MakanakaMamutse",
    },
    {
      name: "Facial Recognition",
      description:
        "Python-powered facial recognition attendance system designed for school portals and classrooms. Identifies students in real time using OpenCV and Dlib to automate attendance, reduce admin overhead, and streamline verification.",
      tags: [
        { name: "python", color: "blue-text-gradient" },
        { name: "opencv", color: "green-text-gradient" },
        { name: "dlib", color: "pink-text-gradient" },
        { name: "firebase", color: "orange-text-gradient" },
      ],
      image: facialRecognition,
      source_code_link: "https://github.com/MakanakaMamutse/FacialRecognitionAttendance",
    },
    {
      name: "CitiWay",
      description:
        "Android app unifying Cape Town's MyCiTi Bus and Metrorail into one platform for 500k+ commuters. Delivers real-time GPS tracking, multimodal route planning, and accurate fare calculation via Google Maps Platform APIs.",
      tags: [
        { name: "kotlin", color: "blue-text-gradient" },
        { name: "android", color: "green-text-gradient" },
        { name: "google-maps", color: "pink-text-gradient" },
        { name: "jetpack-compose", color: "orange-text-gradient" },
      ],
      image: CitiWay,
      source_code_link: "https://github.com/MakanakaMamutse",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
