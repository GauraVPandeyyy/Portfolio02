// src/components/ProjectsSection.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { projects } from "../data/userData";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative  overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] right-[0%] w-[500px] h-[700px] bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[0%] w-[600px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="pt-32 pb-4 text-center max-w-2xl mx-auto px-6">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 mb-6"
           >
             <FolderGit2 className="w-3.5 h-3.5 text-orange-500" /> 
             <span className="text-xs font-bold text-orange-400 tracking-widest uppercase">
               Deployed Work
             </span>
           </motion.div>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
             Production <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Grade.</span>
           </h2>
        </div>

        {/* --- REACT BITS SCROLL STACK --- */}
        {/* useWindowScroll={true} is CRITICAL here so it scrolls with your main page */}
        <ScrollStack 
          useWindowScroll={true} 
          itemDistance={40} 
          itemStackDistance={10} // Thoda gap badhaya taki smooth dikhe
          baseScale={0.8}
          blurAmount={0} // SHAKING ROKNE KE LIYE ISKO 0 KIYA HAI
        >
          {projects.map((project, index) => (
            <ScrollStackItem 
              key={project.id} 
              itemClassName="bg-[#0A0A0A] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row group"
            >
              
              {/* Left Side: Content */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center relative z-10 w-full">
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white tracking-widest uppercase">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4 md:mb-8 max-w-xl">
                  {project.description}
                </p>

                {/* Metrics Highlights */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="border-l-2 border-orange-500/50 pl-3">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest">{key}</div>
                        <div className="text-sm font-semibold text-neutral-300">{value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-8 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-white/[0.03] border border-white/10 rounded-full hover:border-orange-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group/btn flex items-center gap-2 px-3 py-1 md:px-5 md:py-3 rounded-full bg-white text-black font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                      View Live 
                      <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-3 py-1 md:px-5 md:py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side: Image with Parallax & Hover Effect */}
              <div className="flex-1 relative hidden md:block  overflow-hidden bg-neutral-900 border-l border-white/5">
                {/* Real Image from userData.js */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                
                {/* Gradient Fade to blend image with text area */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Top/Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
              </div>

            </ScrollStackItem>
          ))}
        </ScrollStack>
        
      </div>
    </section>
  );
}