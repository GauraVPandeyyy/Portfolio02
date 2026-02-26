// src/components/ExperienceSection.jsx
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function ExperienceSection({ userData }) {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            My <span className="text-neutral-500">Journey</span>
          </motion.h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
          
          {/* Work History */}
          <div className="space-y-12">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-orange-500" />
              Professional Experience
            </h3>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-black" />
                  
                  <div className="space-y-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-orange-400 font-medium mb-1">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-neutral-400 text-sm">{exp.company} • {exp.location}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-12">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              Education
            </h3>
            
            <div className="space-y-6">
              {userData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs text-neutral-500 bg-neutral-900 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                  <div className="text-orange-400 text-sm font-medium mb-4">{edu.school}</div>
                  <div className="text-xs text-neutral-500">GPA: {edu.gpa}</div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/5">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Certifications</h4>
              <div className="space-y-4">
                {userData.training.map((train, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                     <div>
                        <div className="text-sm text-neutral-200 font-medium">{train.name}</div>
                        <div className="text-xs text-neutral-500">{train.institute}</div>
                     </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}