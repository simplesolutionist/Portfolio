/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ayman Ali",
  title: "Hello, I'm Ayman",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Vuejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Yz2mtP964or1xsIqUTLrp1hr9mYCJsdQ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/simplesolutionist",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "aymanali180@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@aymanali180",
  stackoverflow: "",
  instagram: "https://www.instagram.com/reactjsofficial/?hl=en",
  twitter: "https://twitter.com/reactjs",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SUNY New Paltz",
      logo: require("./assets/images/sunynewpaltzlogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2018 - May 2021",
      desc: "Participated in the research of EHR software and published a thesis paper.",
      descBullets: [
        "An Empirial Study and Simulation of EHR Software in Light of COVID-19"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/education.jpeg"),
      subHeader: "Masters of Science in Computer Science",
      duration: "August 2021 - May 2023",
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Develop Intern",
      company: "TREC LLC",
      companylogo: require("./assets/images/workLogo.png"),
      date: "December 2021 – May 2021",
      desc:
        "Team Lead at Real Estate Start-Up and mainly setting up offer listing and transaction system.",
    
    descBullets: [
      "Properly submit offer with offer form",
      "List multiple properties",
      "Buyer, Seller, and Vendor dashboard and functionalities",
    ]
  },
    {
      role: "Virtual Tech and Information Intern",
      company: "Gao Tek",
      companylogo: require("./assets/images/workLogo2.jpg"),
      date: "October 2020 – February 2021",
      descBullets: [
        "Tech writing for online stores",
        "Tech support, webpages, and datasheets developments",
        "Digital marketing, SEO"
      ],
    },
    {
      role: "Software Engineer",
      company: "SUNY New Paltz Projects",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "August 2018 – May 2021",
      desc:
        "Worked on numerous software projects",
      descBullets: [
        "Artificial Neural Network for text detection (Python)",
        "Tutoring",
        "Gravity Gym and Instagram VueJS App",
        "Creating Electronic Health Record software"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects ReactJS/NextJS",
  subtitle:
    "With Love for Developing cool stuff, I love to clone apps and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://airbnb-clone-44382.web.app/",
      title: "AirBnB Clone",
      description:
        "Explore unique stays, entire homes, search dates, and book your stay efficiently with this ReactJS AirBNB Clone"
    },
    {
      url: "https://disney-clone-d1e27.web.app/",
      title: "Disney Clone",
      description:
        "Browse through a clean and functional user interface with the Disney clone application build."
    },
    {
    url: "https://nextjs-hulu2-0.vercel.app/",
    title: "Hulu 2.0 Clone",
    description:
      "Find various movie series, genres, and shows with the HULU 2.0 NextJS build  ."
  },
  {
    url: " https://netflix-meghsohor.netlify.app/",
    title: "Netflix Clone",
    description:
      "Sign up, sign in, view movies, and play trailers with this interactive clone of Netflix."
  },
  {
    url: "https://slack-clone-challenge-6207b.web.app/room/vgXn17Vv6QUVi8fDmlxc",
    title: "Slack Clone",
    description:
      "The Slack app allows users to interact with one another, send messages, and create new chat channels with the help of Firebase."
  },
  {
    url: "  https://tesla-clone-reactjs.herokuapp.com/",
    title: "Tesla Clone",
    description:
      "This app allows you to explore various Tesla models while also providing beautiful animation feature to enhance the feel of the app."
  },
  {
    url: "https://gravity-gym.herokuapp.com/",
    title: "Gravity Gym",
    description:
      "Fitness app utilizing NodeJs to track user fitness, add or update existing exercise log, and compare results with friends or family."
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(845) 418 9199",
  email_address: "aymanali180@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "reactjs", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
