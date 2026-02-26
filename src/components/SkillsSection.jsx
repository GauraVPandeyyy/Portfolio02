// src/components/SkillsSection.jsx
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Workflow, 
  Zap,
  Layers,
  Server
} from "lucide-react";
import { skills } from "../data/userData";

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Building with <span className="text-neutral-500">Precision</span>
          </motion.h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full" />
        </div>

        {/* --- REACT BITS BENTO GRID --- */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          
          {/* 1. CORE STACK - Full Width Highlight */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-12 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-4 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-white/20 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-5 relative z-10">
               <div className="p-2 sm:p-4 rounded-2xl bg-black border border-white/10 text-orange-500 shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]">
                 <Workflow className="w-8 h-8" />
               </div>
               <div>
                 <h3 className="text-2xl font-black text-white tracking-tight">Core Stack</h3>
                 <p className="text-neutral-400 font-medium mt-1">Primary development ecosystem</p>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 relative z-10">
               {skills.coreStack.map((tech) => (
                 <span key={tech} className="px-2 md:px-6 py-3 rounded-xl bg-black border border-white/10 text-sm font-bold text-white hover:border-orange-500/50 hover:bg-white/5 transition-all">
                   {tech}
                 </span>
               ))}
            </div>
          </motion.div>

          {/* 2. FRONTEND - Half Width Card */}
          <motion.div variants={item} className="md:col-span-1 lg:col-span-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-6 md:p-8 flex flex-col gap-8 group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
               <div className="p-3 rounded-xl bg-white/5 text-white">
                 <Layout className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white">Frontend</h3>
                 <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Client Side</p>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                  <Layers className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-sm font-semibold text-neutral-300">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. BACKEND - Half Width Card (Identical Structure to Frontend) */}
          <motion.div variants={item} className="md:col-span-1 lg:col-span-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-6 md:p-8 flex flex-col gap-8 group hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
               <div className="p-3 rounded-xl bg-white/5 text-white">
                 <Database className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-white">Backend</h3>
                 <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Server Architecture</p>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                  <Server className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-sm font-semibold text-neutral-300">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. TOOLS - Bottom Strip */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-12 rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-white/20 transition-all duration-500">
             <div className="flex items-center gap-3">
               <div className="p-2 rounded-lg bg-white/5 text-neutral-400">
                 <Code2 className="w-5 h-5" />
               </div>
               <span className="text-sm font-bold text-white tracking-wide">DevOps & Tools</span>
             </div>
             
             <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                {skills.tools.map((tool) => (
                  <div key={tool} className="px-3 py-1.5 rounded-md bg-transparent text-sm font-medium text-neutral-500 hover:text-white hover:bg-white/5 transition-colors cursor-default">
                    {tool}
                  </div>
                ))}
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}