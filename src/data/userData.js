// src/data/userData.js
export const userData = {
  name: "Gaurav Pandey",
  title: "Full Stack Developer (React + Node.js)",
  tagline:
    "Full stack developer with a frontend-first mindset — building animated, API-driven web apps using React, Node.js, and modern tooling.",
  location: "Lucknow, India",
  email: "gauravp9118@gmail.com",
  phone: "+91 9118357637",
  website: "https://gauravpandey.vercel.app",
  resumeUrl:
    "https://drive.google.com/file/d/1_2I_QX-HLCZ-5LmNb4M_1EvbBxLr6KU3/view?usp=sharing",
  avatar: "/assets/profile.jpeg",
  availableForHire: true,
  availabilityText: "Actively seeking full stack roles & internships",

  bio: `
Full stack developer with a strong focus on frontend. I design and build interactive, production-ready interfaces using React, Tailwind, and Framer Motion — and wire them to real APIs using Node.js, Express, and MongoDB. 
I've worked on company websites, a clinic platform, an investment product, and an AI caption generator. Right now I'm doubling down on backend depth: Node.js, Express, and scalable patterns.
  `.trim(),

  experience: [
    {
      company: "Meta Future Services",
      role: "Frontend Developer Intern",
      period: "15 Mar 2025 – 15 Sep 2025",
      location: "Lucknow (On-site)",
      achievements: [
        "Delivered 3+ client-facing projects: company site, clinic system, and investment platform.",
        "Implemented responsive UI, animations (GSAP/Framer Motion), and reusable component patterns.",
        "Integrated frontend with APIs, basic auth flows, and handled deployments on Hostinger and Vercel.",
      ],
    },
  ],

  training: [
    {
      name: "Full-Stack MERN Course",
      institute: "Sheryians Coding School (Online)",
      period: "Jan 2025 – Oct 2025",
      skills: ["React", "Node.js", "Express", "MongoDB", "Full-Stack Apps"],
    },
    {
      name: "DSA with Java",
      institute: "Online Program",
      period: "May 2024 – July 2024",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      school: "Techno Institute of Higher Studies, Lucknow",
      period: "2023 – 2026 (Expected)",
      gpa: "8.6 / 10.0",
    },
  ],

  certifications: [
    "Full-Stack MERN Course — Sheryians Coding School",
    "DSA with Java Certification",
  ],

  achievements: [
    "Solved 100+ DSA problems on LeetCode.",
    "Ranked in Top 5,000 / 25,000+ in HackWithIndia Hackathon.",
  ],

  social: {
    github: "https://github.com/GauraVPandeyyy",
    linkedin: "https://www.linkedin.com/in/gaurav-pandey-0987162a0/",
    twitter: "https://x.com/gaurav_pandeyyy",
    website: "https://gauravpandey.vercel.app",
  },

  stats: {
    experience: "1+ yrs",
    projects: "5+ projects",
    clients: "3+ clients",
  },
};

// Clean, compact skills for UI (no percentages/years in UI)
export const skills = {
  coreStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript (ES6+)", "Tailwind CSS"],
  frontend: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GSAP"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Cloudflare", "Hostinger", "Netlify"],
};

export const projects = [
    {
    id: 1,
    title: "Teerthankar Jewels — E-Commerce",
    description:
      "Jewellery e-commerce frontend with product listings, filters, cart logic, and smooth transitions.",
    image: "/assets/teerthankar.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "REST APIs"],
    liveUrl: "https://teerthankar.vercel.app",
    githubUrl: "https://github.com/GauraVPandeyyy/Teerthankar",
    featured: true,
    category: "E-Commerce",
    metrics: {
      catalog: "Dynamic products & categories",
      experience: "Smooth micro-interactions",
    },
    impact:
      "Demonstrates real-world e-commerce UX with animations.",
  },
  {
    id: 2,
    title: "CapGen — AI Caption Generator",
    description:
      "Full-stack app for AI-powered image captioning using Gemini API, with auth, uploads, and a complete pipeline.",
    image: "/assets/capgen.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Clerk",
      "ImageKit",
      "Tailwind",
    ],
    liveUrl: "https://gaurav-caption-ai.vercel.app",
    githubUrl: "https://github.com/GauraVPandeyyy/CaptionAI",
    featured: true,
    category: "Full-Stack",
    metrics: {
      pipeline: "End-to-end flow",
      media: "Image uploads & storage",
    },
    impact:
      "Shows end-to-end thinking across frontend, backend, and third-party APIs.",
  },
   {
    id: 3,
    title: "NeuroDentica — Clinic Website",
    description:
      "Multi-page dental clinic website with patient forms, admin panel (PHP/MySQL), and responsive healthcare UI.",
    image: "/assets/neurodentica.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    liveUrl: "https://neurodentica.com/",
    githubUrl: "https://github.com/GauraVPandeyyy/NeuroDentica",
    featured: true,
    category: "Client Project",
    metrics: {
      users: "Doctors & Patients",
      performance: "Very fast",
      design: "Healthcare-focused",
    },
    impact:
      "Improved clinic’s online presence and simplified patient communication.",
  }
  ,
  {
    id: 4,
    title: "Meta Future Services Website",
    description:
      "Official marketing website for Meta Future Services with GSAP and scroll-based animations. Fully responsive and performance-optimized for production use.",
    image: "/assets/mfs.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "AOS"],
    liveUrl: "https://gauravpandeyyy.github.io/MFS/",
    githubUrl: "https://github.com/GauraVPandeyyy/MFS",
    featured: true,
    category: "Company Website",
    metrics: {
      users: "Corporate",
      performance: "Fast loading",
      animations: "GSAP & AOS",
    },
    impact: "Production marketing site actively used by the company.",
  },
 
  {
    id: 5,
    title: "FutureTrade — Investment Platform",
    description:
      "Frontend for an investment platform with JWT auth, buy flow, monthly interest UI, and transaction feeds.",
    image: "/assets/futuretrade.png",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Axios",
      "Context API",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://future-trade-eight.vercel.app",
    githubUrl: "https://github.com/GauraVPandeyyy/Future-Trade",
    featured: true,
    category: "Product Frontend",
    metrics: {
      ux: "Lazy-loading & optimistic updates",
      security: "JWT auth",
      api: "Error-handled API calls",
    },
    impact:
      "Shows ability to work with auth, protected flows, and real APIs.",
  },

];

export const testimonials = [
  {
    name: "Meta Future Services",
    role: "Internship Supervisor",
    company: "Meta Future Services",
    content:
      "Gaurav built our company website from scratch with great attention to detail. His implementation of animations and responsive design exceeded our expectations.",
    avatar: "👨‍💼",
    rating: 4,
  },
  {
    name: "Dr. Syamantak Srivastava",
    role: "Founder & Chief Dentist",
    company: "NeuroDentica",
    content:
      "Gaurav designed and developed the NeuroDentica website with a modern, professional look and smooth user experience. The website has significantly improved our clinic’s online presence.",
    avatar: "🦷",
    rating: 4.5,
  },
];
