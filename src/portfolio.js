
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Zain Ahmed",
  title: "Hi all, I'm Zain",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1uBIK925--Sp20JsdTJqG2NiUqoUTphOG/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/zainbinfurqan",
  linkedin: "https://www.linkedin.com/in/zain-ahmed-231349132/",
  gmail: "zain.ahmed199524@gmail.com",
  facebook: "https://www.facebook.com/zain.ahmed.75491",
  twitter: "https://twitter.com/zainahmed241995",
  instagram: "https://www.instagram.com/zainbinfurqan/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (React library)",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend (Node.js)",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile Applications (React Native)",
      progressPercentage: "50%"
    },
    {
      Stack: "Cloud FireStore",
      progressPercentage: "30%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "NexDegree",
      companylogo: require("./assets/images/nexdegree.png"),
      date: "March 2020 – Present",
      desc: "Work as Front End developer ",
      descBullets: [
        "Work on API's integration in React applications",
        "To manage state of application using Redux Store Management library with default pattern",
        "Work on UI development",
        "Work on component functionalities using Functional/Class Components"
      ]
    },
    {
      role: "Software Engineer",
      company: "Vservices",
      companylogo: require("./assets/images/vservices.png"),
      date: "Oct 2019 – Feb 2020",
      desc: "Work as Junior MERN Stack developer",
      descBullets: [
        "Work on UI development in React framwork",
        "Work on API's integration and handle all the functionalities",
        "Work on Redux Store Management to handle/manipulate data from components to components",
        "Work on Front End functionalities for data display and data manipulating with apis",
        "Work on component functionalities using Functional/Class Components",
        "Work on BackEnd Api's development in Node.js using express",
        "Work on Database logics and application structure in MongoDB",
        "work on write queries for different logics and data manipulating functionalities"
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    //   {
    //     image: require("./assets/images/saayaHealthLogo.webp"),
    //     link: "https://beliefchallenge.com/"
    //   },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Web App Developer",
      subtitle: "Completed Certifcation from Aptech for  Web App Development",
      image: require("./assets/images/aptech.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/10ju0JDivZa3h1EVo9-oY0yMqsixnSeWW/view?usp=sharing" },
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@zain.ahmed_5360/create-swap-to-left-animation-in-react-native-bc2c699a1afc",
      title: "Animation with React Native",
      description: "A simple animation in React Native for some amazing example"
    },
    {
      url: "https://medium.com/@zain.ahmed_5360/upload-image-from-react-native-application-to-node-js-server-bf029eb6c835",
      title: "Uplaod image from React Native on Node.js server",
      description: "Artical is about how we can upload iamge from mobile to node.js server in React Native"
    }
  ]
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ]
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3022408099",
  email_address: "zain.ahmed199524@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "zainahmed241995"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
