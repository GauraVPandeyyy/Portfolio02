import { useState, useEffect, useRef } from "react";
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
  Server,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfessionalPortfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const projectIntervalRef = useRef(null);

  // Enhanced User Data
  const userData = {
    name: "Alex Rodriguez",
    title: "Senior Full-Stack Developer",
    tagline: "Transforming complex problems into elegant solutions",
    location: "San Francisco, CA",
    email: "alex@alexrodriguez.dev",
    phone: "+1 (415) 867-5309",
    website: "https://alexrodriguez.dev",
    resumeUrl: "/alex-rodriguez-resume.pdf",
    avatar: "https://avatars.githubusercontent.com/u/11613311?v=4",
    availableForHire: true,
    availabilityText: "Available for new opportunities",
    bio: "Seasoned full-stack developer with 7+ years of experience architecting and implementing scalable web applications. Specialized in React ecosystems, Node.js backends, and cloud infrastructure. Passionate about creating intuitive user experiences backed by robust technical foundations. Open-source contributor and tech community speaker.",
    social: {
      github: "https://github.com/alexrodriguez",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      twitter: "https://twitter.com/alex_dev",
      website: "https://alexrodriguez.dev",
    },
    stats: {
      experience: "7+",
      projects: "42",
      clients: "36",
      contributions: "18",
    },
  };

  // Enhanced Projects with metrics
  const projects = [
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      description:
        "Built a high-traffic e-commerce solution handling 50k+ daily users with Next.js, TypeScript, and microservices architecture. Implemented real-time inventory, payment processing, and recommendation engine.",
      image: "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
      technologies: ["Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/alexrodriguez",
      featured: true,
      category: "Full Stack",
      metrics: [
        { label: "Performance", value: "+87%", desc: "LCP improvement" },
        { label: "Scale", value: "50k+", desc: "daily users" },
        { label: "Conversion", value: "+24%", desc: "increase" },
      ],
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description:
        "Created a data visualization platform with ML insights using React, D3.js, and Python backend. Features real-time data streaming, predictive analytics, and custom report generation.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      technologies: ["React", "Python", "D3.js", "WebSocket", "MongoDB"],
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/alexrodriguez",
      featured: true,
      category: "Data Visualization",
      metrics: [
        { label: "Data Points", value: "2.5B+", desc: "processed daily" },
        { label: "Latency", value: "<200ms", desc: "query response" },
        { label: "Adoption", value: "78%", desc: "team usage" },
      ],
    },
    {
      id: 3,
      title: "Collaborative Task Management System",
      description:
        "Developed a Jira alternative with real-time collaboration, automated workflows, and CI/CD integration. Features granular permissions, time tracking, and reporting.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: ["Vue.js", "NestJS", "PostgreSQL", "Socket.io", "Docker"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/alexrodriguez",
      featured: true,
      category: "SaaS Product",
      metrics: [
        { label: "Teams", value: "150+", desc: "using product" },
        { label: "Uptime", value: "99.99%", desc: "reliability" },
        { label: "Complexity", value: "85k", desc: "lines of code" },
      ],
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      description:
        "Architected a HIPAA-compliant patient management system with telehealth capabilities. Implemented secure messaging, appointment scheduling, and EHR integration.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      technologies: ["React", "Node.js", "AWS", "HL7/FHIR", "OAuth2"],
      liveUrl: "https://health-portal-demo.com",
      githubUrl: "https://github.com/alexrodriguez",
      featured: true,
      category: "Healthcare Tech",
      metrics: [
        { label: "Security", value: "HIPAA", desc: "compliant" },
        { label: "Patients", value: "500k+", desc: "served" },
        { label: "Efficiency", value: "+40%", desc: "admin time saved" },
      ],
    },
  ];

  // Enhanced Skills with icons
  const skills = {
    frontend: [
      { name: "React", level: 98, icon: "⚛️" },
      { name: "Next.js", level: 95, icon: "▲" },
      { name: "TypeScript", level: 94, icon: "📘" },
      { name: "GraphQL", level: 90, icon: "🔷" },
      { name: "Redux", level: 92, icon: "🔄" },
      { name: "Tailwind CSS", level: 96, icon: "🎨" },
    ],
    backend: [
      { name: "Node.js", level: 97, icon: "🟢" },
      { name: "Express", level: 95, icon: "🚀" },
      { name: "Python", level: 88, icon: "🐍" },
      { name: "REST APIs", level: 96, icon: "🌐" },
      { name: "Microservices", level: 92, icon: "🧩" },
      { name: "Serverless", level: 89, icon: "☁️" },
    ],
    infrastructure: [
      { name: "AWS", level: 90, icon: "📦" },
      { name: "Docker", level: 93, icon: "🐳" },
      { name: "Kubernetes", level: 85, icon: "⛵" },
      { name: "CI/CD", level: 92, icon: "🔄" },
      { name: "Terraform", level: 87, icon: "🛠️" },
      { name: "Monitoring", level: 89, icon: "📊" },
    ],
    database: [
      { name: "PostgreSQL", level: 92, icon: "🐘" },
      { name: "MongoDB", level: 88, icon: "🍃" },
      { name: "Redis", level: 90, icon: "🔴" },
      { name: "Elasticsearch", level: 85, icon: "🔍" },
      { name: "Prisma", level: 91, icon: "⚡" },
      { name: "Data Modeling", level: 93, icon: "📐" },
    ],
  };

  // Professional Experience
  const experience = [
    {
      company: "TechNova Inc.",
      role: "Lead Full-Stack Developer",
      period: "2020 - Present",
      achievements: [
        "Architected and led development of SaaS platform serving 500k+ users",
        "Reduced API response times by 65% through query optimization",
        "Mentored 8 junior developers, improving team velocity by 40%",
        "Implemented CI/CD pipeline reducing deployment time from 2hr to 15min",
      ],
    },
    {
      company: "Digital Solutions LLC",
      role: "Senior Frontend Engineer",
      period: "2018 - 2020",
      achievements: [
        "Rebuilt core frontend using React, improving Lighthouse scores by 45 points",
        "Created design system adopted by 20+ product teams",
        "Reduced bundle size by 58% through code splitting and optimization",
      ],
    },
    {
      company: "StartUp Innovations",
      role: "Full-Stack Developer",
      period: "2016 - 2018",
      achievements: [
        "Developed MVP that secured $2M in Series A funding",
        "Built real-time analytics dashboard processing 1M+ events daily",
        "Implemented automated testing reducing bugs by 70%",
      ],
    },
  ];

  // Enhanced Testimonials with real photos
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content:
        "Alex transformed our e-commerce platform. His architectural decisions improved our system's scalability to handle 5x traffic growth. He's the rare engineer who understands both technical depth and business impact.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Engineering Director at FinTech Global",
      content:
        "Working with Alex was transformative. He implemented our CI/CD pipeline that reduced deployment failures by 90%. His code reviews raised our entire team's standards. Hire him immediately if you get the chance.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Lead at HealthStart",
      content:
        "Alex built our healthcare portal with perfect balance of security and usability. He navigated HIPAA requirements while delivering an intuitive UI. Our patient satisfaction scores increased by 35% after launch.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
  ];

  useEffect(() => {
    // Auto-rotate projects
    projectIntervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }
    }, 6000);

    // Scroll detection for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(projectIntervalRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "infrastructure", name: "Infra", icon: Code },
    { id: "database", name: "Database", icon: Database },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    resetProjectInterval();
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    resetProjectInterval();
  };

  const resetProjectInterval = () => {
    clearInterval(projectIntervalRef.current);
    projectIntervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }
    }, 6000);
  };

  // Scroll to section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 text-xl font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {["</>", "{}", "[]", "()", "=>", "//", "div", "fn", "const", "class"][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-md py-3 border-b border-gray-800" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="mr-2" size={20} />
              {userData.name.split(" ")[0]}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Testimonials", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-4 h-0.5 bg-current"></div>
            </button>

            {/* Contact Button - Desktop */}
            <motion.a
              href={`mailto:${userData.email}`}
              className="hidden md:flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={16} className="mr-2" />
              Contact
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {["About", "Skills", "Experience", "Projects", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={`mailto:${userData.email}`}
                className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-lg font-medium mt-2"
              >
                <Send size={16} className="mr-2" />
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <motion.div
                  className="inline-block bg-gradient-to-r from-orange-500/15 to-red-500/15 px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="flex items-center text-orange-400">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-2"></div>
                    {userData.availabilityText}
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Building Digital{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {userData.title} · {userData.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I architect and build high-performance web applications that solve real business problems. 
                  Combining technical expertise with UX focus to deliver exceptional digital products.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href={`mailto:${userData.email}`}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-orange-500/25 flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Get In Touch</span>
                </motion.a>

                <motion.a
                  href={userData.resumeUrl}
                  download
                  className="group border-2 border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform rotate-6 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl transform -rotate-6 blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden">
                  <div className="p-1">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                        <img
                          src={userData.avatar}
                          alt={userData.name}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{userData.name}</h3>
                            <p className="text-orange-400">{userData.title}</p>
                          </div>
                          <div className="flex space-x-3">
                            <a href={userData.social.github} className="text-gray-400 hover:text-white transition-colors">
                              <Github size={20} />
                            </a>
                            <a href={userData.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                              <Linkedin size={20} />
                            </a>
                            <a href={userData.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                              <Twitter size={20} />
                            </a>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span>{userData.location}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Mail size={16} className="mr-2" />
                            <span>{userData.email}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">React</span>
                          <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                          <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                          <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {Object.entries(userData.stats).map(([key, value], index) => (
                  <div 
                    key={key} 
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 text-center min-w-[100px] shadow-lg"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-400 uppercase mt-1">{key}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Expertise</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mastery across the full stack with focus on performance, scalability, and maintainability
            </motion.p>
          </div>

          {/* Skill Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={
                  "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                  (activeSkillCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "bg-gray-800 border border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-400")
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
          >
            {skills[activeSkillCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-orange-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Professional <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My career path and key accomplishments
            </motion.p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/20 to-red-500/20"></div>
            
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-orange-400 font-medium mb-4">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                          </div>
                          <p className="text-gray-300 ml-3">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20" ref={projectsRef}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Solutions that demonstrate technical excellence and business impact
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={projects[activeProject].image}
                        alt={projects[activeProject].title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="p-8 flex-1 flex flex-col justify-end">
                        <div className="mb-4">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {projects[activeProject].category}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl font-bold text-white mb-4">{projects[activeProject].title}</h3>
                        
                        <p className="text-xl text-gray-300 max-w-2xl mb-8">
                          {projects[activeProject].description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-8">
                          {projects[activeProject].technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
                          {projects[activeProject].metrics.map((metric, i) => (
                            <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                              <div className="text-2xl font-bold text-white">{metric.value}</div>
                              <div className="text-sm text-gray-400">{metric.label}</div>
                              <div className="text-xs text-gray-500">{metric.desc}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <motion.a
                            href={projects[activeProject].liveUrl}
                            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-5 py-3 rounded-lg font-semibold transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye className="w-5 h-5" />
                            <span>Live Demo</span>
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={projects[activeProject].githubUrl}
                            className="flex items-center space-x-2 border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-orange-400 px-5 py-3 rounded-lg font-semibold transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-5 h-5" />
                            <span>Source Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Project Navigation */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeProject === index ? "bg-orange-500 scale-125" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-8 z-20">
                <motion.button
                  onClick={prevProject}
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-orange-500 transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                
                <motion.button
                  onClick={nextProject}
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-orange-500 transition-all"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20" ref={testimonialsRef}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Client <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Testimonials</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What industry professionals say about working with me
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Connect</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have a project in mind or want to discuss opportunities? Reach out and let's create something amazing together.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                        <a href={`mailto:${userData.email}`} className="text-gray-400 hover:text-orange-400 transition-colors">
                          {userData.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                        <a href={`tel:${userData.phone}`} className="text-gray-400 hover:text-orange-400 transition-colors">
                          {userData.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                        <p className="text-gray-400">{userData.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    <a
                      href={userData.social.github}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={userData.social.linkedin}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={userData.social.twitter}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-xl font-bold transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <a href="#" className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  {userData.name}
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Crafting exceptional digital experiences
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href={userData.social.github} className="text-gray-500 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={userData.social.linkedin} className="text-gray-500 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={userData.social.twitter} className="text-gray-500 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={userData.website} className="text-gray-500 hover:text-white transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
              <p className="mt-2">Designed and built with React, Tailwind CSS, and Framer Motion</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}