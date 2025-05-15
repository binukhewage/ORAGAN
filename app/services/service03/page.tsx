"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCheck, FaWrench, FaLightbulb, FaBullseye, FaRocket, FaIndustry, FaBoxes } from 'react-icons/fa';
import service03Image from '../../assets/s3.png';

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
                            <span className="text-white"> Design for Manufacturing</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-xl md:text-2xl text-gray-400 mb-12'
                        >
                            You've built a working prototype. Now it's time to make it scalable, cost-effective, and ready for the real world.
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
                                src={service03Image.src}
                                alt="Design for Manufacturing (DFM)"
                            />
                        </div>
                    </motion.div>

                    {/* What is DFM Section */}
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
                                What is Design for Manufacturing (DFM)?
                            </h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Design for Manufacturing (DFM) is the critical engineering phase where your prototype is optimized for efficient, large-scale production. It ensures that your product can be manufactured repeatedly—with high quality, low cost, and minimal errors.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                Whether you're planning to build 100 units or 100,000 DFM is the foundation for smooth, scalable production.
                            </p>
                        </div>
                    </motion.section>

                    {/* Why DFM is Crucial Section */}
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
                            <h2 className="text-3xl font-bold text-white">Why DFM is Crucial</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Reduces production cost by optimizing materials and components",
                                "Simplifies complex assemblies for faster manufacturing",
                                "Prevents production delays due to overlooked design flaws",
                                "Improves product reliability and consistency",
                                "Ensures vendor readiness and compatibility with manufacturing standards",
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
                            SKIPPING DFM CAN LEAD TO EXPENSIVE MISTAKES. DOING IT RIGHT BRINGS PEACE OF MIND AND A SUCCESSFUL PRODUCT LAUNCH.
                            </p>
                        </div>
                    </motion.section>

                    {/* What We Do in DFM Section */}
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
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Do in DFM at ORAGAN</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 text-lg mb-6">
                                Our team reviews and enhances your prototype from the lens of real-world manufacturing. This involves:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Material selection & cost optimization",
                                    "Part simplification for ease of mass production",
                                    "Enclosure redesign for tooling & molding",
                                    "Tolerance adjustments and fit analysis",
                                    "PCB panelization and batch testing strategy",
                                    "Supply chain & vendor sourcing consultation",
                                    "Assembly workflow planning",
                                    "Manufacturing test points & QA process design"
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
                                WE MAKE SURE YOUR PRODUCT IS NOT JUST BRILLIANT—BUT BUILDABLE.
                            </p>
                        </div>
                    </motion.section>

                    {/* Deliverables Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaBoxes className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Deliverables You'll Receive</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Optimized 3D design files (SolidWorks, Fusion 360, STEP)",
                                "Finalized PCB files with DFM checklist",
                                "Detailed Bill of Materials (BOM) with sourcing options",
                                "Assembly instructions for manufacturers",
                                "QA documentation and test guides",
                                "A full Manufacturing Readiness Report"
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

                    {/* Industries + Why Choose Us */}
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
                                    <FaIndustry className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Industries We Serve</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ul className="space-y-3">
                                    {[
                                        "Consumer Electronics",
                                        "Smart Home / IoT Devices",
                                        "Industrial Tools & Controllers",
                                        "Agriculture Tech",
                                        "Healthcare Monitoring Devices",
                                        "Educational & EdTech Kits"
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
                                    <FaRocket className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Why Choose ORAGAN for DFM?</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <p className="text-gray-300 mb-4">
                                    <span className='font-bold'>WE DON't JUST DESIGN. WE BUILD</span><br/> <br/>
                                    Our hands-on experience in prototyping, electronics, 3D printing, and manufacturing gives us an unmatched edge in understanding real-world constraints.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Proven track record of successful product launches",
                                        "Deep expertise in cost optimization"
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
                                <FaLightbulb className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Client Use Cases</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "A startup optimized their smart wearable to reduce manufacturing cost by 40% with our DFM redesign",
                                "An agri-tech inventor scaled their field-ready sensor system using our BOM streamlining and local vendor matching"
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
                                <FaIndustry className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                Ready to Prepare for Manufacturing?
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8">
                            If you're serious about launching your product, DFM is your bridge from "almost there" to "ready to scale." Let's get your product ready for the real world—cost-effective, production-ready, and set for success.
                        </p>
                        
                        <motion.div 
                            className="mt-16 relative"
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold text-white mb-2">Get Manufacturing Consultation</h3>
                                <p className="text-gray-400 mb-8">
                                    Submit your prototype details for a free DFM assessment from our production specialists.
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
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Product Details</label>
                                        <textarea 
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 min-h-[120px]"
                                            placeholder="Describe your product and current stage..."
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
                                        Request DFM Assessment
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