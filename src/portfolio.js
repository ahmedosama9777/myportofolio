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
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design and implement applications backend in Django, Flask & Spring Boot",
        "⚡ Scale backend to handle millions of requests per second",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: {
            color: "#FF6600",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#C6302B",
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
      title: "Cairo University - Faculty of Engineering",
      subtitle:
        "Bachelor of Science in Computer and Communications Engineering",
      logo_path: "cairo_uni.png",
      alt_name: "Cairo University",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ I have studied Data Structures & Algorithms, Design Patterns, Software Engineering, Machine Learning and Mathematics.",
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
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
