import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-8">
              Let's <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-orange-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</p>
                  <p className="font-bold">aamirsheikh0008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-orange-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Phone</p>
                  <p className="font-bold">+91 7891250008</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Location</p>
                  <p className="font-bold">New Delhi, IN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:border-orange-500 transition-colors dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:border-orange-500 transition-colors dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-1">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 focus:outline-none focus:border-orange-500 transition-colors dark:text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-orange-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 dark:border-gray-900 gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sheikh Aamir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/aamirk0008" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sheikh-aamir-41661b262" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
