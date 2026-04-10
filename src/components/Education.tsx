import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const skillRows = [
  [
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind Css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  ],
  [
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  ],
  [
    { name: 'JWT', icon: 'https://jwt.io/img/pic_logo.svg' },
    { name: 'WebSockets', icon: 'https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg' },
    { name: 'Framer motion', icon: 'https://raw.githubusercontent.com/framer/motion/main/packages/framer-motion/logo.svg' },
    { name: 'Gsap', icon: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
  ]
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-[#030014] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-purple-500" />
            Mastering the MERN Stack
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Technical Arsenal.</span>
          </h2>
          <p className="font-cursive text-2xl md:text-3xl text-gray-400">
            Crafting digital excellence with precision.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.1 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              {row.map((skill, i) => (
                <motion.div
                  key={`${rowIndex}-${i}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 md:p-5 hover:border-purple-500/50 transition-all group relative"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-600 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
