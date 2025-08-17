  const userData = {
    name: "Gaurav Pandey",
    title: "Frontend Developer",
    tagline: "Crafting immersive digital experiences with modern web technologies",
    location: "Lucknow, UP",
    email: "gauravp9118@gmail.com",
    phone: "+91 9118357637",
    website: "https://gauravpandey.dev",
    resumeUrl: "https://drive.google.com/file/d/1tG9UrIIn5WoXASbIYygaGrJx7fg_pyGD/view?usp=sharing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    availableForHire: true,
    availabilityText: "Open to internships & junior roles",
    bio: "Frontend developer specializing in React and modern JavaScript. Currently interning at Meta Future Services where I built their company website. Passionate about creating responsive, performant web applications with clean code and great user experiences.",
    experience: [
      {
        company: "Meta Future Services",
        role: "Frontend Developer Intern",
        period: "June 2025 - Present",
        location: "Remote",
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
        institute: "Online Program",
        period: "Jan 2025 - March 2025",
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
      experience: "1+",
      projects: "5+",
      clients: "1+",
    },
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Meta Future Services Website",
      description: "Developed the official website for Meta Future Services using modern web technologies including GSAP for animations and AOS for scroll animations. Implemented responsive design and optimized performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
      title: "React Portfolio",
      description: "Built a personal portfolio website using React.js to showcase projects and skills. Implemented modern UI with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Personal Project",
      metrics: {
        technologies: "React",
        components: "Reusable",
        design: "Modern UI"
      },
      impact: "Showcasing skills and projects to potential employers"
    }
  ];

  // Skills data
  const skills = {
    frontend: [
      { name: "React", level: 68, icon: "⚛️", years: 0.5, projects: 2 },
      { name: "JavaScript", level: 75, icon: "🟨", years: 1, projects: 4 },
      { name: "HTML5", level: 85, icon: "📄", years: 1.5, projects: 5 },
      { name: "CSS3", level: 80, icon: "🎨", years: 1.5, projects: 5 },
      { name: "Tailwind CSS", level: 70, icon: "🌀", years: 0.5, projects: 2 },
    ],
    database: [
      { name: "SQL", level: 54, icon: "🐘", years: 0.3, projects: 1 },
    ],
    tools: [
      { name: "Git", level: 70, icon: "📝", years: 1, projects: 4 },
      { name: "VS Code", level: 85, icon: "💻", years: 1.5, projects: 5 },
      { name: "GSAP", level: 65, icon: "🎬", years: 0.3, projects: 1 },
    ],
  };

  // Testimonials data
  const testimonials = [
    {
      name: "Meta Future Services",
      role: "Internship Supervisor",
      company: "Meta Future Services",
      content: "Gaurav built our company website from scratch with great attention to detail. His implementation of animations and responsive design exceeded our expectations.",
      avatar: "👨‍💼",
      rating: 4,
    },
    {
      name: "Training Mentor",
      role: "Web Development Trainer",
      company: "Online Program",
      content: "Gaurav showed excellent progress during the training program, quickly grasping React concepts and building projects with clean, maintainable code.",
      avatar: "👩‍🏫",
      rating: 5,
    }
  ];