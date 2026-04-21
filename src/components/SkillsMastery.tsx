import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Code2, Database, Globe, Cpu } from 'lucide-react';

const categories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: 'React.js', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Typescript', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', level: 98, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'GSAP', level: 80, icon: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', level: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      { name: 'Git', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', level: 50, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Postman', level: 90, icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
      { name: 'Firebase', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ]
  }
];

export const SkillsMastery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="education" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-purple-500" />
            Skills & Mastery
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Mastery.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive look at my professional toolkit and the proficiency levels I've achieved through years of building production software.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Category Selector */}
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group ${
                  activeCategory === cat.id
                    ? 'bg-purple-600/10 border-purple-500/50 text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeCategory === cat.id ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-500'
                }`}>
                  {cat.icon}
                </div>
                <div>
                  <h4 className="font-bold">{cat.title}</h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {cat.skills.length} Specialized Technologies
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 min-h-[500px] backdrop-blur-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                <Cpu size={200} />
             </div>

             <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 grid gap-8"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]" />
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm">
                      {categories.find(c => c.id === activeCategory)?.title}
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {categories.find(c => c.id === activeCategory)?.skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center justify-center">
                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-gray-200 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-purple-400 font-mono text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
