// src/components/BlogSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { blogs } from "../data/blogData";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Engineering <span className="text-neutral-500">Insights</span>
          </motion.h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/portfolio/blog/${blog.slug}`}
                className="group block h-full p-6 md:p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:border-orange-500/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-orange-400 tracking-widest uppercase">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-400 transition-all duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed mb-8">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-sm font-bold text-white group-hover:text-orange-400 transition-colors mt-auto">
                  Read Article 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}