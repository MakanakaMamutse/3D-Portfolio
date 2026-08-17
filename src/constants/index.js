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
    PrimeProjectsSite,
    Lead4LifeSite,
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
      title: "Software Developer & Consultant",
      company_name: "Contract-Based",
      icon: web,
      iconBg: "#1d1836",
      date: "Jul 2023 - Present",
      points: [
        "Designed and delivered full-stack software solutions for multiple clients, including database-driven web applications with AI integrations and responsive cross-platform interfaces.",
        "Architected and implemented production systems exceeding 10,000 lines of code, covering database design, backend APIs, and modern frontend frameworks.",
        "Integrated third-party services and AI-powered features to automate workflows, improve user experience, and support real-world business operations.",
        "Provided technical consultancy on software architecture, performance optimisation, and deployment strategies for scalable and maintainable applications.",
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

  // Websites built for paying clients — rendered in the "Featured Client Builds"
  // section directly above Projects. Two side-by-side cards.
  // Leaving `source_code_link` out entirely hides the GitHub icon on that card
  // (useful when the client's code is private) — the globe icon always shows.
  const clientBuilds = [
    {
      name: "Prime Projects",
      description:
        "Marketing website for a construction and renovation business. Full-bleed hero, a clear breakdown of services, a portfolio of completed work, and a direct enquiry flow that turns visitors into project leads.",
      tags: [
        { name: "construction", color: "blue-text-gradient" },
        { name: "renovation", color: "green-text-gradient" },
        { name: "marketing-site", color: "pink-text-gradient" },
        { name: "lead-capture", color: "orange-text-gradient" },
      ],
      image: PrimeProjectsSite,
      live_site_link: "https://primeprojects.co.za/",
      source_code_link: "https://github.com/MakanakaMamutse/Prime-Projects-Construction-Website",
    },
    {
      name: "Lead4Life",
      description:
        "Website for a leadership development company running experiential learning programmes. Programme pages, layered navigation, and contact routes built to reach schools, teams, and corporate partners.",
      tags: [
        { name: "education", color: "blue-text-gradient" },
        { name: "leadership", color: "green-text-gradient" },
        { name: "multi-page", color: "pink-text-gradient" },
        { name: "live-chat", color: "orange-text-gradient" },
      ],
      image: Lead4LifeSite,
      live_site_link: "https://www.lead4life.co.za/",
      source_code_link: "https://github.com/MakanakaMamutse/Lead4Life-Website",
    },
  ];

  // Evidence board moments for the Journey section.
  // To add a real photo: drop it in src/assets/journey/, import + export it in
  // src/assets/index.js, import it at the top of this file, then replace `image: null` below.
  const journeyMoments = [
    {
      caption: "Where it all began",
      date: "The early days",
      blurb: "First lines of code, many broken builds.",
      image: null,
    },
    {
      caption: "Hackathon mode",
      date: "48 hours, no sleep",
      blurb: "Shipping under pressure with a great team.",
      image: null,
    },
    {
      caption: "First real clients",
      date: "2023",
      blurb: "Consulting and building for actual businesses.",
      image: null,
    },
    {
      caption: "CitiWay comes alive",
      date: "2024",
      blurb: "One app for Cape Town's buses and trains.",
      image: null,
    },
    {
      caption: "Graduation day",
      date: "2025",
      blurb: "Made it official.",
      image: null,
    },
    {
      caption: "What's next...",
      date: "To be continued",
      blurb: "The board keeps growing.",
      image: null,
    },
  ];

  export { services, technologies, experiences, testimonials, projects, clientBuilds, journeyMoments };
