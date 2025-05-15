"use client"
import React from 'react';
import {  useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCheck, FaFileAlt, FaGlobe, FaBalanceScale, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import service06Image from '../../assets/s6.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';

const Service = () => {

    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!form.current) return;

        setIsSubmitting(true);
        setShowSuccess(false);

        emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_d7g7w2o',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_26zfnrg',
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'omp8hrzQ39_CDMihe'
        )
        .then(
            () => {
            setShowSuccess(true);
            form.current?.reset();
            setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
            },
            (error) => {
            console.error('EmailJS error:', error.text);
            }
        )
        .finally(() => {
            setIsSubmitting(false);
        });
    };


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
                            <span className="text-white">Patent Guidance for Innovators</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-xl md:text-2xl text-gray-400 mb-12'
                        >
                            Welcome to our Patent Guidance page! Whether you’re a seasoned inventor or just starting to explore
the world of intellectual property (IP), this guide will help you understand the patent process, its
importance, and how you can protect your innovative ideas.
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
                                src={service06Image.src}
                                alt="Patent Application Guidance"
                            />
                        </div>
                    </motion.div>

                    {/* What is a Patent Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                                <FaFileAlt className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                What is a Patent?
                            </h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                A patent is a legal right granted to the inventor of a new and original invention or discovery. This exclusive right allows the inventor to exclude others from making, using, selling, or distributing the patented invention for a specified period, typically 20 years.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                In exchange, the inventor must publicly disclose how the invention works.
                            </p>
                        </div>
                    </motion.section>

                    {/* Why Patent Section */}
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
                            <h2 className="text-3xl font-bold text-white">Why Should You Patent Your Idea?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                title: "Protect Your Invention",
                                description: "A patent gives you the exclusive right to your invention and prevents others from copying it.",
                                },
                                {
                                title: "Enhance Business Opportunities",
                                description: "Patents can increase your credibility and potentially attract investment or partnerships.",
                                },
                                {
                                title: "Monetize Your Invention",
                                description: "You can license your patent to other companies or sell it for profit.",
                                },
                                {
                                title: "Global Reach",
                                description: "A patent can open the door to international markets by offering protection in other countries.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex items-start"
                                >
                                <span className="text-blue-400 mr-3 mt-1">●</span>
                                <div>
                                    <p className="text-gray-100 font-semibold">{item.title}</p>
                                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                                </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.section>

                    {/* Types of Patents Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                                <FaShieldAlt className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Types of Patents</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "1. Utility Patents",
                                        content: "The most commin type, protecting the functional aspect of an invention."
                                    },
                                    {
                                        title: "2. Design Patents",
                                        content: "Protect ornamental design or appearance of an object."
                                    },
                                    {
                                        title: "3. Plant Patents",
                                        content: "Protect new plant varieties that are asexually reproduced."
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                                    >
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* The Patent Process Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaBalanceScale className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">The Patent Process</h2>
                        </div>
                        
                        <div className="relative">
                            {/* Timeline */}
                            <div className="border-l-2 border-blue-500 pl-8 space-y-12">
                                {[
                                    {
                                        title: "1. Idea Evaluation",
                                        content: "Conduct a preliminary search to ensure your idea is novel and non-obvious."
                                    },
                                    {
                                        title: "2. Patent Application",
                                        content: "File a patent application that includes a detailed description of your invention and any related drawings."
                                    },
                                    {
                                        title: "3. Patent Examination",
                                        content: "After filling, a patent examiner reviews the application to determine whether it meets the patent criteria."
                                    },
                                    {
                                        title: "4. Patent Grant",
                                        content: "If the application is approved, you are granted a patent for your invention."
                                    },
                                    {
                                        title: "5. Patent Enforcement",
                                        content: "Once you have a patent, you have the right to take legal action if others infringe on it."
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-11 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* How to Start + Cost Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl grid md:grid-cols-2 gap-12 mb-20"
                    >
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaLightbulb className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">How to Start</h2>
                            </div>

                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ol className="space-y-6 list-decimal list-inside">
                                <li className="text-gray-100">
                                    <span className="font-semibold">Conduct a Patent Search:</span>{" "}
                                    <p className="text-gray-300 mt-1">
                                    Before applying for a patent, it’s essential to check whether your idea is already patented. You can do this through online databases or with the help of a patent attorney.
                                    </p>
                                </li>

                                <li className="text-gray-100">
                                    <span className="font-semibold">Hire a Patent Attorney or Agent:</span>{" "}
                                    <p className="text-gray-300 mt-1">
                                    Navigating the patent system can be complex. A patent attorney or agent can guide you through the process, help with drafting your application, and ensure your idea is fully protected.
                                    </p>
                                </li>

                                <li className="text-gray-100">
                                    <span className="font-semibold">Prepare Your Patent Application:</span>
                                    <p className="text-gray-300 mt-1">A complete patent application typically includes:</p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2 pl-4 space-y-1">
                                    <li><span className="font-medium text-gray-200">Abstract:</span> A brief summary of your invention.</li>
                                    <li><span className="font-medium text-gray-200">Detailed Description:</span> A detailed written explanation of your invention and its uses.</li>
                                    <li><span className="font-medium text-gray-200">Drawings:</span> Diagrams that show how the invention works.</li>
                                    <li><span className="font-medium text-gray-200">Claims:</span> The part of the patent that defines the scope of your protection.</li>
                                    </ul>
                                </li>
                                </ol>
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <FaGlobe className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Cost Considerations</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ul className="space-y-4">
                                    {[
                                        "Patent Search: Charges for conducting a patent search to ensure your idea is unique.",
                                        "Filing Fees: Fees for submmittng your application to the relavant patent office.",
                                        "Attorney Fees: Proffesional fees for drafting and filling the application.",
                                        "Maintenance Fees: Ongoing fees to keep your patent active once granted."
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-400 mr-2 mt-1">•</span>
                                            <p className="text-gray-300">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaSearch className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">FAQ</h2>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                {
                                    question: "How long does it take to get a patent?",
                                    answer: "The patent process can take anywhere from several months to a few years, depending on the complexity of the invention and the patent office’s workload."
                                },
                                {
                                    question: "Can I patent an idea or just the implementation?",
                                    answer: "You can only patent the specific implementation of an idea that meets the requirements for patentability (novelty, utility, and non-obviousness). Abstract ideas cannot be patented. "
                                },
                                {
                                    question: "What happens if someone infringes my patent?",
                                    answer: "If someone violates your patent rights, you have the legal option to sue for damages and seek an injunction to stop them from using your invention."
                                },
                                {
                                    question: "Can I patent internationally?",
                                    answer: "Yes, but you will need to file separate patent applications in each country or region where you want protection. International patent protection can be obtained via the Patent Cooperation Treaty (PCT) or regional agreements like the European Patent Convention (EPC)."
                                }
                            ].map((item, index) => {
                                const [isOpen, setIsOpen] = React.useState(false);
                                
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -3 }}
                                        className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 cursor-pointer"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 pt-2">{item.answer}</p>
                                        </motion.div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.section>

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
                                <FaFileAlt className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                Ready to Protect Your Invention?
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8">
                            Get expert guidance through every step of the patent process—from initial search to final submission.
                        </p>
                        
                        <motion.div 
                            className="mt-16 relative"
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold text-white mb-2">Patent Consultation Request</h3>
                                <p className="text-gray-400 mb-8">
                                    Submit your invention details for a free preliminary patent assessment.
                                </p>

                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your name"
                                    required
                                    name="name"
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
                                    name="email"
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
                                name="message"
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
                                    disabled={isSubmitting}
                                    className={`w-full md:w-auto px-8 py-4 font-medium rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 group ${
                                    isSubmitting 
                                        ? 'bg-gray-600 cursor-not-allowed' 
                                        : 'bg-white text-black hover:opacity-90 hover:shadow-white/30'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : (
                                    <>
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
                                    </>
                                    )}
                                </motion.button>
                                    <div className="relative">
                                        {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="mb-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-center"
                                        >
                                            <p className="text-green-400">Message sent successfully!</p>
                                        </motion.div>
                                        )}
                                    </div>
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