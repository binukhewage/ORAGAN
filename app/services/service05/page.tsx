"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCheck, FaWrench, FaRocket, FaBullhorn, FaPalette, FaChartLine, FaNewspaper } from 'react-icons/fa';
import service05Image from '../../assets/s5.png';


const Service = () => {
    return (
        <main className="relative bg-black overflow-hidden pt-5">
            
            <section className="relative py-20 md:py-32 w-full flex items-center justify-center min-h-screen">
                <div className="relative z-10 text-white flex flex-col items-center justify-center px-6 md:px-4 max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl w-full text-center mb-12 md:mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight">
                            <span className="text-white">Marketing Launch Support</span>
                        </h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-xl md:text-2xl text-gray-400 mb-12'
                        >
                            A great product deserves an even greater launch. At ORAGAN, we don't just build it — we help you introduce it to the world with clarity, confidence, and creativity.
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
                                src={service05Image.src}
                                alt="Marketing & Launch Support"
                            />
                        </div>
                    </motion.div>

                    {/* What is Marketing & Launch Support Section */}
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
                                What is Marketing & Launch Support?
                            </h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Marketing & Launch Support bridges the gap between building your product and getting it into the hands of real users. It's the strategic and creative phase that ensures your product isn't just manufactured, but also seen, understood, and loved by your target audience.
                            </p>
                            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                                From crafting your message to creating your launch campaign, we stand by you — as your brand partner.
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
                                "Turns your product into a compelling brand",
                                "Helps you reach the right customers",
                                "Builds trust and credibility at launch",
                                "Maximizes return on your R&D and manufacturing investment",
                                "Enables you to enter markets confidently",
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
                            THIS PHASE IS WHERE VISION MEETS VISIBILITY. 
                            </p>
                        </div>
                    </motion.section>

                    {/* What We Offer Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 sm:mr-6">
                                <FaBullhorn className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Offer</h2>
                        </div>
                        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 mb-8">
                            <p className="text-gray-300 text-lg mb-6">
                                Our team works with you to plan, position, and promote your product across various platforms:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Brand Identity Creation (Logo, Brand Colors, Typography)",
                                    "Product Naming & Positioning Strategy",
                                    "Product Photography & Explainer Videos",
                                    "Website & Landing Page Creation",
                                    "Social Media Launch Campaigns",
                                    "Pitch Decks & Brochures for Investors or Resellers",
                                    "Launch Event Planning & PR Guidance",
                                    "Packaging & Unboxing Experience Design"
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
                                WHETHER YOU'RE LAUNCHING ONLINE, IN STORES, OR AT AN EXPO—WE HELP YOU MAKE A SPLASH.
                            </p>
                        </div>
                    </motion.section>

                    {/* Tools + Who It's For */}
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
                                    <FaWrench className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Tools & Channels We Use</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Canva & Adobe Suite for creative assets",
                                        "WordPress & Webflow for websites",
                                        "Meta & Google Ads for targeted campaigns",
                                        "Mailchimp & WhatsApp for customer engagement",
                                        "Event support (pop-up booths, demos, digital signages)",
                                        "SEO & content optimization for organic reach"
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
                                    <FaRocket className="text-white text-sm" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Who It's For</h2>
                            </div>
                            <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
                                <ul className="space-y-3">
                                    {[
                                        "Innovators preparing for a product launch",
                                        "Startups seeking traction and early adopters",
                                        "Businesses entering new verticals or rebranding",
                                        "Exporters looking to attract global buyers",
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
                    

                    {/* ORAGAN Advantage Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaPalette className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">ORAGAN Advantage</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Deep product knowledge from idea to launch",
                                "In-house creatives who understand tech and storytelling",
                                "Marketing grounded in your product's real-world use cases",
                                "Access to a launch playbook tailored for innovators",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                                >
                                    <p className="text-gray-300"><span className="text-blue-400 mr-3 mt-1">•</span>{item}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 mt-8">
                            <p className="text-gray-300 font-medium">
                                WE DON'T JUST PROMOTE — WE ELEVATE.  
                            </p>
                        </div>
                    </motion.section>

                    {/* Real Impact Examples */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-4xl mb-20"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaChartLine className="text-white text-sm" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Real Impact Examples</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Helped a clean-energy device get covered in 3 local tech blogs and onboard 150 early users in the first month",
                                "Designed branding and packaging for a health-monitoring device now available in 12 pharmacies"
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
                                <FaNewspaper className="text-white text-base sm:text-lg" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                Ready to Launch?
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg mb-8">
                            Let's tell your product's story the right way.
                        </p>
                        
                        <motion.div 
                            className="mt-16 relative"
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold text-white mb-2">Get Launch Strategy Consultation</h3>
                                <p className="text-gray-400 mb-8">
                                    Submit your product details for a free marketing assessment and launch plan.
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

                                    {/* Product Details */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">Product Details</label>
                                        <textarea 
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 min-h-[120px]"
                                            placeholder="Describe your product and marketing needs..."
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
                                        Request Launch Plan
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