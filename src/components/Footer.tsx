import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-[#030014] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Email</p>
                  <p className="font-bold text-white">aamirsheikh0008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone</p>
                  <p className="font-bold text-white">+91 7891250008</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Location</p>
                  <p className="font-bold text-white">New Delhi, IN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 hover:opacity-90 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
