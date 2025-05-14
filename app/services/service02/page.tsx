"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCheck, FaWrench, FaLightbulb, FaBullseye, FaRocket } from 'react-icons/fa';
import service02Image from '../../assets/service02MainImage.png';

const Service = () => {
    return (
        <main className="relative bg-black overflow-hidden pt-5">
            {/* Glowing background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
            </div>

            <section className="relative py-20 md:py-32 w-full flex items-center justify-center min-h-screen">
                <div className="relative z-10 text-white flex flex-col items-center justify-center px-6 md:px-4 max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl w-full text-center mb-12 md:mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight">
                            <span className="text-white">Prototype Development</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-xl md:text-2xl text-gray-400 mb-12'
                        >
                            Let your idea take form. At ORAGAN, we transform your proof of concept into a refined, working prototype you can touch, test, and showcase.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-4xl flex justify-center mb-20"
                    >
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl">
                            <img
                                className="w-full max-w-[600px] object-contain"
                                src={service02Image.src}
                                alt="Prototype Development"
                            />
                        </div>
                    </motion.div>

                    {/* What is Prototype Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                                <FaSearch className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                What is a Prototype?
                            </h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A prototype is a more advanced, functional version of your idea. Unlike a basic Proof of Concept (POC), a prototype demonstrates how your product will actually look, feel, and perform. It integrates design, user interaction, and technical features into a real-world model.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                Think of it as your product's first real form—ready for hands-on feedback, testing, and iteration.
                            </p>
                        </div>
                    </motion.section>

                    {/* Why Prototype Matters Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaCheck className="text-white text-sm" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Why Prototype Development Matters</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Experience the real-world functionality of your product",
                                "Get user feedback early and iterate faster",
                                "Identify design or performance issues",
                                "Impress partners, investors, or potential customers",
                                "Prepare for pilot manufacturing or field deployment",
                                "A well-developed prototype bridges the gap between concept and market-ready product"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex items-start"
                                >
                                    <span className="text-blue-400 mr-3">●</span>
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* What We Do Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                                <FaWrench className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Do in Prototype Development</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 text-lg mb-6">
                                At ORAGAN, we turn your validated idea or POC into a high-quality prototype using cutting-edge tools, engineering precision, and thoughtful design. Our multidisciplinary team works collaboratively to:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Finalize product specifications and user requirements",
                                    "Develop mechanical structures and enclosures",
                                    "Design and fabricate PCB hardware",
                                    "Write embedded firmware and develop app/software interfaces",
                                    "Assemble all components into a working prototype",
                                    "Perform functional testing and iterative improvements"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-2 mt-1">•</span>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                            <p className="text-gray-300 font-medium">
                                WE ENSURE YOUR PROTOTYPE REFLECTS YOUR VISION—TECHNICALLY AND AESTHETICALLY.
                            </p>
                        </div>
                    </motion.section>

                    {/* Types of Prototypes Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaLightbulb className="text-white text-sm" /> 
                            </div>
                            <h2 className="text-2xl font-bold text-white">Types of Prototypes We Build</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Electronics hardware prototypes (IoT devices, sensors, smart devices)",
                                "Consumer product models (wearables, gadgets, tools)",
                                "Industrial automation units",
                                "Smart home and environmental monitoring devices",
                                "Mobile or web interface integrated hardware",
                                "No matter how complex or simple, we can bring your idea to life"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                                >
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* What You Get Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaRocket className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">What You'll Receive</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "A complete, functional prototype",
                                "Enclosure and mechanical design",
                                "UI/UX interface or control software",
                                "PCB and embedded firmware",
                                "Testing and optimization feedback",
                                "Technical documentation for DFM or manufacturing"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -3 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex items-start"
                                >
                                    <span className="text-blue-400 mr-3 mt-1">•</span>
                                    <p className="text-gray-300">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Ideal For + Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl grid md:grid-cols-2 gap-12 mb-20"
                    >
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <FaBullseye className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Ideal For</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ul className="space-y-3">
                                    {[
                                        "Founders preparing for product demos or crowdfunding",
                                        "Product teams planning pilot runs or user testing",
                                        "Engineers and inventors refining core technology",
                                        "Organizations validating field-ready solutions"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-400 mr-2 mt-1">•</span>
                                            <p className="text-gray-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaWrench className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Tools & Technologies We Use</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "3D Printing, CNC, Laser Cutting",
                                        "PCB Design & Fabrication (Altium, KiCad)",
                                        "Microcontrollers (ESP32, STM32, Arduino, Raspberry Pi)",
                                        "Embedded Firmware Development (C/C++, MicroPython)",
                                        "Mobile/Web App Interfaces (React, Flutter, Node.js)",
                                        "UI/UX Tools (Figma, Adobe XD)"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="text-blue-400 mr-2 mt-1">•</span>
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="w-full max-w-2xl text-center"
                    >
                        <div className="flex items-center justify-center mb-6 px-4 flex-wrap text-center sm:text-left">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-4 mb-2 sm:mb-0">
                                <FaLightbulb className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                Let's Build Your First Real Product
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8">
                            You're only a prototype away from unlocking funding, launching a pilot, or entering the market. Partner with ORAGAN and create the version of your idea that moves people.
                        </p>
                        
                        <motion.div 
                            className="mt-16 relative"
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold text-white mb-2">Get Expert Feedback</h3>
                                <p className="text-gray-400 mb-8">
                                    Submit your idea for a free professional review from our innovation specialists.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2 ju">Your Email</label>
                                            <input 
                                                type="email" 
                                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Idea</label>
                                        <textarea 
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 min-h-[120px]"
                                            placeholder="Describe your innovative idea..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button with Motion */}
                                    <motion.button 
                                        whileHover={{ 
                                            scale: 1.02, 
                                            boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" 
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit" 
                                        className="w-full md:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-white/30 flex items-center justify-center gap-2 group"
                                    >
                                        Submit for Review
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.section>
                </div>
            </section>
        </main>
    );
};

export default Service;