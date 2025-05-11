"use client"
import React from 'react';
import { motion } from 'framer-motion';
import product07 from '../../../assets/product-08.png';

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
                    src={product07.src}
                    alt="OneClick Smart Scale Logger"
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
                className="text-white text-4xl md:text-5xl font-bold mb-6 mt-8"
              >
                ONECLICK <span>SMART SCALE</span>
              </motion.h1>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                An innovative smart scale logger that automates weight monitoring and data logging across industries. Features real-time data updates, GPS location tracking, and dual WiFi/GPRS connectivity for seamless cloud integration. Eliminates manual entry while enhancing quality control and operational efficiency.
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Automated weight data logging",
                  "Real-time cloud updates",
                  "Dual WiFi/GPRS connectivity",
                  "Precision GPS location tracking",
                  "Industrial-grade load cells",
                  "Cloud dashboard integration",
                  "Battery/AC powered options",
                  "Weather-resistant enclosure"
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
                    <span className='text-gray-400'>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Industry Applications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Industry Applications</h2>
                <ul className="space-y-3">
                  {[
                    "Manufacturing quality control",
                    "Agricultural yield measurement",
                    "Healthcare patient monitoring",
                    "Logistics and shipping",
                    "Waste management tracking",
                    "Food production monitoring",
                    "Chemical processing",
                    "Inventory management systems"
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
                      <span className='text-gray-400'>{item}</span>
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