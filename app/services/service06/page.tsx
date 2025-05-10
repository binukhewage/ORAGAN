"use client"
import React from 'react';
import { motion } from 'framer-motion';
import service06Image from '../../assets/service06MainImage.png';

const Service = () => {
    return (
        <main className="relative bg-black overflow-hidden">
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
                            Patent Application <span className="text-white">Guidance</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-lg md:text-lg text-gray-400'
                        >
                            We help innovators protect their intellectual property by guiding them through the patent application process, from initial searches to final submissions.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-2xl flex justify-center"
                    >
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-xl">
                            <img
                                className="w-full max-w-[300px] object-contain"
                                src={service06Image.src}
                                alt="Patent Application Guidance"
                            />
                        </div>
                    </motion.div>

                    {/* Additional content section with animated appearance */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 max-w-4xl w-full"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Patentability Assessment",
                                    content: "Evaluate your invention's novelty and potential for patent protection."
                                },
                                {
                                    title: "Prior Art Search",
                                    content: "Conduct comprehensive searches to identify existing similar patents."
                                },
                                {
                                    title: "Application Preparation",
                                    content: "Assist in preparing all necessary documentation for patent submission."
                                },
                                {
                                    title: "Filing Strategy",
                                    content: "Develop optimal filing strategies including international protection."
                                },
                                {
                                    title: "Office Action Responses",
                                    content: "Help respond to examiner inquiries and objections."
                                },
                                {
                                    title: "IP Portfolio Management",
                                    content: "Advise on maintaining and expanding your intellectual property portfolio."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Service;