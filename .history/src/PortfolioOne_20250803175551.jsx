import { useState, useEffect, useRef } from "react"
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
  Menu,
  X,
  ChevronDown,
  Award,
  Calendar,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  MessageSquare,
  BookOpen,
  Target,
  Rocket,
} from "lucide-react"

export default function EnhancedPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [currentSection, setCurrentSection] = useState("home")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const parallaxRef = useRef(null)

  // Enhanced User Data with Professional Metrics
  const userData = {
    name: "Gaurav Pandey",
    title: "Frontend Developer",
    tagline: "Architecting scalable solutions that drive business growth",
    location: "Lucknow, UP",
    email: "gauravp9118@gmail.com",
    phone: "+91 9118357637",
    website: "https://alexrodriguez.dev",
    resumeUrl: "https://drive.google.com/file/d/1tG9UrIIn5WoXASbIYygaGrJx7fg_pyGD/view?usp=sharing",
    avatar: "./",
    
    // Professional Status
    availableForHire: true,
    availabilityText: "Open to senior roles & consulting",
    expectedSalary: "$150k - $200k",
    noticePeriod: "2 weeks",
    
    // Enhanced Bio
    bio: "Senior full-stack developer with 8+ years of experience building enterprise-scale applications that serve millions of users. Specialized in React, Node.js, and cloud architecture. Led engineering teams at 2 successful startups from MVP to acquisition. Passionate about performance optimization, developer experience, and mentoring junior developers.",
    
    // Detailed Experience
    experience: [
      {
        company: "TechCorp Inc.",
        role: "Senior Full Stack Developer",
        period: "2022 - Present",
        location: "San Francisco, CA",
        achievements: [
          "Led development of microservices architecture serving 2M+ users",
          "Reduced application load time by 60% through optimization",
          "Mentored 5 junior developers and established code review standards"
        ]
      },
      {
        company: "StartupXY",
        role: "Lead Frontend Developer",
        period: "2020 - 2022",
        location: "Remote",
        achievements: [
          "Built MVP that secured $2M Series A funding",
          "Established frontend architecture used by 15+ developers",
          "Implemented CI/CD pipeline reducing deployment time by 80%"
        ]
      }
    ],
    
    // Education
    education: [
      {
        degree: "B.S. Computer Science",
        school: "Stanford University",
        period: "2016 - 2020",
        gpa: "3.8/4.0"
      }
    ],
    
    // Certifications
    certifications: [
      "AWS Solutions Architect Professional",
      "Google Cloud Professional Developer",
      "React Advanced Certification"
    ],

    // Social Links
    social: {
      github: "https://github.com/GauraVPandeyyy",
      linkedin: "https://www.linkedin.com/in/gaurav-pandey-0987162a0/",
      twitter: "https://x.com/gaura_vp9118",
      website: "https://alexrodriguez.dev",
    },

    // Enhanced Stats with Business Impact
    stats: {
      experience: "8+",
      projects: "75+",
      clients: "40+",
      revenue: "$5M+",
    },
  }

  // Enhanced Projects with Business Metrics
  const projects = [
    {
      id: 1,
      title: "Enterprise E-Commerce Platform",
      description: "Led development of a scalable e-commerce solution processing $2M+ monthly transactions. Implemented advanced features including real-time inventory, AI-powered recommendations, and multi-currency support.",
      image: "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
      technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Redis", "AWS"],
      liveUrl: "https://ecommerce-enterprise.com",
      githubUrl: "https://github.com/alexrodriguez/ecommerce-platform",
      featured: true,
      category: "Enterprise",
      metrics: {
        users: "500K+",
        revenue: "$2M+/month",
        performance: "98% uptime"
      },
      impact: "Increased client revenue by 300% within 6 months"
    },
    {
      id: 2,
      title: "Real-Time Collaboration Suite",
      description: "Built a comprehensive project management platform with real-time collaboration, video conferencing, and advanced analytics. Supports 10K+ concurrent users with 99.9% uptime.",
      image: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker", "Kubernetes"],
      liveUrl: "https://collaboration-suite.com",
      githubUrl: "https://github.com/alexrodriguez/collaboration-suite",
      featured: true,
      category: "SaaS",
      metrics: {
        users: "10K+",
        uptime: "99.9%",
        satisfaction: "4.8/5"
      },
      impact: "Improved team productivity by 45% for 200+ companies"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Developed an intelligent analytics platform using machine learning to provide predictive insights. Features real-time data processing and customizable visualization components.",
      image: "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "PostgreSQL", "Apache Kafka"],
      liveUrl: "https://analytics-ai.com",
      githubUrl: "https://github.com/alexrodriguez/ai-analytics",
      featured: true,
      category: "AI/ML",
      metrics: {
        accuracy: "94%",
        processing: "1M+ events/sec",
        clients: "50+"
      },
      impact: "Helped clients identify $10M+ in cost savings"
    },
    {
      id: 4,
      title: "Blockchain Trading Platform",
      description: "Created a secure cryptocurrency trading platform with advanced charting, portfolio management, and automated trading strategies. Handles $100M+ in trading volume.",
      image: "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
      technologies: ["React", "Web3.js", "Solidity", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://crypto-trading-pro.com",
      githubUrl: "https://github.com/alexrodriguez/crypto-platform",
      featured: true,
      category: "Blockchain",
      metrics: {
        volume: "$100M+",
        security: "0 breaches",
        users: "25K+"
      },
      impact: "Processed $100M+ in secure transactions"
    },
  ]

  // Enhanced Skills with Proficiency Details
  const skills = {
    frontend: [
      { name: "React", level: 98, icon: "⚛️", years: 6, projects: 30 },
      { name: "Next.js", level: 95, icon: "▲", years: 4, projects: 20 },
      { name: "TypeScript", level: 92, icon: "📘", years: 5, projects: 25 },
      { name: "Tailwind CSS", level: 90, icon: "🎨", years: 3, projects: 15 },
      { name: "Vue.js", level: 88, icon: "💚", years: 4, projects: 12 },
      { name: "JavaScript", level: 96, icon: "🟨", years: 8, projects: 40 },
    ],
    backend: [
      { name: "Node.js", level: 95, icon: "🟢", years: 7, projects: 35 },
      { name: "Python", level: 90, icon: "🐍", years: 5, projects: 20 },
      { name: "Express.js", level: 92, icon: "🚀", years: 6, projects: 25 },
      { name: "FastAPI", level: 88, icon: "⚡", years: 3, projects: 10 },
      { name: "GraphQL", level: 85, icon: "🔗", years: 4, projects: 15 },
      { name: "REST APIs", level: 96, icon: "🌐", years: 8, projects: 40 },
    ],
    database: [
      { name: "PostgreSQL", level: 94, icon: "🐘", years: 6, projects: 30 },
      { name: "MongoDB", level: 90, icon: "🍃", years: 5, projects: 25 },
      { name: "Redis", level: 88, icon: "🔴", years: 4, projects: 20 },
      { name: "Prisma", level: 86, icon: "⚡", years: 3, projects: 15 },
      { name: "Supabase", level: 82, icon: "🚀", years: 2, projects: 8 },
      { name: "Firebase", level: 85, icon: "🔥", years: 4, projects: 18 },
    ],
    tools: [
      { name: "Git", level: 98, icon: "📝", years: 8, projects: 50 },
      { name: "Docker", level: 92, icon: "🐳", years: 5, projects: 25 },
      { name: "AWS", level: 90, icon: "☁️", years: 6, projects: 30 },
      { name: "Kubernetes", level: 85, icon: "⚙️", years: 3, projects: 15 },
      { name: "Terraform", level: 80, icon: "🏗️", years: 2, projects: 10 },
      { name: "CI/CD", level: 94, icon: "🔄", years: 6, projects: 35 },
    ],
  }

  // Enhanced Testimonials with Company Details
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP Engineering at TechCorp",
      company: "TechCorp (500M+ valuation)",
      content: "Alex is one of the most talented developers I've worked with. His technical expertise and leadership skills were instrumental in scaling our platform to serve millions of users. He consistently delivered high-quality code and mentored our entire engineering team.",
      avatar: "👩‍💼",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      company: "StartupXY (Acquired by Google)",
      content: "Alex was our technical co-founder who built our MVP from scratch. His full-stack expertise and product vision helped us secure Series A funding and eventually get acquired. Simply exceptional.",
      avatar: "👨‍💻",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director",
      company: "Fortune 500 Financial Firm",
      content: "Working with Alex transformed our digital strategy. He delivered a trading platform that processes $100M+ monthly volume with zero security incidents. His attention to detail and performance optimization skills are unmatched.",
      avatar: "👩‍🎨",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/emilyrodriguez"
    },
  ]

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ]

  // Scroll and intersection observer effects
  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    // Section observer for navigation
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(testimonialInterval)
      observer.disconnect()
    }
  }, [])

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "DevOps & Tools", icon: Code },
  ]

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert("Thank you for your message! I'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Enhanced Background with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/12 to-purple-500/12 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              AR
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentSection === id
                      ? "text-orange-400"
                      : "text-neutral-300 hover:text-orange-400"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-orange-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-800">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2 text-base text-neutral-300 hover:text-orange-400"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center py-20 pt-32">
          <div
            className={`text-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Enhanced Avatar with Status */}
            <div className="relative mb-8">
              <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-full h-full object-cover rounded-full bg-neutral-800"
                />
              </div>

              {/* Enhanced Availability Badge */}
              {userData.availableForHire && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-2xl">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>{userData.availabilityText}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Name & Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              {userData.name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              {userData.title}
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {userData.tagline}
            </p>

            {/* Enhanced Stats with Business Impact */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-orange-400 mb-2">{userData.stats.experience}</div>
                <div className="text-neutral-400 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-blue-400 mb-2">{userData.stats.projects}</div>
                <div className="text-neutral-400 text-sm font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-green-400 mb-2">{userData.stats.clients}</div>
                <div className="text-neutral-400 text-sm font-medium">Enterprise Clients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-purple-400 mb-2">{userData.stats.revenue}</div>
                <div className="text-neutral-400 text-sm font-medium">Revenue Generated</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href={`mailto:${userData.email}`}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Let's Collaborate</span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Professional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-semibold text-white">Availability</h3>
                </div>
                <p className="text-neutral-300 text-sm mb-2">Notice Period: {userData.noticePeriod}</p>
                <p className="text-neutral-300 text-sm">Expected Range: {userData.expectedSalary}</p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                </div>
                <p className="text-neutral-300 text-sm mb-2">{userData.location}</p>
                <p className="text-neutral-300 text-sm">Open to Remote/Hybrid</p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Specialization</h3>
                </div>
                <p className="text-neutral-300 text-sm mb-2">Enterprise Applications</p>
                <p className="text-neutral-300 text-sm">Team Leadership & Mentoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Experienced technical leader with a track record of building products that scale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-neutral-300 leading-relaxed">{userData.bio}</p>

              {/* Enhanced Interest Tags */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 px-4 py-2 rounded-xl">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <span className="text-neutral-200 font-medium">Startup Veteran</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-4 py-2 rounded-xl">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-neutral-200 font-medium">Team Builder</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-neutral-200 font-medium">Growth Focused</span>
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
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-neutral-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 pt-6">
                <a
                  href={userData.social.github}
                  className="w-14 h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href={userData.social.linkedin}
                  className="w-14 h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href={userData.social.twitter}
                  className="w-14 h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-7 h-7" />
                </a>
                <a
                  href={userData.social.website}
                  className="w-14 h-14 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Globe className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Enhanced Code Display */}
            <div className="relative">
              <div className="bg-neutral-900/70 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-400 ml-6 font-mono text-sm">senior-developer.js</span>
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
                    experience: <span className="text-orange-400">{userData.stats.experience.replace('+', '')}</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    specialties: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Leadership'</span>],
                  </div>
                  <div className="text-neutral-400 ml-6">
                    impact: <span className="text-green-400">'Building products that scale'</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    available: <span className="text-orange-400">{userData.availableForHire.toString()}</span>,
                  </div>
                  <div className="text-neutral-400 ml-6">
                    revenueGenerated: <span className="text-green-400">'{userData.stats.revenue}'</span>
                  </div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              8+ years of building scalable solutions and leading high-performing teams
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {userData.experience.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
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
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Education
            </h3>
            <div className="max-w-2xl mx-auto">
              {userData.education.map((edu, index) => (
                <div key={index} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Cutting-edge technologies and tools I use to deliver exceptional results
            </p>
          </div>

          {/* Enhanced Skill Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeSkillCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl scale-105"
                    : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400 hover:scale-105"
                }`}
              >
                <category.icon className="w-6 h-6" />
                <span className="text-lg">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills[activeSkillCategory].map((skill, index) => (
              <div
                key={skill.name}
                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
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
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-orange-500/50"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="text-neutral-400 text-sm">
                  Professional level with extensive production experience
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Enterprise-scale applications that drive real business results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Business Impact Badge */}
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/80 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-2">
                      <p className="text-orange-400 font-semibold text-sm">{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Business Metrics */}
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
                      <span
                        key={techIndex}
                        className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <a
              href={userData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg">View All Projects on GitHub</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Testimonials from industry leaders and satisfied clients
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 italic">
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
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-neutral-900/50 border rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index === activeTestimonial 
                    ? "border-orange-500/50 shadow-lg shadow-orange-500/20" 
                    : "border-neutral-800 hover:border-orange-500/50"
                }`}
                onClick={() => setActiveTestimonial(index)}
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
              </div>
            ))}
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? "bg-orange-500 scale-125" 
                    : "bg-neutral-600 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
              Ready to discuss your next project? I'm here to help bring your vision to life with cutting-edge technology and strategic thinking.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-neutral-400 text-sm">Email</div>
                        <div className="text-white font-semibold">{userData.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-neutral-400 text-sm">Phone</div>
                        <div className="text-white font-semibold">{userData.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-neutral-400 text-sm">Location</div>
                        <div className="text-white font-semibold">{userData.location}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Why Work With Me?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-neutral-300">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-neutral-300">Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-neutral-300">Flexible engagement models</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-neutral-300">Enterprise-grade security</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-neutral-600 disabled:to-neutral-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
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
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-neutral-400 mb-4">
              © 2024 {userData.name}. Crafted with ❤️ and lots of ☕
            </p>
            <div className="flex justify-center space-x-6">
              <a href={userData.social.github} className="text-neutral-400 hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={userData.social.linkedin} className="text-neutral-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={userData.social.twitter} className="text-neutral-400 hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={userData.social.website} className="text-neutral-400 hover:text-green-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
