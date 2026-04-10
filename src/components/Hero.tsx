import React from 'react';
import { motion } from 'motion/react';
import { Share2, ArrowRight } from 'lucide-react';

const techIcons = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030014]">
      {/* Space Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        
        {/* Top Glow Accent (Black Hole Effect) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] pointer-events-none">
          <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/40 rounded-full blur-[120px]" />
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-white/20 rounded-full blur-[60px]" />
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-white/40 rounded-full blur-[30px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-8 backdrop-blur-sm"
          >
            <Share2 size={14} className="text-purple-500" />
            Fullstack Developer Portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
            Providing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">the best</span> <br />
            project experience.
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600/20 border border-purple-500/30 text-white rounded-xl font-medium text-lg backdrop-blur-md hover:bg-purple-600/30 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Orbital Icons Section */}
        <div className="relative flex items-center justify-center h-[500px]">
          {/* Orbital Rings */}
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
          <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full" />
          <div className="absolute w-[200px] h-[200px] border border-white/20 rounded-full" />
          
          {/* Central Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative w-full h-full"
          >
            {techIcons.map((tech, i) => {
              const angle = (i / techIcons.length) * (2 * Math.PI);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ x, y }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 hover:border-purple-500/50 transition-colors group"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Static Center Icon (React) */}
          <div className="absolute w-20 h-20 bg-purple-600/20 border border-purple-500/30 backdrop-blur-xl rounded-3xl flex items-center justify-center p-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-full h-full object-contain animate-spin-slow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
