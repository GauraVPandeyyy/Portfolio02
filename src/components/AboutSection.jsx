// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { Terminal, Cpu, Zap, Globe, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

export default function AboutSection({ userData }) {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <Terminal className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            System <span className="text-neutral-500">Architecture</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          
          {/* LEFT: The "IDE" / Terminal Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/10 shadow-2xl">
              {/* IDE Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] md:text-xs font-mono text-neutral-500">developer.config.ts</div>
                <div className="w-8 md:w-10" /> 
              </div>

              {/* Code Content - Responsive Text Size */}
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <div className="flex gap-4 min-w-[250px]"> 
                  {/* Line Numbers */}
                  <div className="flex flex-col text-neutral-700 select-none text-right">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => <span key={n}>{n}</span>)}
                  </div>
                  {/* Code */}
                  <div className="text-neutral-300">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">gaurav</span> = <span className="text-yellow-400">{`{`}</span></div>
                    <div className="pl-4">role: <span className="text-green-400">"Full Stack Eng"</span>,</div>
                    <div className="pl-4">focus: <span className="text-green-400">"Production UX"</span>,</div>
                    <div className="pl-4">stack: <span className="text-yellow-400">[</span></div>
                    <div className="pl-8"><span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"Mongo"</span></div>
                    <div className="pl-4"><span className="text-yellow-400">]</span>,</div>
                    <div className="pl-4">loc: <span className="text-green-400">"{userData.location}"</span>,</div>
                    <div className="pl-4">status: <span className="text-orange-400">"Open"</span>,</div>
                    <div className="pl-4">traits: <span className="text-yellow-400">[</span></div>
                    <div className="pl-8"><span className="text-green-400">"Clean Code"</span></div>
                    <div className="pl-4"><span className="text-yellow-400">]</span></div>
                    <div><span className="text-yellow-400">{`}`}</span>;</div>
                    <div className="mt-2 text-neutral-500 opacity-50">// Ready to deploy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* "Compiled" Status Bar - Stacked Grid on Mobile */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
               {[
                 { label: "Experience", val: userData.stats.experience, icon: Zap },
                 { label: "Projects", val: userData.stats.projects, icon: Cpu },
                 { label: "Clients", val: userData.stats.clients, icon: Globe },
               ].map((stat, i) => (
                 <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-900 border border-white/5">
                    <stat.icon className="w-4 h-4 text-orange-500" />
                    <div>
                      <div className="text-sm font-bold text-white">{stat.val}</div>
                      <div className="text-[10px] uppercase text-neutral-500 tracking-wider">{stat.label}</div>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* RIGHT: Narrative & Protocols */}
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <motion.h3 variants={itemVars} className="text-xl md:text-2xl font-semibold text-white mb-4">
                Beyond the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Console.log</span>
              </motion.h3>
              <motion.p variants={itemVars} className="text-neutral-400 leading-relaxed text-base md:text-lg">
                {userData.bio}
              </motion.p>
            </div>

            <motion.div variants={itemVars} className="space-y-4">
              <h4 className="text-xs md:text-sm font-mono uppercase text-neutral-500 tracking-widest border-b border-white/10 pb-2">
                Deployment Protocols
              </h4>
              <ul className="space-y-3">
                {[
                  "Pixel-perfection is the standard, not a goal.",
                  "Secure, scalable Node.js architectures.",
                  "Full ownership: Auth, DB, Deployment.",
                  "Clear communication, zero blockers."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVars} className="pt-4 flex gap-4">
               {[
                 { Icon: Github, href: userData.social.github },
                 { Icon: Linkedin, href: userData.social.linkedin },
                 { Icon: Twitter, href: userData.social.twitter }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href} 
                   target="_blank" 
                   rel="noreferrer"
                   className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                 >
                   <social.Icon className="w-5 h-5" />
                 </a>
               ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}