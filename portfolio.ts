import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Krishna rathod",
  title: "Hi all, I'm krishna",
  description:
    "I'm a skilled Frontend Developer with nearly 1 years of experience creating dynamic web applications using React, Redux, TypeScript, UI frameworks, and RESTful APIs. I excel in enhancing user interfaces and optimizing performance. Ready to bring your web applications to the next level!.",
  resumeLink: "https://drive.google.com/file/d/1WpTc3sn81kfLUiYxkC-eO2obzUDwKq4e/view ",
};

export const openSource = {
  githubUserName: "KrishnazRathod",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:krishna.tauqeer123@gmail.com",
  linkedin: "https://www.linkedin.com/in/krishna-rathod-b8857531b/",
  github: "https://github.com/KrishnazRathod",
  instagram: "https://www.instagram.com/its._hritik/",
  // facebook: 'https://www.facebook.com/1krishna100',
  // twitter: 'https://twitter.com/1krishna100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY Front End DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "front-end developer",
      lottieAnimationFile: "/lottie/skills/coding.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        // emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Shri Vaishnav Vidyapeeth Vishwavidyalaya",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "Jun 2019 - Jul 2023",
    desc: "",
  },
];

export const experience: ExperienceType[] = [
  // {
  //   role: "Django Developer",
  //   company: "Meganos Software",
  //   companyLogo: "/img/icons/common/meganos.png",
  //   date: "Aug 2022 - Present",
  //   desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  // },
  // {
  //   role: "Full Stack Developer",
  //   company: "Duseca Software",
  //   companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
  //   date: "Jan 2022 - Sept 2023",
  //   desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  {
    role: "Front-end Developer",
    company: "SiyaTech",
    companyLogo: "/img/icons/common/Screenshot 2024-07-27 013924.png",
    date: "Jul 2023 - July 2024",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

export const projects: ProjectType[] = [
  {
    name: "todo -web-app",
    desc: "This project is a Todo application built using React, designed to help users manage their tasks efficiently. The app is integrated with a mock API to simulate backend operations, such as fetching, creating, updating, and deleting tasks. This allows for a comprehensive demonstration of CRUD (Create, Read, Update, Delete) operations in a React application.",
    github: "https://todo-web-app-omega.vercel.app/",
    link: "https://github.com/KrishnazRathod",
  },
  // {
  //   name: "Giebo",
  //   desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
  //   link: "https://gibeo.io/",
  // },
  // {
  //   name: "O Mejor Oferta",
  //   desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
  //   link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  // },
  // {
  //   name: "Hooligan Culture",
  //   desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
  //   link: "https://hooliganculture.com/",
  // },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like krishna is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "krishna has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. krishna is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend krishna for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Krishna rathod",
  description: greetings.description,
  author: "Krishna rathod",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1krishna100.vercel.app",
  keywords: [
    "krishna",
    "Krishna rathod",
    "@1krishna100",
    "1krishna100",
    "Portfolio",
    "krishna Portfolio ",
    "Krishna rathod Portfolio",
  ],
};
