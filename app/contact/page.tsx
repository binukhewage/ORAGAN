"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send the message, please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send the message, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black pt-[100px] pb-[100px] overflow-hidden" id="contact">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 ">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight"
          >
            Contact <span className="text-white">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'
          >
            Have a project in mind or questions about our services? Reach out to our team.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-white mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                  </path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Our Address</h3>
                <p className="text-gray-400">Jayabima, Galpanawa Road,</p>
                <p className="text-gray-400">Monnekulama, Nikaweratiya</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-white mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-6 w-6">
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                  </path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                <p className="text-gray-400">Mobile: +94 71 118 6006</p>
                <p className="text-gray-400">Email: oragan.ist@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-white mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="h-6 w-6">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Working hours</h3>
                <p className="text-gray-400">24 Hours</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;