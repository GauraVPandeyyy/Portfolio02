// src/components/TestimonialsSection.jsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/userData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
             <br/>
            <span className="text-neutral-600">Visionaries.</span>
          </h2>
        </div> */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Trusted by <span className="text-neutral-500">Visionaries</span>
          </motion.h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-4 md:p-8 rounded-3xl bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <Quote className="w-10 h-10 text-neutral-700 mb-6 group-hover:text-orange-500 transition-colors" />

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 relative z-10">
                "{t.content || t.text}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-sm text-neutral-500">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
