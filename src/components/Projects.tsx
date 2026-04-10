import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'IntoTheWildStays',
    description: 'A comprehensive hotel booking platform featuring real-time room availability, secure JWT authentication, and a clean UI with custom animations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://picsum.photos/seed/hotel/800/600',
    live: 'https://into-the-wilds-frontend-livid.vercel.app/',
    github: 'https://github.com/aamirk0008',
  },
  {
    title: 'Nyouta',
    description: 'Production-ready wedding invitation eCommerce platform with RESTful backend, admin dashboard for product CRUD, and order monitoring.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: 'https://picsum.photos/seed/wedding/800/600',
    live: '#',
    github: 'https://github.com/aamirk0008',
  },
  {
    title: 'Cricket Stats Hub',
    description: 'Real-time cricket match fixtures and player statistics aggregator using third-party APIs and Redux for efficient data caching.',
    tech: ['React.js', 'Redux', 'API Integration', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/cricket/800/600',
    live: '#',
    github: 'https://github.com/aamirk0008',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
              className="group bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-orange-500/10 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a target="_blank"
                    href={project.live}
                    className="p-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                  <Code2 className="text-orange-500" size={24} />
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
