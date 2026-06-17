import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--background)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Hexagon Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            <svg width="80" height="90" viewBox="0 0 80 90">
              <defs>
                <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4DFFEB" />
                  <stop offset="100%" stopColor="#B06FFF" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Left hexagon - sky blue */}
              <polygon
                points="20,5 38,15 38,35 20,45 2,35 2,15"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="1.5"
                filter="url(#glow)"
              />
              {/* Right hexagon - violet purple */}
              <polygon
                points="42,5 60,15 60,35 42,45 24,35 24,15"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1.5"
                filter="url(#glow)"
              />
              {/* Overlap gradient fill */}
              <polygon
                points="24,15 38,15 38,35 24,35"
                fill="url(#hexGrad)"
                opacity="0.3"
              />
              {/* X and P letters */}
              <text x="10" y="33" fontFamily="Outfit, sans-serif" fontSize="18" fontWeight="700" fill="var(--foreground)" textAnchor="middle">X</text>
              <text x="50" y="33" fontFamily="Outfit, sans-serif" fontSize="18" fontWeight="700" fill="var(--foreground)" textAnchor="middle">P</text>
            </svg>
          </motion.div>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.5em",
              color: "var(--foreground)",
              marginBottom: "40px",
            }}
          >
            XYPHORA PRIME
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ width: "200px", position: "relative" }}
          >
            <div
              style={{
                width: "200px",
                height: "1px",
                background: "rgba(124, 58, 237, 0.22)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  boxShadow: "0 0 8px rgba(124,58,237,0.4)",
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "var(--primary)",
                letterSpacing: "0.2em",
              }}
            >
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
