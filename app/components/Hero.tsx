import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-[50px] overflow-hidden bg-black">
      {/* Spotlight background effect - updated for dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px] animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={logo.src} 
              alt="Company Logo" 
              className="h-16 w-auto sm:h-20 md:h-24"
            />
          </motion.div>

          {/* Headlines with staggered animation - updated for dark theme */}
          <div className="space-y-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white leading-tight"
            >
              Empowering Ideas
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight"
            >
              Building Solutions
            </motion.h1>
          </div>

          {/* Description with animation - updated for dark theme */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We transform your ideas into scalable, intelligent digital products.
            Our mission is to bridge creativity and technology for real-world impact.
            From concept to launch, we craft software that drives innovation and growth.
          </motion.p>

          {/* CTA Buttons with hover animations - updated for dark theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px -5px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#projectSection"
              className="px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-white/30"
            >
              Explore Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Animated decorative elements - updated for dark theme */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;