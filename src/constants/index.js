import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unity,
    python,
    jupyter,
    cpp,
    bootstrap,
    express,
    mysql,
    htmlcssjs,
    tensorflow,
    blender,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML/CSS/JS",
      icon: htmlcssjs,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "SQL",
      icon: mysql
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ExpressJS",
      icon: express
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "jupyter notebook",
      icon: jupyter,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Unity3D",
      icon: unity,
    },
    
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "MERN Stack E-Commerce",
      icon: reactjs,
      iconBg: "black",
      date: "Feb 2023 - Apr 2023",
      points: [
        "A full-stack e-commerce web application built with React, Redux, Node, Express, MongoDB, and Stripe.",
        "Implemented features such as product search, product rating and review, product pagination, shopping cart, checkout process.",
        "Integrated Stripe API for payment processing.",
        "Utilized React Hooks and Redux for state management.",
      ],
      source_code_link: "https://github.com/",
    },
    {
      title: "COVID Detection using X-Ray images",
      icon: tensorflow,
      iconBg: "white",
      date: "Mar 2023 - Apr 2023",
      points: [
        "Developed a deep learning model using TensorFlow and Keras to detect COVID-19 from X-Ray images and embedded it on the webpage.",
        "Achieved an accuracy of 97% on the test set.",
        "Implemented a web application using Flask to upload X-Ray images and predict the result.",
        "Deployed the web application on PythonAnywhere.",
      ],
      source_code_link: "https://github.com/",
    },
    {
      title: "Designed 3D Models and developed AR app",
      icon: blender,
      iconBg: "white",
      date: "Nov 2022 - Jan 2023",
      points: [
        "Designed 3D models of several food items in blender.",
        "Imported the 3D models into Unity3D.",
        "Developed an AR app using Unity3D and Unity's AR Foundation to display the 3D models.",
      ],
      source_code_link: "https://github.com/",
    },
  ];
  
  const projects = [
    {
      name: "MERN Stack E-Commerce",
      icon: reactjs,
      date: 'Feb 2023 - Apr 2023',
      description: 
        "A full-stack e-commerce web application built with React, Redux, Node, Express, MongoDB, and Stripe.",
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
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };