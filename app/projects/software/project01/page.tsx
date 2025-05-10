"use client"
import React from 'react';
import { motion } from 'framer-motion';
import product02 from '../../../assets/product-02.png';

const Project = () => {
  return (
    <main className="relative bg-black overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Diagonal Layout Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black to-black/90 z-0"></div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Product Image - Simple fade */}
            <motion.div 
              className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-gray-700/20 to-white/5 rounded-2xl"></div>
                <div className="relative bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 shadow-xl">
                  <img
                    className="w-full h-auto max-h-96 object-contain"
                    src={product02.src}
                    alt="Industrial Management and Solution Platform"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content - Simple fade */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 mt-8"
              >
                Industrial <span className="text-white">Management Platform</span>
              </motion.h1>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                Simplify your sales process with our cutting-edge POS Solution. Designed to operate seamlessly without the need for an internet connection, our POS software ensures that your business transactions are fast, reliable, and secure. Perfect for small and medium-sized businesses, it offers an affordable solution without compromising on quality.
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "No Internet Needed",
                  "User-Friendly Interface",
                  "Affordable Pricing",
                  "Fast and Reliable",
                  "Secure Data Management",
                  "Offline Operation",
                  "Easy Installation",
                  "24/7 Support"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <defs>
                        <linearGradient id="checkGradient" x1="0" y1="0" x2="100%" y2="0">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                      <path
                        stroke="url(#checkGradient)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="text-gray-400">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Technical Advantages</h2>
                <ul className="space-y-3">
                  {[
                    "Lightweight application with minimal system requirements",
                    "Regular security updates and patches",
                    "Compatible with most receipt printers and barcode scanners",
                    "Customizable reporting and analytics"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="url(#checkGradient)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;