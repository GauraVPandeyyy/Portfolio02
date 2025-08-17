import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const colors = useMemo(() => ['#ff00ff', '#00ffff', '#ffff00', '#ff00ff'], []);
  const size = useMemo(() => 100, []);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailRef = useRef([]);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const updateCursor = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    
    // Add new trail point with a gradient color
    const timestamp = Date.now();
    const colorIndex = Math.floor(Math.random() * colors.length);
    const nextColor = colors[(colorIndex + 1) % colors.length];
    
    trailRef.current.push({
      x: e.clientX,
      y: e.clientY,
      timestamp,
      id: Math.random().toString(36).substr(2, 9),
      color1: colors[colorIndex],
      color2: nextColor,
      rotation: Math.random() * 360
    });
    
    // Limit the number of trail points
    if (trailRef.current.length > 20) {
      trailRef.current.shift();
    }
  };

  const animateTrails = (time) => {
    if (previousTimeRef.current !== undefined) {
      // Update trail positions with smoothing
      trailRef.current.forEach((point, index) => {
        if (index > 0) {
          const prevPoint = trailRef.current[index - 1];
          point.x += (prevPoint.x - point.x) * 0.2;
          point.y += (prevPoint.y - point.y) * 0.2;
          point.rotation += 1;
        }
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateTrails);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateTrails);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button, .interactive, input, textarea")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor with gradient */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x - size/2,
          top: cursorPosition.y - size/2,
          width: size,
          height: size,
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
          borderRadius: '50%',
          filter: 'blur(1px)'
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
          rotate: isHovering ? 45 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Animated trail elements */}
      {trailRef.current.map((point, index) => {
        const progress = index / trailRef.current.length;
        const scale = 0.5 + progress * 0.5;
        const opacity = 0.2 + progress * 0.8;
        
        return (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: point.x - size/2,
              top: point.y - size/2,
              width: size,
              height: size,
              background: `linear-gradient(${point.rotation}deg, ${point.color1}, ${point.color2})`,
              borderRadius: '30%',
              mixBlendMode: 'screen',
              opacity: opacity,
              transform: `scale(${scale}) rotate(${point.rotation}deg)`,
              filter: 'blur(1px)'
            }}
            animate={{
              borderRadius: ['30%', '50%', '30%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        );
      })}

      {/* Glow effect */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-30"
        style={{
          left: cursorPosition.x - size,
          top: cursorPosition.y - size,
          width: size * 2,
          height: size * 2,
          background: `radial-gradient(circle, rgba(255,0,255,0.3) 0%, rgba(0,0,0,0) 70%)`,
        }}
        animate={{
          opacity: isHovering ? 0.5 : 0.2,
          scale: isHovering ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CursorTrail;