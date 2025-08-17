import { motion } from "framer-motion";
import { useMemo } from "react";

export const BackgroundEffects = () => {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.1,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 15,
      direction: Math.random() > 0.5 ? 1 : -1
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Your existing background effects code */}
    </div>
  );
};

export default BackgroundEffects;