// src/components/LoaderOverlay.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function LoaderOverlay({ progress, isDone }) {
  // Developer-centric loading states
  const getStatusString = () => {
    if (progress < 25) return "establishing_db_connection...";
    if (progress < 50) return "booting_node_server...";
    if (progress < 75) return "compiling_react_components...";
    if (progress < 100) return "optimizing_assets...";
    return "system_ready";
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
          
          {/* --- TOP SHUTTER (Premium Easing) --- */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] z-20 border-b border-white/5"
          />

          {/* --- BOTTOM SHUTTER (Premium Easing) --- */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] z-20 border-t border-white/5"
          />

          {/* --- CONTENT Z-ZONE --- */}
          <motion.div
            className="relative z-30 w-[90%] max-w-lg"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full pointer-events-none" />

            {/* Code Editor Window */}
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black">
              
              {/* Editor Header */}
              <div className="flex items-center justify-between px-1 md:px-4 py-2 md:py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">compile.js</span>
                </div>
                <div className="w-12" /> {/* Spacer for symmetry */}
              </div>

              {/* Editor Body (The Code) */}
              <div className="p-2 md:p-8 font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-x-auto">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="flex flex-col text-neutral-700 pr-1 md:pr-4 select-none text-right border-r border-white/5 mr-4">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                  </div>

                  {/* Code Content */}
                  <div className="flex-1 w-full whitespace-nowrap">
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span>
                    </div>
                    
                    <div className="pl-1 md:pl-6">
                      <span className="text-orange-300">name</span><span className="text-white">: </span>
                      <span className="text-green-400">'Gaurav Pandey'</span><span className="text-white">,</span>
                    </div>
                    
                    <div className="pl-1 md:pl-6">
                      <span className="text-orange-300">stack</span><span className="text-white">: </span>
                      <span className="text-green-400">['MongoDB', 'Express', 'React', 'Node']</span><span className="text-white">,</span>
                    </div>
                    
                    <div className="pl-1 md:pl-6">
                      <span className="text-orange-300">task</span><span className="text-white">: </span>
                      <span className="text-neutral-400">"{getStatusString()}"</span><span className="text-white">,</span>
                    </div>
                    
                    <div className="pl-1 md:pl-6 flex items-center">
                      <span className="text-orange-300">progress</span><span className="text-white">: </span>
                      <span className="text-blue-400 ml-2">{progress}</span>
                      <span className="text-white">;</span>
                      {/* Blinking Cursor */}
                      <motion.div 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 md:h-5 bg-orange-500 ml-1 inline-block align-middle"
                      />
                    </div>
                    
                    <div>
                      <span className="text-yellow-300">{'}'}</span><span className="text-white">;</span>
                    </div>
                    
                    <div className="mt-4 text-neutral-500">
                      <span className="text-purple-400">await</span> <span className="text-blue-400">system</span>.<span className="text-yellow-200">init</span>(developer);
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar Strip at Bottom */}
              <div className="h-1 w-full bg-neutral-900 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 via-orange-400 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}