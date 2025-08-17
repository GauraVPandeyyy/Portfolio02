export const userData = {
  name: "Gaurav Pandey",
  title: "Frontend Developer",
  tagline: "Crafting immersive digital experiences with modern web technologies",
  location: "Lucknow, UP",
  email: "gauravp9118@gmail.com",
  phone: "+91 9118357637",
  website: "https://gauravpandey.dev",
  resumeUrl: "https://drive.google.com/file/d/1tG9UrIIn5WoXASbIYygaGrJx7fg_pyGD/view?usp=sharing",
  avatar: "/assets/profile.png",
  availableForHire: true,
  availabilityText: "Open to Frontend roles",
  bio: "Frontend developer specializing in React and modern JavaScript. Currently interning at Meta Future Services where I built their company website. Passionate about creating responsive, performant web applications with clean code and great user experiences.",
  experience: [
    {
      company: "Meta Future Services",
      role: "Frontend Developer Intern",
      period: "June 2025 - Present",
      location: "On Site",
      achievements: [
        "Developed company website using HTML, CSS, JavaScript, GSAP, and AOS animations",
        "Implemented responsive design ensuring compatibility across all devices",
        "Optimized website performance and loading times"
      ]
    }
  ],
  training: [
    {
      name: "Web Development Training",
      institute: "Sheryians Coding School",
      period: "Jan 2025 - June 2025",
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      name: "DSA with Java",
      institute: "Online Program",
      period: "May 2024 - July 2024",
      skills: ["Data Structures", "Algorithms", "Problem Solving"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Application",
      school: "University of Lucknow",
      period: "2023 - 2026",
      gpa: "8.5/10.0"
    }
  ],
  certifications: [
    "Web Development Certification",
    "DSA with Java Certification"
  ],
  social: {
    github: "https://github.com/GauraVPandeyyy",
    linkedin: "https://www.linkedin.com/in/gaurav-pandey-0987162a0/",
    twitter: "https://x.com/gaura_vp9118",
    website: "https://gauravpandey.dev",
  },
  stats: {
    experience: "0.6+",
    projects: "5+",
    clients: "3+",
  },
};

// Projects data
export const projects = [
  {
    id: 1,
    title: "Meta Future Services Website",
    description: "Developed the official website for Meta Future Services using modern web technologies including GSAP for animations and AOS for scroll animations. Implemented responsive design and optimized performance.",
    image: "/assets/mfs.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "AOS"],
    liveUrl: "https://metafutureservices.in/",
    githubUrl: "https://github.com/GauraVPandeyyy/MFS",
    featured: true,
    category: "Company Website",
    metrics: {
      users: "Company",
      performance: "Fast loading",
      animations: "GSAP & AOS"
    },
    impact: "Official company website now live and in use"
  },
  {
    id: 2,
    title: "NeuroDentica Website",
    description: "Developed the frontend for NeuroDentica, a professional website for a dental clinic. Implemented a clean and modern UI with responsive layouts, interactive components, and optimized performance to deliver a seamless user experience.",
    image: "/assets/neurodentica.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    liveUrl: "https://neurodentica.com/",
    githubUrl: "https://github.com/GauraVPandeyyy/NeuroDentica", // if repo is private, keep it "#"
    featured: true,
    category: "Client Project",
    metrics: {
      technologies: "HTML, CSS, JS, PHP, MySQL",
      components: "Reusable + Responsive",
      design: "Professional Healthcare UI"
    },
    impact: "Delivered a fully functional and professional website for a live dental clinic, enhancing their online presence and credibility."
  }

];

// Skills data
export const skills = {
  frontend: [
    { name: "React", level: 70, icon: "⚛️", years: 0.5, projects: 3 },
    { name: "Redux Toolkit", level: 60, icon: "🗂️", years: 0.3, projects: 1 },
    { name: "JavaScript (ES6+)", level: 78, icon: "📜", years: 1, projects: 5 },
    { name: "HTML5", level: 88, icon: "🌐", years: 1.5, projects: 6 },
    { name: "CSS3", level: 82, icon: "🎨", years: 1.5, projects: 6 },
    { name: "Tailwind CSS", level: 72, icon: "🌊", years: 0.5, projects: 3 },
    { name: "Bootstrap", level: 76, icon: "🅱️", years: 1, projects: 3 },
    { name: "SCSS", level: 65, icon: "💅", years: 0.5, projects: 1 },
    { name: "Framer Motion", level: 60, icon: "🎥", years: 0.3, projects: 1 },
  ],

  backend: [
    { name: "Node.js (Basics)", level: 50, icon: "🟢", years: 0.3, projects: 1 },
    { name: "PHP", level: 60, icon: "🐘", years: 0.5, projects: 2 },
  ],

  database: [
    { name: "MySQL", level: 65, icon: "🗄️", years: 0.5, projects: 2 },
  ],

  tools: [
    { name: "Git", level: 72, icon: "🔗", years: 1, projects: 5 },
    { name: "GitHub", level: 75, icon: "🐙", years: 1, projects: 5 },
    { name: "VS Code", level: 88, icon: "💻", years: 1.5, projects: 6 },
    { name: "Postman", level: 70, icon: "📮", years: 0.5, projects: 2 },
    { name: "Vercel / Netlify", level: 75, icon: "🚀", years: 0.5, projects: 3 },
    { name: "Hostinger", level: 70, icon: "🌍", years: 0.5, projects: 2 },
    { name: "GSAP", level: 65, icon: "🎬", years: 0.3, projects: 1 },
  ],
};


// Testimonials data
export const testimonials = [
  {
    name: "Meta Future Services",
    role: "Internship Supervisor",
    company: "Meta Future Services",
    content: "Gaurav built our company website from scratch with great attention to detail. His implementation of animations and responsive design exceeded our expectations.",
    avatar: "👨‍💼",
    rating: 4,
  },
  {
    name: "Dr. Syamantak Srivastava",
    role: "Founder & Chief Dentist",
    company: "NeuroDentica",
    content: "Working with Gaurav was an excellent experience. He designed and developed the NeuroDentica website with a modern, professional look and smooth user experience. The website has significantly improved our clinic’s online presence and made it easier for patients to connect with us.",
    avatar: "🦷",
    rating: 5,
  }

];