import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, X, CheckCircle2, Target, Lightbulb } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
  challenge: string;
  solution: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Finance Dashboard',
    description: 'A full-stack finance management system with role-based access control, real-time analytics, and an interactive dashboard featuring charts, transaction management, and financial health scoring.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1777056111/Screenshot_2026-04-25_001041_bvj0kj.png',
    live: 'https://finance-dashboard-rho-lake.vercel.app/',
    github: 'https://github.com/aamirk0008/finance-dashboard.git',
    challenge: 'Building a secure multi-role finance system where different users interact with financial data based on their permissions, while delivering meaningful analytics through aggregated data pipelines.',
    solution: 'Designed a clean MVC backend with JWT authentication and role-based middleware guards. Built MongoDB aggregation pipelines for real-time dashboard analytics. Used Redux Toolkit for centralized state management and Framer Motion for a polished glassmorphism dark UI.',
    features: [
      'Role-based access control — Admin, Analyst, Viewer',
      'Interactive dashboard with income vs expense charts',
      'Financial health score with ratio analytics',
      'Full transaction CRUD with filtering and pagination',
      'Soft delete for financial audit trail',
      'JWT authentication with auto token injection',
      'MongoDB aggregation pipelines for analytics',
      'Deployed on Render (API) and Vercel (Frontend)'
    ]
  },
  {
    title: 'IntoTheWildStays',
    description: 'A comprehensive hotel booking platform featuring real-time room availability, secure JWT authentication, and a clean UI with custom animations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1775847762/Screenshot_2026-04-10_194615_bs0lid.png',
    live: 'https://into-the-wilds-frontend-livid.vercel.app/',
    github: 'https://github.com/aamirk0008',
    challenge: 'Building a seamless booking experience that handles real-time availability across multiple room types while ensuring a secure and intuitive user flow.',
    solution: 'Developed a robust MERN architecture with optimized MongoDB queries for availability checks. Integrated JWT for secure authentication and used Framer Motion to create a high-end, fluid user interface.',
    features: [
      'Real-time room availability tracking',
      'Secure JWT-based user authentication',
      'Interactive booking calendar',
      'Dynamic filtering and search',
      'Custom animated transitions'
    ]
  },
  {
    title: 'Nyouta',
    description: 'Wedding invitation eCommerce platform with RESTful backend, admin dashboard for product CRUD, and order monitoring.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1775847893/Screenshot_2026-04-11_003355_d7qcra.png',
    live: 'https://nyouta-bay.vercel.app/',
    github: 'https://github.com/aamirk0008',
    challenge: 'Creating a scalable eCommerce platform that allows for easy product management and provides a smooth shopping experience for customizable wedding invitations.',
    solution: 'Built a comprehensive RESTful API and an admin dashboard for real-time inventory management. Leveraged Redux for predictable state management across the shopping cart and checkout process.',
    features: [
      'Full-featured Admin Dashboard',
      'Product CRUD operations',
      'Persistent shopping cart with Redux',
      'Order monitoring and status updates',
      'Responsive product catalog'
    ]
  },
  {
    title: 'Cricket Stats Hub',
    description: 'Real-time cricket match fixtures and player statistics aggregator using third-party APIs and Redux for efficient data caching.',
    tech: ['React.js', 'Redux', 'API Integration', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/datflmfl4/image/upload/v1776348163/Screenshot_2026-04-16_193043_smfpnx.png',
    live: 'https://shadow-fox2.vercel.app/',
    github: 'https://github.com/aamirk0008/FansMania.git',
    challenge: 'Aggregating large volumes of real-time sports data from external APIs while maintaining high performance and minimizing redundant network requests.',
    solution: 'Implemented an efficient data fetching layer with Redux-based caching. This strategy significantly reduced API latency and ensured users always see the latest statistics without constant reloading.',
    features: [
      'Live match fixtures and scores',
      'In-depth player statistics',
      'Efficient client-side data caching',
      'Dynamic search and filtering',
      'Clean, data-driven UI'
    ]
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all backdrop-blur-sm flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
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

                <div className="mt-auto space-y-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
                  >
                    View Case Study
                  </button>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex gap-2">
                    {selectedProject.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 text-purple-400 font-bold mb-3">
                        <Target size={20} />
                        <span className="uppercase tracking-widest text-xs">The Challenge</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                        <Lightbulb size={20} />
                        <span className="uppercase tracking-widest text-xs">The Solution</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
                      <CheckCircle2 size={20} />
                      <span className="uppercase tracking-widest text-xs">Key Features</span>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-white/5">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-center hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
                  >
                    Launch Live Site
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-center hover:bg-white/10 transition-all"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
