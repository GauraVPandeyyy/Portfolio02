// src/components/CursorTrail.jsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTrail() {
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  // Motion values for raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the "Follower" (The orange glow)
  // Damping: Higher = less oscillation (bounciness)
  // Stiffness: Higher = snaps faster
  // Mass: Higher = moves slower/heavier
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse Listeners
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseDown = () => setCursorVariant("click");
    const mouseUp = () => setCursorVariant("default");

    // Add listeners for hover effects on clickable elements
    const linkHoverStart = () => setCursorVariant("hover");
    const linkHoverEnd = () => setCursorVariant("default");

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Attach hover listeners to all links/buttons automatically
    const clickables = document.querySelectorAll('a, button, input, textarea');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', linkHoverStart);
        el.addEventListener('mouseleave', linkHoverEnd);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', linkHoverStart);
        el.removeEventListener('mouseleave', linkHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      
      {/* 1. THE FOLLOWER (Orange Glow) - Lags behind slightly */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 bg-orange-500/30 rounded-full blur-md"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          default: { scale: 1 },
          hover: { scale: 2.5, backgroundColor: "rgba(249, 115, 22, 0.4)" }, // Orange-500
          click: { scale: 0.8 },
        }}
        animate={cursorVariant}
        transition={{ duration: 0.2 }}
      />

      {/* 2. THE POINTER (Sharp White Dot) - Instant movement */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          default: { scale: 1 },
          hover: { scale: 0 }, // Hide dot on hover for cleaner look
          click: { scale: 0.5 },
        }}
        animate={cursorVariant}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}