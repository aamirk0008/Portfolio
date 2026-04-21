import React from 'react';
import { motion } from 'motion/react';
import { Layers, Globe, Code2, Rocket, Github, Terminal, Sparkles, MapPin } from 'lucide-react';

export const BentoSummary: React.FC = () => {
  return (
    <section className="py-24 bg-[#030014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:h-[600px]">
          
          {/* Large Feature Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
              <Layers size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                <Rocket size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Building Scalable <br/> <span className="text-purple-400">Production-Ready</span> <br/> Solutions.
              </h3>
              <p className="text-gray-400 max-w-sm">
                Specialized in the MERN stack, I bridge the gap between complex backend logic and pixel-perfect responsive frontends.
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between group hover:bg-white/10 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Location</span>
            </div>
            <div>
              <p className="text-lg font-bold text-white">New Delhi</p>
              <p className="text-gray-500 text-sm">India, GMT +5:30</p>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between group hover:border-purple-500/30 transition-colors"
          >
             <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400">
                <Code2 size={20} />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">MERN</p>
              <p className="text-gray-500 text-sm">Expertise in Stack</p>
            </div>
          </motion.div>

          {/* GitHub Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex items-center gap-6 group hover:bg-purple-600/5 transition-colors"
          >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
              <Github size={32} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Open Source</h4>
              <p className="text-gray-400 text-sm">Constantly shipping code and contributing to the dev community.</p>
            </div>
            <div className="hidden lg:flex gap-1 ml-auto">
              {[0.4, 0.7, 0.2, 0.9, 0.5, 0.8].map((op, i) => (
                <div key={i} className="w-3 h-10 rounded-full bg-purple-500" style={{ opacity: op }} />
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between group hover:border-blue-500/30 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400">
                <Terminal size={20} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Exp.</p>
              <p className="text-gray-500 text-sm">Full Stack Journey</p>
            </div>
          </motion.div>

          {/* AI Focus Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 rounded-[2.5rem] p-6 flex flex-col justify-between hover:bg-purple-600/20 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center text-yellow-400">
                <Sparkles size={20} />
              </div>
            </div>
            <div>
              <p className="text-lg font-bold text-white">Next Era</p>
              <p className="text-gray-500 text-sm">AI Integration Focus</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
