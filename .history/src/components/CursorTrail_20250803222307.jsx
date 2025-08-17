import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';

const CursorTrail = () => {
  // Your existing cursor trail code with fixes
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  // Rest of your cursor trail code
};

export default CursorTrail;