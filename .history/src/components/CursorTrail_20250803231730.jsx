import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
  // All hooks must be called before any conditional logic
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);

  // Move useMemo before any conditional returns
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.max(3, 20 - i * 2),
      delay: i * 0.05
    })), []
  );
  
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Render null after all hooks have been called
  if (isMobile) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-gradient-to-r from-blue-500/30 to-orange-500/30 rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
              }}
              initial={{ x: position.x - particle.size / 2, y: position.y - particle.size / 2, opacity: 0 }}
              animate={{
                x: position.x - particle.size / 4,
                y: position.y - particle.size / 2,
                opacity: 1
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: particle.delay,
                ease: "linear"
              }}
            />
          ))}
          <motion.div
            ref={cursorRef}
            className="absolute w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-full shadow-2xl"
            animate={{
              x: position.x - 8,
              y: position.y - 8,
              scale: 1,
            }}
            transition={{
              duration: 0.1,
              ease: "linear"
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default CursorTrail;