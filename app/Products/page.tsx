"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ProductCard';
import software from '../assets/software.png';
import hardware from '../assets/hardware.png';

const Products = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen pt-32 bg-black overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern header with gradient text and animations */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.h1 
            className="text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Next-generation solutions engineered for digital transformation
          </motion.p>
        </motion.div>

        {/* Enhanced product grid with staggered animations */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <motion.div variants={item}>
            <Card
              imageSrc={hardware.src}
              title="XION LORA CORE"
              description="Advanced hardware platform with cutting-edge connectivity and edge computing capabilities."
              link="/projects/hardware/project01"
              className="hover:-translate-y-2 transition-transform duration-300"
              glowColor="from-gray-300/20 to-white/20"
              borderColor="border-gray-300/30"
              badgeText="HARDWARE"
              badgeColor="bg-gray-300 text-black"
            />
          </motion.div>
          
          <motion.div variants={item}>
            <Card
              imageSrc={software.src}
              title="IMSP"
              description="Intelligent management software platform with AI-driven analytics and automation."
              link="/projects/software/project01"
              className="hover:-translate-y-2 transition-transform duration-300"
              glowColor="from-gray-400/20 to-white/20"
              borderColor="border-gray-400/30"
              badgeText="SOFTWARE"
              badgeColor="bg-gray-400 text-black"
            />
          </motion.div>
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;