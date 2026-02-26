// src/PortfolioOne.jsx
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { userData } from "./data/userData";

import CursorTrail from "./components/CursorTrail";
import BackgroundEffects from "./components/BackgroundEffects";

import LoaderOverlay from "./components/LoaderOverlay";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import ApiSandboxSection from "./components/ApiSandboxSection";
export default function PortfolioOne() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [booted, setBooted] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Loader: smooth 0–100% using time-based easing
  useEffect(() => {
    let animationFrame;

    const duration = 2600; // total duration in ms
    const start = performance.now();

    const animate = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic for smoother feeling
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(eased * 100);

      setLoadingProgress(value);

      if (t < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // small delay so loader + fade-out feels premium
        setTimeout(() => setBooted(true), 650);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }, []);

  // Intersection observer for nav highlighting
  useEffect(() => {
    if (!booted) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [booted, navItems]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CursorTrail />
      <BackgroundEffects />

      <LoaderOverlay progress={loadingProgress} isDone={booted} />

      {/* Content fades in after boot */}
      <motion.div
        className="relative z-10 sm:mx-auto px-1 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: booted ? 1 : 0,
          y: booted ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar
          navItems={navItems}
          currentSection={currentSection}
          scrollToSection={scrollToSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-orange-50/10 opacity-10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] bg-red-50/10 opacity-10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
        <main className="pt-20 px-0.5 md:px-8">
          <HeroSection userData={userData} />
          <AboutSection userData={userData} />
          <ExperienceSection userData={userData} />
          <SkillsSection />
          <ApiSandboxSection />
          {/* <ArchitectureSection /> */}
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        {/* <footer className="py-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {userData.name}. Built with React,
          Tailwind, and a slightly unhealthy amount of Framer Motion.
        </footer> */}
      </motion.div>
    </div>
  );
}
