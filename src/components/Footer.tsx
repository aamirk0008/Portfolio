import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mdaydvyv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Portfolio Inquiry from ${data.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        console.error('Formspree Error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className=" bg-[#030014] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email</p>
                  <p className="font-semibold text-white text-sm">aamirsheikh0008@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Phone</p>
                  <p className="font-semibold text-white text-sm">+91 7891250008</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Location</p>
                  <p className="font-semibold text-white text-sm">New Delhi, IN</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-7 rounded-[2rem] backdrop-blur-sm relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Company / Org</label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Google / Freelance"
                        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Inquiry Type</label>
                      <select
                        name="inquiry_type"
                        className="w-full px-5 py-[0.85rem] rounded-xl bg-[#030014]/50 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white text-sm appearance-none cursor-pointer"
                      >
                        <option value="freelance" className="bg-[#0a0a0a]">Freelance Project</option>
                        <option value="hiring" className="bg-[#0a0a0a]">Full-time / Hiring</option>
                        <option value="consultation" className="bg-[#0a0a0a]">Consultation</option>
                        <option value="other" className="bg-[#0a0a0a]">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-1">Message</label>
                    <textarea
                      required
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={3}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white text-sm resize-none"
                    />
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-[11px] mt-1">
                      <AlertCircle size={14} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
                    className={`w-full py-4 text-white rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-3 ${
                      status === 'loading' 
                        ? 'bg-gray-800 cursor-not-allowed opacity-50' 
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/10 hover:opacity-90'
                    }`}
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </footer>
  );
};
