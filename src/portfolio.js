/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aishwarya Mattikopp",
  title: "Hi all, I'm Aishwarya",
  subTitle: emoji(
    "A passionate Data Engineer 🚀 with experience in building scalable data pipelines, processing large datasets, and leveraging cloud technologies. Skilled in Python and using tools like Apache Spark, Hadoop, and SQL to derive actionable insights from data."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wL7KWUBIaosaQh2B9SZzaQlADGIHDYJ-/view?usp=drive_link", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aishwaryamattikopp",
  linkedin: "https://www.linkedin.com/in/aishwarya-mattikopp/",
  gmail: "amattikopp309@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ENGINEER PASSIONATE ABOUT BUILDING ROBUST DATA SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop and optimize data pipelines to process large-scale datasets"
    ),
    emoji("⚡ Build scalable ETL processes for data ingestion, transformation, and storage"),
    emoji(
      "⚡ Integration of third-party data services and cloud platforms such as AWS, Azure, and Google Cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Hadoop",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    } 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Greenwich",
      logo: require("./assets/images/greenwichLogo.jpg"),
      subHeader: "Master of Science in Big Data and Business Intelligence",
      duration: "January 2024 - January 2025",
      desc: "Took courses on Data Engineering, Distributed Systems, Big Data Processing, and Cloud Computing... contributed to 2 publications on data analytics and pipeline optimization.",
    },
    {
      schoolName: "KLE Society’s Dr. M SSheshgiri College of Engineering and Technology",
      logo: require("./assets/images/KLE_logo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Data Structures and Algorithms",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
    {
      Stack: "Programming (Python)",
      progressPercentage: "98%"
    },
    {
      Stack: "Data Pipelines (ETL/ELT)",
      progressPercentage: "90%"
    },
    {
      Stack: "Big Data Processing (Spark, Hadoop)",
      progressPercentage: "95%"
    },
    {
      Stack: "Cloud Platforms (AWS, Azure, GCP)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Management (SQL/NoSQL)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Talent Acquisition Specialist",
      company: "Cloudera",
      companylogo: require("./assets/images/cloudera_logo.jpg"),
      date: "April 2022 – November 2023",
      descBullets: [
        "Built and optimized the ATS using data engineering principles for workflow automation and efficiency",
        "Worked on Teching hiring ( Backend, Frontend, Fullstack, Android developers and Data scientist Roles).",
        "Integrated and analyzed data from social platforms and databases, enhancing recruitment pipeline efficiency",
        "Built talent pipeline according to core company values and role requirements."
      ]
    },
    {
      role: "Business Analyst",
      company: "Oracle",
      companylogo: require("./assets/images/oracle_logo.jpg"),
      date: "January 2022 – April 2022",
      descBullets: [
        "Developed over 15 customized reports and dashboards, providing key financial insights that improved decision-making speed by 20%.",
        "Orchestrated Oracle’s Channel workflow and deal processes, streamlining operations and reducing turnaround time by 10%.",
        "Collaborated with stakeholders from 5+ departments, clarifying goals and ensuring alignment on integration projects, resulting in a 25% improvement in project delivery timelines.",
        "Provided technical support to maintain and enhance reporting tools, reducing system downtime by 15% and increasing reporting accuracy by 10%."
      ]
    },
    {
      role: "Process Associate",
      company: "Amazon",
      companylogo: require("./assets/images/amazon_logo.jpg"),
      date: "September 2020 – December 2021",
      descBullets: [
        "Audited and tracked 500+ data entries per week, ensuring 98% data accuracy for the pricing analytics and operations team.",
        "Implemented process improvements that boosted efficiency by 30%, reducing the time required for data scrubbing and auditing tasks by 25%.",
        "Surfaced insights from over 10,000 data points, improving operational decision-making speed by 15% through enhanced analysis.",
        "Created process documentation that led to a 20% reduction in training time for new team members, improving onboarding efficiency."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
          url: "http://saayahealth.com/"
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
          url: "http://nextu.se/"
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
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7748707687",
  email_address: "amattikopp309@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
