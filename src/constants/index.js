import { w } from "maath/dist/misc-19a3ec46.esm";
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
  ico99x,
  stc,
  uom,
  portfolio,
  journeyjive,
  weatherX,
  threejs,
  shehan,
  linkedin,
  githubContact,
  instagram,
  email,
  phone,
  address,
  linkedinPurple,
  githubPurple,
  whatsappPurple,
  instagramPurple,
  facebookPurple,
  stackOverflowPurple,
  mediumPurple,
  emailPurple,
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
    id: "education",
    title: "Education",
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

const socialLinks = [
  { 
    name: "LinkedIn",
    link : "https://www.linkedin.com/in/harshana-batagalla-160a39250",
    title: "@harshana-batagalla",
    icon : linkedinPurple
  },
  {
    name: "Github",
    link : "https://github.com/harshanabatagalla",
    title: "@harshanabatagalla",
    icon : githubPurple
  },
  {
    name: "Email",
    link: "mailto:harshanabatagalla@gmail.com",
    title: "harshanabatagalla@gmail.com",
    icon: emailPurple
  },
  {
    name: "Watsapp",
    link: "https://wa.me/+94763226659",
    title: "+94 76 322 6659",
    icon: whatsappPurple
  },
  {
    name: "Medium",
    link: "https://medium.com/@harshanabatagalla",
    title: "@harshanabatagalla",
    icon: mediumPurple
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/18483031/harshana-batagalla",
    title: "@harshanabatagalla",
    icon: stackOverflowPurple
  },
  {
    name: "Instagram",
    link : 'https://www.instagram.com/_bataya/',
    title: "@_bataya",
    icon : instagramPurple
  }
];

const contactInfo = [
  {
    icon: email,
    info: '<a href="mailto:harshanabatagalla@gmail.com">harshanabatagalla@gmail.com</a>',
  },
  {
    icon: phone,
    info: '<a href="tel:+9476 322 6659">+94 76 322 6659</a>',
  },
  {
    icon: address,
    info: 'No.25,<br/>Koongahamula,<br/>Palapathwela,<br/>Matale,<br/>Sri Lanka.',
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    title: "Trainee Software Engineer",
    company_name: "99x",
    icon: ico99x,
    iconBg: "#fff",
    date: "January 2024 - July 2024",
    points: [
      "Joined a six-month internship during my third year as an undergraduate.",
      "Contributed to the development of new features, including the homepage, and enhancements for the 99x official website <a href='https://99x.io' target='_blank'>(<u>https://99x.io </u>)</a>, a CMS-based website built using Gatsby.",
      "Worked on the project portal of the company, a web application developed using Angular, .Net, and EF Core.",
      "Engaged in both front-end and back-end development of the project portal, gaining professional experience in Angular, .Net, EF Core, and SQL Server. ",
      "Collaborated with cross-functional teams, including designers, product managers, marketing personnel, and other developers, to create high-quality products.",
    ]
  }
];
const educations = [
  {
    title: "BSc.(Hons.) in Information Technology ( 2025 Expected )",
    company_name: "University of Moratuwa",
    icon: uom,
    iconBg: "#fff",
    date: "june 2021 - present",
    description: "Currently pursuing a BSc. (Hons.) in Information Technology, actively engaging in coursework and practical projects to enhance skills for impactful contributions in the dynamic tech industry."
  },
  {
    title: "G.C.E. A/L (Physical Science Stream)",
    company_name: "St. Thomas' College, Matale.",
    icon: stc,
    iconBg: "#fff",
    date: "2017-2019",
    description: "Completed Advanced Levels with a Z score of 1.6323. Studied Physics, Combined Mathematics , and Information and Communication Technology as main subjects."
  },
  {
    title: "G.C.E. O/L",
    company_name: "St. Thomas' College, Matale.",
    icon: stc,
    iconBg: "#fff",
    date: "2011 - 2016",
    description: "Completed with a score of 9 A-grades. My optional subjects were Geography, Eastern Music and ICT."
  }
];

const testimonials = [
  {
    testimonial:
      "Harshana contributed to the 99x corporate website technical activities during his internship, and as a person who had to work alongside with him and overlook a few of the tasks that were handed to him, He did a splendid job at abiding to his deadlines and overall communication on the status of said tasks. Harshana is a self studying individual and I'm pleased to have had him on our team.",
    name: "Shehan Cooray",
    designation: "Senior Digital Marketing Executive",
    company: "99x",
    image: shehan,
  },
];

const projects = [
  {
    name: "Journey Jive",
    description:
      "This project aims to develop a travel planning system that optimizes multi-destination trips by minimizing travel distances. It includes features such as real-time weather updates, future forecasts, and a trip-scoring system based on user reviews. Suggests nearby places of interest, enhancing the overall travel experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: journeyjive,
    source_code_link: "https://github.com/yukthi2000/semicolon",
  },
  {
    name: "WeatherX",
    description:
      "A simple front-end weather application that fetches weather data from the OpenWeatherMap API and displays it to the user. Users can search for weather data by city name and view the current weather, temperature, wind speed and humidity levels, as well as the weather forecast for the next five days",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openweathermap",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: weatherX,
    source_code_link: "https://github.com/harshanabatagalla/weatherX",
  },
  {
    name: "My Portfolio",
    description:
      "A personal portfolio website that showcases my work, skills, and experiences. The website is built using React, Tailwind CSS, Three js and Framer Motion. used EmailJS for the contact form and deployed on Vercel. The website is responsive and optimized for all devices. And also SEO friendly.<br/><br/>",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/harshanabatagalla/portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects, educations, socialLinks, contactInfo};