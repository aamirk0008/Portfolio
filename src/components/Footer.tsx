import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
        <div className="grid md:grid-cols-2 gap-16">
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

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
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
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Company / Org</label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Google / Freelance"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Inquiry Type</label>
                      <select
                        name="inquiry_type"
                        className="w-full px-6 py-[1.15rem] rounded-2xl bg-[#030014]/50 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white appearance-none cursor-pointer"
                      >
                        <option value="freelance" className="bg-[#0a0a0a]">Freelance Project</option>
                        <option value="hiring" className="bg-[#0a0a0a]">Full-time / Hiring</option>
                        <option value="consultation" className="bg-[#0a0a0a]">Consultation</option>
                        <option value="other" className="bg-[#0a0a0a]">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1">Message</label>
                    <textarea
                      required
                      name="message"
                      placeholder="Tell me about your project or role..."
                      rows={4}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
                    />
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    className={`w-full py-5 text-white rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                      status === 'loading' 
                        ? 'bg-gray-800 cursor-not-allowed opacity-50' 
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/20 hover:opacity-90'
                    }`}
                  >
                    {status === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
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
