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
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            Professional <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 border-l-2 border-gray-200 dark:border-gray-800"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-orange-500 font-medium">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                  </div>
                </div>
                <span className="px-4 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-gray-600 dark:text-gray-400 flex gap-3">
                    <span className="text-orange-500 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
