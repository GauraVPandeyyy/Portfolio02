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
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
                }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </div>
    );
};

export default BackgroundEffects;