// src/components/HeroSection.jsx
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  MessageCircle,
  Download,
  Database,
  Layout,
  Server,
  Cpu,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import Shuffle from "./Shuffle";
// --- 3D TILT CARD COMPONENT ---
function TiltCard({ children, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
}

export default function HeroSection({ userData }) {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center pt-10 md:pt-20 pb-20 overflow-hidden relative"
    >
      {/* --- BACKGROUND GLOWS (Strict Orange/Red Theme) --- */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-orange-50/10 opacity-10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] bg-red-50/10 opacity-10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div> */}

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* --- LEFT TEXT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Availability Pill - Kept Green for status, but desaturated to fit dark mode */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-md mx-auto lg:mx-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-green-500 tracking-wide uppercase">
                {userData.availabilityText || "Available for Hire"}
              </span>
            </div>

            {/* <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black  text-white leading-[1.1] sm:leading-[1]">
                <Shuffle
                  text="BUILDING"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  // triggerOnce={true}

                  respectReducedMotion={true}
                  loop={true}
                  loopDelay={1.5}
                />
                <Shuffle
                  text="DIGITAL"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  // triggerOnce={true}

                  respectReducedMotion={true}
                  loop={true}
                  loopDelay={1.5}
                />
                <Shuffle
                  text="REALITY."
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  // triggerOnce={true}

                  respectReducedMotion={true}
                  loop={true}
                  loopDelay={1.5}
                />
              </h1>
            </div> */}

            <div className="space-y-1">
              <h1 className="flex flex-col text-3xl md:text-6xl font-black text-white -tracking-normal">
                {/* Line 1: Standard White */}
                <div className="overflow-hidden h-[1.1em] flex items-center justify-center lg:justify-start">
                  <Shuffle
                    text="BUILDING"
                    duration={0.5}
                    stagger={0.03}
                    loop={true}
                    loopDelay={3}
                    className="!text-[inherit]" // Inherits font size from h1
                  />
                </div>

                {/* Line 2: The Gradient Accent */}
                <div className="overflow-hidden h-[1.1em] flex items-center justify-center lg:justify-start ">
                  <Shuffle
                    text="DIGITAL"
                    duration={0.5}
                    stagger={0.03}
                    loop={true}
                    loopDelay={3}
                    // Small delay added via logic below to stagger after "BUILDING"
                    className="!text-[inherit]"
                  />
                </div>

                {/* Line 3: Standard White */}
                <div className="overflow-hidden h-[1.1em] flex items-center justify-center lg:justify-start">
                  <Shuffle
                    text="REALITY."
                    duration={0.5}
                    stagger={0.03}
                    loop={true}
                    loopDelay={3}
                    className="!text-[inherit]"
                  />
                </div>
              </h1>
            </div>
            {/* <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] sm:leading-[1]">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-600">
                  DIGITAL
                </span> <br />
                REALITY.
              </h1>
            </div> */}

            <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-neutral-400 leading-relaxed border-l-0 lg:border-l-2 border-orange-500/50 lg:pl-6">
              I am <strong className="text-white">{userData.name}</strong>. A{" "}
              {userData.title} crafting high-performance user interfaces and
              robust backend systems. Based in {userData.location}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="group relative w-full sm:w-auto inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-neutral-200"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-neutral-300" />
                </div>
                <span className="mr-2">View Work</span>
                <Server className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={userData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10 backdrop-blur-sm hover:border-orange-500/50"
              >
                <Download className="mr-2 w-4 h-4" /> Resume
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT 3D CARD --- */}
          <div className="flex justify-center items-center perspective-1000">
            <TiltCard className="relative w-80 h-[480px] rounded-[2rem] bg-neutral-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-orange-500/10 flex flex-col items-center justify-between p-6">
              {/* Image Container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/5 relative group">
                <img
                  src={userData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Floating Icons inside image */}
                {/* <div className="absolute top-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                  </div>
                </div> */}
              </div>

              {/* Card Content */}
              <div className="w-full space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Full Stack</h3>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">
                      Architecture
                    </p>
                  </div>
                  <MousePointer2 className="text-orange-500 w-6 h-6 animate-bounce" />
                </div>

                {/* Tech Stack Pills - UNIFIED COLORS */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded-xl p-3 flex items-center gap-2 border border-white/5 hover:bg-white/10 transition-colors">
                    <Layout className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-neutral-300">Frontend</span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex items-center gap-2 border border-white/5 hover:bg-white/10 transition-colors">
                    <Database className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-neutral-300">Backend</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
