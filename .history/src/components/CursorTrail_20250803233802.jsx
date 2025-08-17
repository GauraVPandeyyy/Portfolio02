import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.max(4, 24 - i * 1.5),
      delay: i * 0.03,
      opacity: 0.7 - (i * 0.05)
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
      
      // Update trail positions
      setTrailPositions(prev => {
        const newPositions = [{ x: e.clientX, y: e.clientY }, ...prev];
        return newPositions.slice(0, particles.length);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, particles.length]);

  // Animation loop for smoother trail
  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      // You can add additional animation logic here if needed
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Main cursor with glow effect */}
          <motion.div
            ref={cursorRef}
            className="absolute w-20 h-14 rounded-full pointer-events-none"
            animate={{
              x: position.x - 24,
              y: position.y - 24,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(236,72,153,0.6) 100%)',
              boxShadow: '0 0 20px 5px rgba(99, 102, 241, 0.5), 0 0 30px 10px rgba(236, 72, 153, 0.3)',
              filter: 'blur(0.5px)'
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
            }}
            transition={{
              duration: 0.1,
              ease: "linear"
            }}
          />

          {/* Trail particles */}
          {particles.map((particle, index) => {
            const trailPos = trailPositions[index] || position;
            return (
              <motion.div
                key={particle.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: particle.size,
                  height: particle.size,
                  background: `radial-gradient(circle, rgba(99,102,241,${particle.opacity}) 0%, rgba(236,72,153,${particle.opacity * 0.8}) 100%)`,
                  boxShadow: `0 0 ${particle.size}px ${particle.size/3}px rgba(99, 102, 241, ${particle.opacity * 0.3})`,
                  filter: 'blur(0.5px)'
                }}
                initial={{ 
                  x: trailPos.x - particle.size/2, 
                  y: trailPos.y - particle.size/2,
                  opacity: 0 
                }}
                animate={{
                  x: trailPos.x - particle.size/2,
                  y: trailPos.y - particle.size/2,
                  opacity: particle.opacity
                }}
                transition={{
                  duration: 0.4,
                  delay: particle.delay,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
};

export default CursorTrail;