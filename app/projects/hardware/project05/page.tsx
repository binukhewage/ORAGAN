"use client"
import React from 'react';
import { motion } from 'framer-motion';
import product05 from '../../../assets/product-06.png';

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
                    src={product05.src}
                    alt="IoT Development Board"
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
                IOT <span>DEVELOPMENT BOARD</span>
              </motion.h1>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                A versatile development platform for IoT and embedded systems featuring LoRa wireless communication, USB-C connectivity, and robust power options. Designed with a high-performance microcontroller, comprehensive I/O options, and built-in peripherals for rapid prototyping and deployment.
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "High-performance microcontroller",
                  "LoRa Ra-02 module (long-range)",
                  "USB-C programming & power",
                  "Robust DC power jack (9-12V)",
                  "SD card slot for data logging",
                  "Tactile buttons & LED indicators",
                  "Built-in buzzer for alerts",
                  "Green terminal blocks for I/O"
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

              {/* Technical Specifications */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-xl font-semibold text-white mb-4">Technical Specifications</h2>
                <ul className="space-y-3">
                  {[
                    "Microcontroller: ESP32 or equivalent",
                    "Wireless: LoRa Ra-02 (868/915MHz)",
                    "USB: USB-C with PD support",
                    "Storage: MicroSD card slot",
                    "Power: 5V USB or 9-12V DC input",
                    "I/O: Multiple GPIO with terminal blocks",
                    "Indicators: RGB status LED",
                    "Dimensions: Compact form factor"
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