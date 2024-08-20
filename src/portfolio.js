/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ajaykumar K V ",
  title: "Hello all, I am  Ajay",
  subTitle: emoji(
    "Hello! I'm Ajaykumar K V 👋, a passionate AI enthusiast and cloud engineer dedicated to transforming GenAI concepts into scalable, real-world applications. As a Certified Azure AI Associate and Google Cloud Digital Leader, I excel in utilizing cutting-edge frameworks such as Langchain, Huggingface, Llamaindex, and OpenAI API to develop innovative AI solutions. My mission is to unlock the vast potential of Large Language Models (LLMs) and apply that knowledge to solve complex challenges in the technology landscape 🚀."
  ),
  resumeLink:
    "https", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ajaykumarkv17",
  linkedin: "https://www.linkedin.com/in/ajaykumar-k-v-b80187247/",
  gmail: "ajaykumarkv0317@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Expertise ",
  subTitle: "PASSIONATE CLOUD ENGINEER EXPLORING THE FRONTIERS OF GENAI AND LLMs",
  skills: [
    emoji("🤖 Build and deploy intelligent applications leveraging Generative AI (GenAI) and Large Language Models (LLMs)"),
    emoji("🧠 Create AI-driven solutions, including Agentic RAG and AI agents, for automating complex tasks and workflows"),
    emoji("☁️ Design and build scalable and resilient cloud solutions on platforms like AWS, Azure, and Google Cloud"),
    emoji("⚙️ Implement infrastructure as code (IaC) using tools such as Terraform, CloudFormation, and Ansible"),
    emoji("🔗 Integrate third-party services and APIs to enhance functionality and interoperability of cloud-based applications"),
    emoji("📈 Monitor and optimize cloud resources to ensure high availability, performance, and cost-efficiency"),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
       skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velammal College of Engineering and Technology",
      logo: require("./assets/images/Vcet_logo.jpg"), // Make sure to add the appropriate logo image in the assets folder
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "November 2020 - July 2024",
      desc: "Gained a solid foundation in computer science principles and practical experience through hackathons and project-based learning.",
      descBullets: [
        "Participated in and won multiple hackathons, enhancing skills in teamwork and innovative problem-solving",
        "Volunteered at the college symposium, organizing technical events and facilitating workshops"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Architect", // Insert stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "AI Engineer",
      progressPercentage: "85%"
    },
    {
      Stack: "Full-Stack Developer",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning/NLP",
      progressPercentage: "75%"

    },
    
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "GenAI Intern",
      company: "Garrett Motion",
      companylogo: require("./assets/images/gar.webp"), // Make sure to add the appropriate logo image in the assets folder
      date: "January 2024 – July 2024",
      desc: "As a GenAI Intern at Garrett Motion, I developed a Feedback Analysis Assistant that surpasses traditional sentiment analysis by providing actionable recommendations for addressing negative feedback. I also worked on preprocessing unstructured data to improve Retrieval-Augmented Generation (RAG) applications and designed a customizable email rephrasing plugin to enhance the professionalism and clarity of email communications.",
      descBullets: [
        "Developed a Feedback Analysis Assistant for actionable recommendations",
        "Preprocessed unstructured data for enhanced RAG applications",
        "Designed a customizable email rephrasing plugin"
      ]
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
  title: "Projects",
  subtitle: "PROFESSIONAL AND ACADEMIC PROJECTS UNDERTAKEN DURING MY INTERNSHIP AND COLLEGE",
  projects: [
    {
       // Make sure to add the appropriate logo image in the assets folder
      projectName: "Phishing Detection",
      projectDesc: "Developed an advanced phishing detection system utilizing BERT Finetuned models, enhancing cybersecurity measures by accurately identifying and flagging potential phishing attempts with 95% precision, leading to a 40% reduction in successful phishing attacks for client organizations.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ajaykumarkv17/PhisingFights" // Replace with the actual GitHub URL
        }
      ]
    },
    {
       // Make sure to add the appropriate logo image in the assets folder
      projectName: "Agrobot",
      projectDesc: "Implemented a cutting-edge chatbot platform tailored specifically for farmers, streamlining information retrieval and delivering real-time insights, resulting in a 50% increase in efficiency for users.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ajaykumarkv17/Agrobot" // Replace with the actual GitHub URL
        }
      ]
    },
    {
       // Make sure to add the appropriate logo image in the assets folder
      projectName: "Freshebot",
      projectDesc: "Developed a ChatBot accompanied by a voice-driven assistant, strategically catering to addressing interview-related uncertainties and delivering personalized suggestions. Leveraged skills in JavaScript and the Flask Framework to create this innovative solution, highlighting the ability to craft functional and user-friendly applications.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Ajaykumarkv17/interviewbot" // Replace with the actual GitHub URL
        }
      ]
    },
    {
      // Make sure to add the appropriate logo image in the assets folder
     projectName: "Instagram Post Summarization",
     projectDesc: "Developed an innovative system that extracts Instagram post comments using post-IDs and leverages Large Language Models (LLMs) to generate concise summaries of user perspectives. This project enables quick analysis of user sentiment and feedback, providing valuable insights for social media analysis and user engagement assessment.",
    
   },
   {
      // Make sure to add the appropriate logo image in the assets folder
     projectName: "Employee-Directory Application",
     projectDesc: "Designed and developed a cloud-based CRUD web application aimed at efficiently overseeing employee management within an organizational framework. This project leveraged the comprehensive capabilities of AWS to build and deploy the application seamlessly.",
    
   },
   {
      // Make sure to add the appropriate logo image in the assets folder
     projectName: "Email Rephrasing Assistant Plugin",
     projectDesc: "Collaborated on a team project, focusing on backend development for a productivity-enhancing email rephrasing plugin. Implemented LLM integration to automatically rephrase and improve email content, streamlining communication processes.",
    
   }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "A showcase of my certifications, achievements, and recognition.",

  achievementsCards: [
    {
      title: "Azure AI Engineer Associate",
      subtitle: "Certified as an Azure AI Engineer Associate, demonstrating expertise in using Azure AI services to build, manage, and deploy AI solutions at scale. This certification validates my ability to integrate AI into cloud-based applications effectively.",
      // Add the appropriate logo image in the assets folder
      
      footerLink: [
        { name: "Certification", url: "https://learn.microsoft.com/api/credentials/share/en-gb/AJAYKUMARKV-8019/11A8DAC84AB2BF07?sharingId=36C394EFF4428235" } // Replace with the actual certification URL
      ]
    },
    {
      title: "Google Cloud Digital Leader",
      subtitle: "Certified as a Google Cloud Digital Leader, showcasing my understanding of cloud technologies, digital transformation, and how to leverage Google Cloud solutions to drive business objectives. This certification highlights my strategic approach to cloud adoption.",
      
      footerLink: [
        { name: "Certification", url: "https://www.credly.com/badges/02ed327b-97c4-4059-a983-d9e953014bc2/public_url" } // Replace with the actual certification URL
      ]
    },
    {
      title: "AWS Cloud Quest: Generative AI",
      subtitle: "Completed the AWS Cloud Quest: Generative AI certification, focusing on the design and implementation of AI-driven applications using AWS services. This certification emphasizes my skills in building AI models that enhance decision-making and user engagement.",
    
      footerLink: [
        { name: "Certification", url: "https://www.credly.com/badges/d02aa982-7033-4042-a562-cf12584063b2/public_url" } // Replace with the actual certification URL
      ]
    },
    {
      title: "Internship Completion Letter",
      subtitle: "Successfully completed a 6-month internship at Garrett Motion, where I developed advanced GenAI applications, contributing to projects like Feedback Analysis Assistant and customizable email rephrasing plugin. This experience reinforced my expertise in GenAI and cloud technologies.",
    
      footerLink: [
        { name: "Completion Letter", url: "https://drive.google.com/file/d/1tnB3ig5qsTdC42DLK2VRXX9nurRuBL_r/view?usp=sharing" } // Replace with the actual letter URL
      ]
    },
    {
      title: "Google Cloud Arcade Challenge Winner",
      subtitle: "Achieved a milestone by winning Google Cloud Hoodies and Bag through the completion of the Arcade Challenge, a competitive event hosted by Google Cloud and Qwiklabs. This achievement reflects my dedication to continuous learning and cloud technology in google cloud.",
    
      footerLink: [
        { name: "Details", url: "https://drive.google.com/file/d/1w7Y2agPQC31hhw8hmLt0vM1DdHgfDavO/view?usp=sharing" } // Replace with the actual achievement URL
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a passion for crafting innovative cloud solutions, I love sharing my insights and knowledge on AWS architectures and their practical applications.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/aws-architecture-adventures-episode-2-designing-highly-kumar-k-v-01s0c/?trackingId=YfPrcXC4RwOs6dVpKQgjBg%3D%3D",
      title:
        "AWS Architecture Adventures: Designing a Highly Available Web Application Solution with AWS",
      description:
        "In this episode, we're focusing on a high availability and scalability approach. This architecture showcases a highly available web application solution that leverages various AWS services, including Amazon CloudFront, Elastic Load Balancing (ELB), Elastic Compute Cloud (EC2), Auto Scaling, Relational Database Service (RDS), and Simple Storage Service (S3)."
    },
    {
      url: "https://www.linkedin.com/pulse/aws-architecture-adventures-enhancing-customer-ajay-kumar-k-v-zct9c/?trackingId=YfPrcXC4RwOs6dVpKQgjBg%3D%3D",
      title:
        "AWS Architecture Adventures: Enhancing Customer Experience: AWS Bedrock-Powered Restaurant Booking Solution",
      description:
        "Today, we're shifting gears to focus on how emerging technologies like Amazon Bedrock can transform specific business processes - in this case, restaurant reservations. This solution demonstrates how AI and cloud services can be combined to create intelligent, automated systems that enhance customer experience and streamline operations."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
