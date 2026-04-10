import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'House Of Marktech',
    location: 'New Delhi, IN',
    period: 'Sept 2024 - Feb 2025',
    description: [
      'Engineered interactive, responsive web applications using React.js, Tailwind CSS, and Framer Motion.',
      'Architected and deployed full-stack web platforms incorporating advanced search, filtering, and sorting.',
      'Implemented Razorpay payment gateway and JWT-based authentication system.',
      'Optimized Redux state management for high-traffic e-commerce platforms.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Shadowfox',
    location: 'Remote',
    period: 'Apr 2024 - May 2024',
    description: [
      'Integrated third-party Cricket API to aggregate and display real-time match fixtures and statistics.',
      'Utilized Redux state management for efficient data caching and improved application performance.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot with Glow */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#030014] border-2 border-purple-500 z-10">
                  <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse opacity-50 blur-[4px]" />
                  <div className="absolute inset-[3px] rounded-full bg-purple-500" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-purple-400 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold backdrop-blur-sm">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-gray-400 flex gap-3">
                      <span className="text-purple-500 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
