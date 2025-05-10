"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import aboutPageImg2 from '../assets/aboutPageImg2.png';
import aboutPageImg3 from '../assets/aboutPageImg3.png';

export default function About() {
    const data = [
        { value: '07+', label: 'Years Of Trust' },
        { value: '120+', label: 'Successful Projects' },
        { value: '10+', label: 'IT Professionals' },
    ];

    return (
        <main className="relative bg-black overflow-hidden">
            {/* Glowing background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <video 
                        src={require('../../public/video.mp4')} 
                        autoPlay 
                        muted 
                        loop 
                        className="h-full w-full object-cover opacity-40"
                    />
                </div>
                
                <div className="relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="flex items-center justify-center text-xl md:text-2xl mb-4">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-white mr-3"></span>
                            <span className='text-gray-300 pr-1 font-medium tracking-wider'>PIONEERING</span>
                            <span className='text-white'>INNOVATION</span>
                        </h2>
                        
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight">
                            Your <span className="text-white">Technology</span> Partners
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            Cutting-edge hardware and software solutions tailored to your business needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Company Section */}
            <section className="relative py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight"
                        >
                            Beyond <span className="text-white">The Limits</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='text-lg md:text-lg text-gray-400 max-w-3xl mx-auto'
                        >
                            Founded in 2019 with a mission to revolutionize how technology transforms lives, businesses, and societies through exceptional solutions.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Collaboration",
                                description: "Uniting diverse backgrounds to foster creativity and success through shared ideas and innovative solutions.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Innovation",
                                description: "Delivering practical, user-friendly solutions that stay ahead of industry trends through continuous innovation.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Excellence",
                                description: "Exceeding client expectations through unwavering commitment to quality and customer satisfaction.",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-white/10 transition-all duration-500"
                            >
                                <div className="w-12 h-12 mb-6 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-white group-hover:text-blue-400 transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="relative py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="flex items-center text-xl md:text-xl mb-4">
                                <span className="w-5 h-0.5 bg-gradient-to-r from-white to-gray-300 mr-3"></span>
                                <span className='text-gray-300 pr-1 font-medium tracking-wider'>NOTABLE</span>
                                <span className='text-white'>ACHIEVEMENTS</span>
                            </h2>
                            
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight">
                                Experience <span className="text-white">Matters</span>
                            </h1>
                            
                            <p className="text-lg md:text-lg text-gray-400 mb-8">
                                Comprehensive services including IoT, PCB design, Embedded systems, 3D design, software development, machine learning, and industrial problem-solving.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 mt-8">
                                {data.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center min-w-[150px]"
                                    >
                                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white mb-2">
                                            {item.value}
                                        </div>
                                        <div className="text-gray-400 text-sm">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl">
                                <img 
                                    src={aboutPageImg3.src} 
                                    className="w-full h-full object-cover" 
                                    alt="Our Achievements" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}