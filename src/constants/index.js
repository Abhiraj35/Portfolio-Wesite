import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a frontend developer based in Kolkata, India, specializing in building scalable and efficient web applications. I work with React, Next.js, Tailwind CSS, JavaScript, and HTML/CSS to create seamless user experiences. I have a strong focus on animations and microinteractions to enhance user engagement and interactivity.`;

export const ABOUT_TEXT = `I am a 2nd year B-Tech student with a strong interest in front-end development, embedded systems, and IoT. I have experience working with HTML, CSS, Tailwind CSS, and JavaScript, and I am currently improving my skills in React.js. I enjoy building projects that enhance user experience and solving problems through technology.

Beyond web development, I have a background in problem-solving with data structures and algorithms. I am continuously working on strengthening my logical thinking and coding skills.

I am always open to learning new technologies and collaborating on projects that help me grow as a developer.`;

export const EDUCATION = [
  {
    year: "2023 - 2027",
    degree: "Bachelor of Technology (B.Tech) in Electronics and Communication Engineering",
    institution: "Haldia Institute of Technology",
    description: `Pursuing a comprehensive curriculum covering core subjects in electronics, embedded systems, and programming. Gaining hands-on experience in software development, circuit design, and IoT applications. Actively participating in technical societies and hackathons to enhance practical knowledge.`,
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education (Class 12)",
    institution: "St. Xavier's Public School",
    description: `Specialized in Science with a focus on Physics, Chemistry, and Mathematics. Developed problem-solving and analytical skills through various academic projects and competitive exams. Engaged in extracurricular activities, including coding competitions and science exhibitions.`,
  },
  {
    year: "2019 - 2020",
    degree: "Secondary Education (Class 10)",
    institution: "St. Xavier's Public School",
    description: `Completed foundational education with a strong emphasis on Mathematics and Science. Built a keen interest in technology and logical reasoning through various academic challenges. Secured excellent grades and actively participated in school-level tech events.`,
  },
];


export const PROJECTS = [
  {
    title: "AgriEmpower",
    image: project1,
    description:
      "AgriEmpower is a platform connecting farmers and buyers for direct trade. Built during my first-year inter-college hackathon, it features product listings, a chat system, a chatbot, and user authentication.",
    technologies: [ "React","Tailwind CSS","AI Chatbot"],
    github:"https://github.com/Abhiraj35/AgriEmpower",
    link: "https://agriamigo.netlify.app/"
  },
  {
    title: "two-good-co",
    image: project2,
    description:
      "Two-Good-Co is a clone website I created during my frontend development learning phase. It features advanced animations and microinteractions, providing a hands-on experience in building dynamic user interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "GASP","Locomotive Js"],
    github:"https://github.com/Abhiraj35/two-good-co",
    link: "https://abhiraj35.github.io/two-good-co/"
  },
  {
    title: "Miranda - Paper Animated Website",
    image: project3,
    description:
      "Miranda - Paper Animated Website is a portfolio project I created to showcase my animation skills. It features unique paper-like animations and smooth transitions, and is listed on awarded websites for its creative design and interactive user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "GASP","Locomotive Js" ],
    github:"https://github.com/Abhiraj35/Miranda---paper-animated-website",
    link: "https://abhiraj35.github.io/Miranda---paper-animated-website/"

  },
  
];

export const CONTACT = {
  address: "Kolkata, India",
  // phoneNo: "+91 7634982638",
  email: "royabhi2406@gmail.com",
};
