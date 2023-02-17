/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmed's Portfolio",
  description:
    "I thrive to build software that can put a dent in the world. I am a software engineer with over two years of experience, working in designing and implementing the backend of software solutions for complex problems and building data pipelines.",
  og: {
    title: "Ahmed Mohamed Portfolio",
    type: "website",
    url: "http://ahmohamed.com/",
  },
};

//Home Page
const greeting = {
  title: "Ahmed Mohamed",
  logo_name: "AhmedMohamed",
  nickname: "Osama",
  subTitle:
    "I thrive to build software that can put a dent in the world. I am a software engineer with over two years of experience, working in designing and implementing the backend of software solutions for complex problems and building data pipelines.",
  resumeLink:
    "https://drive.google.com/file/d/1IEEbsgIJKNIrf0Aer7JbZVyxujAjWK9x/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ahmedosama9777",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmedosama9777/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahmedosama9777@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design and implement applications backend in Django, Flask & Spring Boot",
        "⚡ Design and implement RESTful APIs",
        "⚡ Scale backend to handle millions of requests per second",
        "⚡ Collaborate with Front-end developers to integrate user-facing elements with server side logic",
        "⚡ Work with the product and design teams to understand end-user requirements, formulate use cases, and then translate that into a pragmatic and effective technical solution",
        "⚡ Develope frontend web pages and mobile applications using React",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "gRPC",
          fontAwesomeClassname: "logos:grpc",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Celery",
          fontAwesomeClassname: "simple-icons:celery",
          style: {},
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "vscode-icons:file-type-nginx",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "logos:rabbitmq-icon",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
          style: {
            color: "#C6302B",
          },
        },
        {
          skillName: "Microservices",
          fontAwesomeClassname: "carbon:microservices-1",
          style: {},
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "clarity:ci-cd-line",
          style: {},
        },
      ],
    },
    {
      title: "Data & Infrastructure Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Create, execute and manage data pipelines, while scaling and improving performance",
        "⚡ Build and deliver new tools to collect and validate data, sample the data using different strategies",
        "⚡ Write infrastructure as a code",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Groovy",
          fontAwesomeClassname: "vscode-icons:file-type-groovy",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ahmedosama9777/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ahmedosama9777",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ahmedosama97",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Faculty of Engineering - Cairo University",
      subtitle: "Bachelor Degree - Computer and Communications Engineering",
      logo_path: "cairo_uni.png",
      alt_name: "Cairo University",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ Studied Data Structures & Algorithms, Design Patterns, Software Engineering, Machine Learning and Mathematics.",
        "⚡ Designed and implemented the software of an electric vehicle and contributed as a member of Cairo Uni Racing Team in the international competition Formula Student by IMechE in the UK.",
        "⚡ Designed and implemented the software of an autonomous racing vehicle as the graduation project.",
      ],
      website_link: "https://eng.cu.edu.eg/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AlgoExpert",
      subtitle: "- AlgoExpert.io",
      logo_path: "algoexpert.png",
      certificate_link:
        "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-da0a065a10",
      color_code: "#FFFFFF",
    },
    {
      title: "SystemExpert",
      subtitle: "- AlgoExpert.io",
      logo_path: "algoexpert.png",
      certificate_link:
        "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-01b16e342e",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a software engineer with over two years of experience, working in designing and implementing the backend of software solutions for complex problems and building data pipelines, mainly using Python and Django",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer II",
          company: "Smart Eye",
          company_url: "https://smarteye.se/",
          logo_path: "smarteye.png",
          duration: "May 2022 - Current",
          location: "Cairo, Egypt",
          description: [
            "⚡ Built, maintained and developed data pipelines and platform for data that comes from over a million cars on the road and drives a $50M business using the latest technologies of Python, Django, Docker, Kubernetes, MongoDB, PostgreSQL and Jenkins.",
            "⚡ Led the design and development of a data upload pipeline, that exceeds the legacy pipeline by 90% better latency using Django and MongoDB.",
            "⚡ Designed and implemented a data inventory package, that can go through multiple recordings data sources and generate essential statistics about the existing recordings.",
            "⚡ Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, unit testing, and test-driven development.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer I",
          company: "CORELIA",
          company_url: "https://corelia.ai/",
          logo_path: "corelia.png",
          duration: "April 2021 - April 2022",
          location: "Cairo, Egypt",
          description: [
            "⚡ Led the design and development of a new truck reidentification system for EuroTunnel, exceeding the old system by 5% in accuracy and 30% in latency, using Python, Django, React, Docker, and Pytorch.",
            "⚡ Developed a receipt classification module, that handled thousands of requests per second using Python, Flask, Docker, and PostgreSQL.",
            "⚡ Led the development of several products E2E, from identifying system requirements and partner dependencies to workload balancing, software implementation, engineering, testing, and configuring metrics, alarms, monitors, and dashboards.",
            "⚡ Led agile teams to deliver complex projects.",
            "⚡ Mentored new graduate interns in software engineering, data structures, algorithms, and system design.",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer I",
          company: "XECUTE",
          company_url: "",
          logo_path: "xecute.jpg",
          duration: "July 2020 - April 2021",
          location: "Cairo, Egypt",
          description: [
            "⚡ Designed and developed an automatic mock-up creator for artists, using image processing techniques, Python, and Django to create mocks of T-Shirts, cups, and phone cases.",
            "⚡ Developed a food delivery tracking system, capable of handling hundreds of requests per second, reflecting an increase in sales of about 10% and a 40% increase in customer reviews, using RabbitMQ, Python, and Django.",
            "⚡ Developed a management system to handle the business operations of granting organic certification for farms, using Python, Django, and PostgreSQL.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer",
          company: "One Lab Egypt",
          company_url: "",
          logo_path: "One-Lab-Logo.jpg",
          duration: "Oct 2019 - July 2020",
          location: "Cairo, Egypt",
          description: [
            "⚡ AutoRace: Computer Vision/Embedded Systems development (Python/C++)",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Egyptian Ambulance Organization",
          company_url: "",
          logo_path: "ambulance.jpg",
          duration: "June 2018 - Sep 2019",
          location: "Cairo, Egypt",
          description: [
            "⚡ Automated surgery waiting list: Backend web application development (PHP/Laravel)",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Robotics Team Lead & Electrical Technical Director",
          company: "Cairo Uni Racing Team",
          company_url: "",
          logo_path: "curt.jpg",
          duration: "Sep 2019 - Aug 2020",
          location: "Cairo, Egypt",
          description: [
            "⚡ Designed and implemented a reliable and robust perception pipeline based on a single monocular camera.",
            "⚡ Designed and implemented a simultaneous localisation and mapping module.",
            "⚡ Integrated all software modules through a ROS skeleton.",
            "⚡ Simulated and visulized the full functioning driverless vehicle.",
            "⚡ Managed a team of 30 members to design and simulate the electrical system of a formula-style electric vehicle.",
            "⚡ tools: Python, PyTorch, ROS, rviz, git.",
          ],
          color: "#0879bf",
        },
        {
          title: "Embedded Systems Team Lead",
          company: "Cairo Uni Racing Team",
          company_url: "",
          logo_path: "curt.jpg",
          duration: "Aug 2018 - Aug 2019",
          location: "Cairo, Egypt",
          description: [
            "⚡ Along side a team, designed, simulated and manufactured a formula style electric vehicle.",
            "⚡ Using ARM controllers, built an embedded system of several electronic control units connected through CAN protocol.",
            "⚡ Managed a team of seven members to work together under a V-model of development.",
            "⚡ Gained deep and intensive knowledge and practical experience in embedded systems and automotive industry.",
            "⚡ tools: C++, C, git, ARM controllers, CAN protocol.",
          ],
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. My best experience is creating the backend of solutions to complex problems, deploy and scale the system.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ahmed_mohamed.png",
    description: "Feel free to contact me!",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Sometimes I like to write down technical blogs!",
    link: "https://medium.com/@ahmedosama9777",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
