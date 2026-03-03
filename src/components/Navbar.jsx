// src/components/Navbar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({
  navItems,
  currentSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Floating Pill Container */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
        
        {/* Logo / Home Button */}
        <motion.button
          className="px-4 py-2 text-xl font-black tracking-tighter text-white border-r border-white/10 mr-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("home")}
        >
          GP<span className="text-orange-500">.</span>
        </motion.button>

        {/* Desktop Pill Nav */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map(({ id, label }) => {
            const isActive = currentSection === id;
            const isBlog = id === "blog";
            
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-6 py-2 text-sm font-bold transition-all duration-300 z-10 ${
                  isActive 
                    ? "text-black" 
                    : isBlog 
                      ? "text-orange-500 hover:text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]" // Highlighted Blog Styling
                      : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="pill-bg"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 md:hidden overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl p-4 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map(({ id, label }) => {
                const isActive = currentSection === id;
                const isBlog = id === "blog";
                
                return (
                  <button
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : isBlog
                          ? "text-orange-500 hover:bg-orange-500/10" // Highlighted Blog Styling for Mobile
                          : "text-neutral-400 hover:bg-white/5"
                    }`}
                  >
                    {label}
                    {isActive && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}