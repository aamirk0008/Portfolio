import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Source Code', href: 'https://github.com/aamirk0008', external: true },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl py-3 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
            <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-white font-bold tracking-tight hidden sm:block">Sheikh Aamir</span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/aamirk0008" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/sheikh-aamir-41661b262" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#030014] border-b border-white/5 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 pt-4 border-t border-white/5">
              <Github size={20} className="text-gray-400" />
              <Linkedin size={20} className="text-gray-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
