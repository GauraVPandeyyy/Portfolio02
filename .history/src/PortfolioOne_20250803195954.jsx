import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Menu,
  X,
  Award,
  Calendar,
  Briefcase,
  GraduationCap,
  Rocket,
  Sparkles,
  Code2,
  LayoutTemplate,
  MousePointerClick,
  Users,           // Add this
  TrendingUp,      // Add this
  BookOpen,        // Add this
  Target          // Add this if missing
} from "lucide-react";

export default function EnhancedPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSection, setCurrentSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef(null);

  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button, .interactive")) {
        setCursorVariant("hover");
      } else if (e.target.closest(".text-interactive")) {
        setCursorVariant("text");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .interactive, .text-interactive").forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .interactive, .text-interactive").forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Enhanced User Data
  const userData = {
    name: "Gaurav Pandey",
    title: "Frontend Developer",
    tagline: "Crafting immersive digital experiences with modern web technologies",
    location: "Lucknow, UP",
    email: "gauravp9118@gmail.com",
    phone: "+91 9118357637",
    website: "https://gauravpandey.dev",
    resumeUrl: "https://drive.google.com/file/d/1tG9UrIIn5WoXASbIYygaGrJx7fg_pyGD/view?usp=sharing",
    avatar: "src/assets/profile.png",
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

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Skill categories
  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Code2 },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "Tools", icon: LayoutTemplate },
  ];

  // Cursor variants
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 10,
      y: cursorPosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "rgba(249, 115, 22, 0.3)",
      mixBlendMode: "normal",
      transition: { type: "spring", mass: 0.1 }
    },
    hover: {
      x: cursorPosition.x - 15,
      y: cursorPosition.y - 15,
      width: 30,
      height: 30,
      backgroundColor: "rgba(249, 115, 22, 0.5)",
      mixBlendMode: "normal",
    },
    text: {
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: "rgba(249, 115, 22, 0.2)",
      mixBlendMode: "normal",
    }
  };

  // Form submission handler with email integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mgejvzqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  // Section observer for navigation
  useEffect(() => {
    setIsLoaded(true);

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Animated background particles
  const Particles = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 5 + 2;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        opacity: Math.random() * 0.5 + 0.1,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10
      };
    });

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-orange-400"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <Particles />
      
      {/* Floating Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/12 to-purple-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={cursorVariant}
      />

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
            >
              GP
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    currentSection === id
                      ? "text-orange-400"
                      : "text-neutral-300 hover:text-orange-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {label}
                  {currentSection === id && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"
                      layoutId="navIndicator"
                      transition={{ type: "spring", bounce: 0.25 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-orange-400"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-neutral-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 text-base text-neutral-300 hover:text-orange-400"
                >
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center py-20 pt-32">
          <motion.div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Avatar with Status */}
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-full h-full object-cover rounded-full bg-neutral-800"
                />
              </div>

              {/* Enhanced Availability Badge */}
              {userData.availableForHire && (
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>{userData.availabilityText}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Enhanced Name & Title */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {userData.name}
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {userData.title}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {userData.tagline}
            </motion.p>

            {/* Enhanced Stats with Business Impact */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-black text-orange-400 mb-2">{userData.stats.experience}</div>
                <div className="text-neutral-400 text-sm font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-black text-blue-400 mb-2">{userData.stats.projects}</div>
                <div className="text-neutral-400 text-sm font-medium">Projects Delivered</div>
              </motion.div>
              <motion.div 
                className="text-center group hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-black text-green-400 mb-2">{userData.stats.clients}</div>
                <div className="text-neutral-400 text-sm font-medium">Clients</div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={`mailto:${userData.email}`}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Let's Collaborate</span>
              </motion.a>

              <motion.a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Professional Info Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                {
                  icon: <Target className="w-6 h-6 text-orange-400" />,
                  title: "Availability",
                  text1: "Currently interning",
                  text2: "Open to new opportunities"
                },
                {
                  icon: <MapPin className="w-6 h-6 text-blue-400" />,
                  title: "Location",
                  text1: userData.location,
                  text2: "Open to Remote/Hybrid"
                },
                {
                  icon: <Award className="w-6 h-6 text-green-400" />,
                  title: "Specialization",
                  text1: "Frontend Development",
                  text2: "Responsive Web Design"
                }
              ].map((card, index) => (
                <motion.div 
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {card.icon}
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-neutral-300 text-sm mb-2">{card.text1}</p>
                  <p className="text-neutral-300 text-sm">{card.text2}</p>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Me
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Aspiring frontend developer with training in web technologies and DSA
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-neutral-300 leading-relaxed">{userData.bio}</p>

              {/* Enhanced Interest Tags */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Rocket className="w-5 h-5 text-orange-400" />, text: "Quick Learner" },
                  { icon: <Users className="w-5 h-5 text-blue-400" />, text: "Team Player" },
                  { icon: <TrendingUp className="w-5 h-5 text-green-400" />, text: "Continuous Learner" }
                ].map((tag, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 px-4 py-2 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag.icon}
                    <span className="text-neutral-200 font-medium">{tag.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Training */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                  <span>Training</span>
                </h3>
                <div className="space-y-4">
                  {userData.training.map((training, index) => (
                    <motion.div 
                      key={index}
                      className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="text-lg font-medium text-white">{training.name}</h4>
                      <p className="text-neutral-400 text-sm mb-2">{training.institute} • {training.period}</p>
                      <div className="flex flex-wrap gap-2">
                        {training.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-orange-400" />
                  <span>Certifications</span>
                </h3>
                <div className="space-y-2">
                  {userData.certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-neutral-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 pt-6">
                {[
                  { icon: <Github className="w-7 h-7" />, href: userData.social.github, color: "orange" },
                  { icon: <Linkedin className="w-7 h-7" />, href: userData.social.linkedin, color: "blue" },
                  { icon: <Twitter className="w-7 h-7" />, href: userData.social.twitter, color: "sky" },
                  { icon: <Globe className="w-7 h-7" />, href: userData.social.website, color: "green" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center text-neutral-400 transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Code Display */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 10,
                    delay: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-400 ml-6 font-mono text-sm">developer.js</span>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="text-purple-400">
                    const <span className="text-blue-400">developer</span> = {"{"}
                  </div>
                  <div className="text-neutral-400 ml-6">
                    name: <span className="text-green-400">'{userData.name}'</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    role: <span className="text-green-400">'{userData.title}'</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    training: <span className="text-orange-400">'Web Development & DSA'</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'JavaScript'</span>, <span className="text-green-400">'HTML/CSS'</span>],
                  </div>
                  <div className="text-neutral-400 ml-6">
                    focus: <span className="text-green-400">'Frontend Development'</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    available: <span className="text-orange-400">{userData.availableForHire.toString()}</span>
                  </div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Journey
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My work experience and training in web development
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {userData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-lg text-orange-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-neutral-400 font-medium">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-neutral-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline line */}
                {index < userData.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <motion.h3 
              className="text-3xl font-bold text-center text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h3>
            <div className="max-w-2xl mx-auto">
              {userData.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                      <div className="flex items-center justify-between text-sm text-neutral-400">
                        <span>{edu.period}</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technologies and tools I use to build modern web applications
            </motion.p>
          </div>

          {/* Skill Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSkillCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl"
                    : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-lg">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills[activeSkillCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <div className="text-neutral-400 text-sm">
                        {skill.years} years • {skill.projects} projects
                      </div>
                    </div>
                  </div>
                  <span className="text-orange-400 font-bold text-xl">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-neutral-800 rounded-full h-3 mb-4">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-orange-500/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                
                <div className="text-neutral-400 text-sm">
                  {skill.level > 70 ? "Strong knowledge" : skill.level > 50 ? "Working knowledge" : "Basic knowledge"}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Projects I've built to showcase my skills and learning
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden h-72">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Category Badge */}
                  <motion.div 
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  {/* Business Impact Badge */}
                  <motion.div 
                    className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="bg-black/80 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-2">
                      <p className="text-orange-400 font-semibold text-sm">{project.impact}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-xl border border-neutral-800">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-orange-400 font-bold text-lg">{value}</div>
                        <div className="text-neutral-400 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <motion.a
              href={userData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-10 py-5 rounded-2xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">View All Projects on GitHub</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Client{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Feedback
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What people say about my work
            </motion.p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div 
              className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Floating quote marks */}
              <div className="absolute top-4 left-8 text-8xl text-orange-500/10 font-serif">"</div>
              <div className="absolute bottom-4 right-8 text-8xl text-orange-500/10 font-serif">"</div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic relative z-10">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl">{testimonials[activeTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="text-xl font-semibold text-white">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-orange-400 font-medium">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-neutral-400 text-sm">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-neutral-900/50 border rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                  index === activeTestimonial 
                    ? "border-orange-500/50 shadow-lg shadow-orange-500/20" 
                    : "border-neutral-800 hover:border-orange-500/50"
                }`}
                onClick={() => setActiveTestimonial(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-neutral-300 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-neutral-400 text-sm">{testimonial.role}</div>
                    <div className="text-orange-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? "bg-orange-500" 
                    : "bg-neutral-600 hover:bg-neutral-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Build{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Interested in working together or have questions? Feel free to reach out!
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-8 relative overflow-hidden">
                  {/* Floating elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-xl"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Get In Touch</h3>
                  
                  <div className="space-y-6 relative z-10">
                    {[
                      { icon: <Mail className="w-6 h-6 text-white" />, bg: "from-orange-500 to-red-500", label: "Email", value: userData.email },
                      { icon: <Phone className="w-6 h-6 text-white" />, bg: "from-blue-500 to-purple-500", label: "Phone", value: userData.phone },
                      { icon: <MapPin className="w-6 h-6 text-white" />, bg: "from-green-500 to-emerald-500", label: "Location", value: userData.location }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.bg} rounded-xl flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-neutral-400 text-sm">{item.label}</div>
                          <div className="text-white font-semibold">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <motion.div 
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6"
                  whileHover={{ y: -3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    <span>Why Work With Me?</span>
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Quick learner and adaptable",
                      "Strong problem-solving skills",
                      "Passionate about clean code",
                      "Attention to detail"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-neutral-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Floating elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, and requirements..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-neutral-600 disabled:to-neutral-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p 
              className="text-neutral-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2025 {userData.name}. Crafted with ❤️ and lots of ☕
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { icon: <Github className="w-5 h-5" />, href: userData.social.github, color: "orange" },
                { icon: <Linkedin className="w-5 h-5" />, href: userData.social.linkedin, color: "blue" },
                { icon: <Twitter className="w-5 h-5" />, href: userData.social.twitter, color: "sky" },
                { icon: <Globe className="w-5 h-5" />, href: userData.social.website, color: "green" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-400 hover:text-${social.color}-400 transition-colors`}
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}