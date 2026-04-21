import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Track interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isHidden]);

  // Hide on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
    }
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Ring / Trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-purple-500/50 rounded-full z-[9998] pointer-events-none"
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0)',
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.5)',
        }}
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-full" />
      </motion.div>

      {/* Particle trail (Stardust) */}
      {[...Array(5)].map((_, i) => (
        <Stardust key={i} index={i} cursorX={cursorX} cursorY={cursorY} />
      ))}
    </>
  );
};

interface StardustProps {
  index: number;
  cursorX: any;
  cursorY: any;
}

const Stardust: React.FC<StardustProps> = ({ index, cursorX, cursorY }) => {
  const springConfig = { damping: 15 + index * 5, stiffness: 100 + index * 20 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 bg-white/30 rounded-full z-[9997] pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: 0.5 - index * 0.1,
        scale: 1 - index * 0.15,
      }}
    />
  );
};
