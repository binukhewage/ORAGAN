"use client"
import {  useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCheck, FaWrench, FaIndustry, FaBoxOpen, FaGlobe, FaShieldAlt, FaQrcode } from 'react-icons/fa';
import service04Image from '../../assets/s4.png';
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
                            <span className="text-white">Full Scale Manufacturing</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-xl md:text-2xl text-gray-400 mb-12'
                        >
                            You've validated the design. Now it's time to bring it to life at scale. ORAGAN turns your blueprint into finished products, built reliably and ready for market.
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
                                src={service04Image.src}
                                alt="Full-scale Manufacturing"
                            />
                        </div>
                    </motion.div>

                    {/* What is Full-Scale Manufacturing Section */}
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
                                What is Full-Scale Manufacturing?
                            </h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Full-scale manufacturing is the final stage in the product journey—where your fully developed and optimized design goes into production. Whether you're planning a batch of 100 units or a run of 10,000+, this phase ensures your idea is no longer just a prototype but a fully realized, market-ready product.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                It's more than just assembly. It's the execution of every small detail—at scale.
                            </p>
                        </div>
                    </motion.section>

                    {/* Why It Matters Section */}
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
                            <h2 className="text-3xl font-bold text-white">Why It Matters</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Ensures consistent product quality across batches",
                                "Reduces unit cost through economies of scale",
                                "Opens doors to retail, eCommerce, and export markets",
                                "Enables real user adoption and commercial growth",
                                "Saves time and eliminates coordination headaches",
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
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mt-8">
                            <p className="text-gray-300 font-medium">
                            AT ORAGAN, WE HANDLE THE COMPLEXITIES—SO YOU CAN FOCUS ON SCALING YOUR BUSINESS.
                            </p>
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
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Do</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 text-lg mb-6">
                                We offer end-to-end manufacturing services for hardware products, seamlessly managing the entire process:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Component sourcing from verified vendors",
                                    "PCB fabrication and assembly",
                                    "Mechanical enclosure production (plastic, metal, etc.)",
                                    "Quality control & functional testing",
                                    "Packaging & labeling",
                                    "Logistics support and shipping coordination",
                                    "Batch certifications (if required)",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="text-blue-400 mr-2 mt-1">•</span>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mt-8">
                            <p className="text-gray-300 font-medium">
                                WHETHER YOUR PRODUCT IS IOT-BASED, SOLAR POWERED OR SENSOR ENABLED - WE BUILD IT WITH CARE.
                            </p>
                        </div>
                    </motion.section>

                    {/* Technologies + Industries */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl grid md:grid-cols-2 gap-12 mb-20"
                    >
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <FaIndustry className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Technologies We Use</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "SMT Assembly (Surface Mount Technology)",
                                        "CNC Machining & Laser Cutting",
                                        "Injection Molding & Vacuum Casting",
                                        "3D Printing (for bridge production or enclosures)",
                                        "Manual & Automated Testing Jigs",
                                        "Firmware pre-flashing and OTA-ready deployment",
                                        "Barcode & QR code tracking",
                                        "RoHS & CE compliance preparation (optional)"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="text-blue-400 mr-2 mt-1">•</span>
                                            <p className="text-gray-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <FaGlobe className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Industries We Serve</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ul className="space-y-3">
                                    {[
                                        "Consumer Tech",
                                        "Smart Agriculture",
                                        "Educational Kits",
                                        "Industrial IoT",
                                        "Clean Energy Devices",
                                        "Healthcare Tools"
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

                    {/* Why ORAGAN Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaShieldAlt className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Why ORAGAN?</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Local support with global-grade capabilities",
                                "Expert coordination from prototype to production",
                                "Access to trusted manufacturing partners in Sri Lanka and Asia",
                                "Proven experience delivering batch-ready IoT products",
                                "Transparent cost structure with progress updates",
                                "We don't just ship boxes—we ship success"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                                >
                                    <p className="text-gray-300"><span className="text-blue-400 mr-2 mt-1">•</span>{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Client Use Cases */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaQrcode className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Client Use Cases</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "A solar-powered monitoring device manufactured in 2,000-unit batches and deployed across Sri Lanka",
                                "A startup launched its first 500 smart controllers in local retail, fully manufactured and boxed by ORAGAN"
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
                                <FaBoxOpen className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                Let's Start Your Manufacturing
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8">
                            Your product is ready—and so are we. From pre-production samples to final delivery, ORAGAN is your trusted manufacturing partner.
                        </p>
                        
                        <motion.div 
                            className="mt-16 relative"
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold text-white mb-2">Get Manufacturing Consultation</h3>
                                <p className="text-gray-400 mb-8">
                                    Submit your product details for a free manufacturing assessment and quote.
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