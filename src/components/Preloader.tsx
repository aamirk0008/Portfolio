import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC<{ finishLoading: () => void }> = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    '> initializing_kernel...',
    '> loading_system_assets...',
    '> importing_mern_stack_modules...',
    '> establishing_secure_connection...',
    '> configuring_UI_components...',
    '> running_optimizations...',
    '> deployment_successful!',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [finishLoading]);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setCurrentLine((prev) => (prev < lines.length - 1 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(lineTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-[#030014] flex flex-items-center justify-center font-mono">
      <div className="w-full max-w-xl px-6">
        <div className="mb-12">
          {/* Mock Terminal Header */}
          <div className="bg-white/5 border-x border-t border-white/10 rounded-t-xl px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-gray-500 text-xs ml-2">sheikh_aamir.sys</span>
          </div>
          
          {/* Terminal Content */}
          <div className="bg-black/40 border border-white/10 p-6 rounded-b-xl min-h-[240px] flex flex-col justify-between">
            <div className="space-y-2">
              {lines.slice(0, currentLine + 1).map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${idx === lines.length - 1 ? 'text-green-400' : 'text-purple-400'} text-sm md:text-base`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest">System Load</span>
                <span className="text-purple-400 text-sm font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-center"
        >
          <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            Wait while the world is being built
          </span>
        </motion.div>
      </div>
    </div>
  );
};
