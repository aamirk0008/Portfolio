import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'IntoTheWildStays',
    description: 'A comprehensive hotel booking platform featuring real-time room availability, secure JWT authentication, and a clean UI with custom animations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1775847762/Screenshot_2026-04-10_194615_bs0lid.png',
    live: 'https://into-the-wilds-frontend-livid.vercel.app/',
    github: 'https://github.com/aamirk0008',
  },
  {
    title: 'Nyouta',
    description: 'Wedding invitation eCommerce platform with RESTful backend, admin dashboard for product CRUD, and order monitoring.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1775847893/Screenshot_2026-04-11_003355_d7qcra.png',
    live: 'https://nyouta-bay.vercel.app/',
    github: 'https://github.com/aamirk0008',
  },
  {
    title: 'Cricket Stats Hub',
    description: 'Real-time cricket match fixtures and player statistics aggregator using third-party APIs and Redux for efficient data caching.',
    tech: ['React.js', 'Redux', 'API Integration', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1775847995/Screenshot_2026-04-11_003554_fs6cfg.png',
    live: 'https://shadow-fox2.vercel.app/',
    github: 'https://github.com/aamirk0008',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, ranging from full-stack eCommerce platforms to real-time data aggregators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <Code2 className="text-purple-500" size={24} />
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Link
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
