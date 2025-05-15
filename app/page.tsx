"use client";
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import aboutpageImg from './assets/aboutimg1.png';
import software from './assets/software.png';
import Hardware from './assets/hardware.png';
import './assets/css/style.css';
import Card from './components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faLightbulb, faCogs, faMicrochip, faCube, faPrint, faLaptopCode, faBrain, faBullhorn, faBalanceScale, faIndustry, faProjectDiagram, faDraftingCompass, faVial, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import NewServiceCard from './components/newServices';
import pdfimage from './assets/pdfimage.png';
import Hero from './components/Hero';
import emailjs from '@emailjs/browser';


const Spotlight = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px] animate-pulse delay-300"></div>
      <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-[120px] animate-pulse delay-700"></div>
    </div>
  );
};


const GlowingBorder = () => (
  <div className="relative h-px w-full my-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_3s_linear_infinite]"></div>
  </div>
);

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const newServices = [
    {
      number: '01',
      title: 'Proof of Concept (POC)',
      link: '/services/service01',
      icon: <FontAwesomeIcon icon={faVial} className="text-white text-3xl" />,
      description: "We create a basic test version of your idea to check if it works in real life."
    },
    {
      number: '02',
      title: 'Prototype Development',
      link: '/services/service02',
      icon: <FontAwesomeIcon icon={faDraftingCompass} className="text-white text-3xl" />,
      description: "We build a real working model using electronics, mechanics, software or all three."
    },
    {
      number: '03',
      title: 'Design for Manufacturing (DFM)',
      link: '/services/service03',
      icon: <FontAwesomeIcon icon={faProjectDiagram} className="text-white text-3xl" />,
      description: "We redesign your prototype so it's easy and cost-effective to manufacture at scale."
    },
    {
      number: '04',
      title: 'Full-scale Manufacturing',
      link: '/services/service04',
      icon: <FontAwesomeIcon icon={faIndustry} className="text-white text-3xl" />,
      description: "We handle the production of your product - from 10 pieces to 10 000+."
    },
    {
      number: '05',
      title: 'Marketing & Launch Support',
      link: '/services/service05',
      icon: <FontAwesomeIcon icon={faBullhorn} className="text-white text-3xl" />,
      description: "We help you take your product to market with the right look and tools."
    },
    {
      number: '06',
      title: 'Patent Application Guidance',
      link: '/services/service06',
      icon: <FontAwesomeIcon icon={faBalanceScale} className="text-white text-3xl" />,
      description: "We help you understand how to secure legal protection for your product."
    },
  ];
  
  const data = [
    { value: '07+', label: 'Years Of Trust' },
    { value: '120+', label: 'Successful Projects' },
    { value: '10+', label: 'IT Professionals' },
];

  useEffect(() => {
    const swiper = new Swiper('.centered-slide-carousel', {
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: '.centered-slide-carousel .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }, []);

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
    <main className="relative bg-black overflow-hidden">
      {/* Hero section */}
      <div className='relative z-10'>
        <Hero />
      </div>

      {/* Products section */}
      <section 
        id='InnovationsSection' 
        className="w-full relative items-center justify-center py-16 px-6 md:py-20 md:px-12 space-y-8 z-10"
      >
        <Spotlight className="-top-1/4" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto text-center"
        >
          <h2 className="flex items-center justify-center text-xl md:text-xl mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-white to-gray-300 mr-3"></span>
            <span className='text-gray-300 pr-1 font-medium tracking-wider'>FEATURED</span>
            <span className='text-white'>INNOVATIONS</span>
          </h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight"
          >
            Our <span className="text-white">Products</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-lg md:text-lg text-gray-400 max-w-3xl mx-auto'
          >
            Discover our exclusive selection of next-generation products engineered to revolutionize your industry
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <Card
            imageSrc={Hardware.src}
            title="XION LORA CORE"
            description="Advanced hardware platform with ultra-low power consumption and long-range connectivity"
            link="/projects/hardware/project01"
            glowColor="from-gray-300/20 to-white/20"  
            borderColor="border-gray-300/30"
            badgeText="HARDWARE"
            badgeColor="bg-gray-300 text-black"
          />
          <Card
            imageSrc={software.src}
            title="IMSP"
            description="Intelligent management system with predictive analytics and real-time monitoring"
            link="/projects/software/project01"
            glowColor="from-gray-400/20 to-white/20"  
            borderColor="border-gray-400/30"
            badgeText="SOFTWARE"
            badgeColor="bg-gray-400 text-black"
          />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
      >
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          href="/Products"
          className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent border border-white/30 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          Explore Products
          {/* Animated Arrow */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </motion.svg>
        </motion.a>
      </motion.div>

      <GlowingBorder />

      {/* Services section */}
      <section 
        id='projectSection' 
        className="w-full relative items-center justify-center py-16 px-6 md:py-16 md:px-12 space-y-8 z-10"
      >
        <Spotlight className="-top-1/3" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto text-center"
        >
          <h2 className="flex items-center justify-center text-xl md:text-xl mb-4">
            <span className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-white mr-3"></span>
            <span className='text-gray-300 pr-1 font-medium tracking-wider'>END-TO-END</span>
            <span className='text-white'>SERVICES</span>
          </h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight"
          >
            Idea <span className="text-white">into</span> Product
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'
          >
            Our comprehensive service pipeline transforms your vision into a tangible, market-ready product
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {newServices.map((newservice, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NewServiceCard
                number={newservice.number}
                title={newservice.title}
                description={newservice.description}
                link={newservice.link}
                icon={newservice.icon}
                className="hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-300"
                glowColor="from-white/10 to-white/20"
                borderColor="border-gray-700/50 hover:border-primary/30"
                textColor="text-white"
                bgColor="bg-gray-900/50 hover:bg-gray-800/50"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="/idea-into-product"
                className="w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent border border-white/30 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Explore Our Services
                {/* Animated Arrow */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </motion.svg>
              </motion.a>
            </motion.div>

      </section>

    <GlowingBorder />



      {/* About section */}
      <section id='aboutusSection' className="min-h-screen w-full flex items-center justify-center relative overflow-hidden z-10">
        <Spotlight className="-top-1/4" />
        
        <div className="relative w-full h-full mx-auto">
          <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='flex items-center justify-center relative'
            >
              <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[650px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-3xl filter blur-xl"></div>
                <img 
                  src={aboutpageImg.src} 
                  className="relative w-full h-full object-cover rounded-2xl border border-gray-700/50 shadow-2xl" 
                  alt="About us" 
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center p-4 md:p-0"
            >
              <div className="relative">
                <h2 className="flex items-center text-xl md:text-xl text-white mb-4">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-white mr-3"></span>
                  <span className='text-white'>OUR STORY</span>
                </h2>
                
                <motion.h1 
                  className="text-3xl md:text-5xl pb-12 pt-3 font-bold items-center bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 leading-tight"
                >
                  About <span className="text-white">ORAGAN</span>
                </motion.h1>
                
                <div className="space-y-6 text-gray-300 mb-8 max-w-[550px]">
                  <motion.p className="text-lg">
                    Founded in 2019, ORAGAN transforms visionary concepts into market-ready products through our complete innovation ecosystem.
                  </motion.p>
                  <motion.p className="text-lg">
                    We combine engineering precision with strategic insight to help startups and businesses navigate from ideation to successful launch.
                  </motion.p>
                  <motion.p className="text-lg">
                    Our full-stack support includes R&D, product design, prototyping, manufacturing, and go-to-market strategy - ensuring seamless execution at every stage.
                  </motion.p>
                </div>

                {/* Stats Section */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 my-6 md:my-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {data.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-lg md:rounded-xl p-3 md:p-4 text-center"
                    >
                      <motion.p 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.value}
                      </motion.p>
                      <p className="text-gray-300 mt-1 md:mt-2 text-xs sm:text-sm md:text-base">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      



      {/* Resources section */}
      <section 
        id='communitySection' 
        className="min-h-screen w-full flex items-center justify-center relative py-20 px-6 md:px-12 overflow-hidden z-10"
      >
        <Spotlight className="-top-1/4" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl w-full mx-auto space-y-16 z-10"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="flex items-center justify-center text-xl md:text-xl mb-4">
              <span className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-white mr-3"></span>
              <span className='text-gray-300 pr-1 font-medium tracking-wider'>INNOVATION</span>
              <span className='text-white'>RESOURCES</span>
            </h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight"
            >
              Fuel Your <span className="text-white">Innovation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-lg md:text-lg text-gray-400 max-w-3xl mx-auto'
            >
              Accelerate your journey with our premium tools and expert guidance
            </motion.p>
          </motion.div>

          {/* Interactive Card Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Guide Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-white/10 to-gray-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 shadow-inner">
                    <img 
                      src={pdfimage.src} 
                      className="w-16 h-20 object-contain drop-shadow-lg" 
                      alt="PDF Guide" 
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-white text-black rounded-full text-xs font-bold shadow-lg">
                    FREE
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Innovation Playbook</h3>
                  <p className="text-gray-400 mb-6">
                    Master the complete journey from concept to market with our comprehensive guide.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      href="/ORAGAN Innovation Playbook.pdf"
                      download="ORAGAN Innovation-Playbook.pdf"
                      target="_blank"
                      className="px-6 py-3.5 bg-white text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-white/30 flex items-center gap-2"
                    >
                      Download Guide
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            
            {/* Idea Review Form */}
            <motion.div className="mt-16 relative">
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-xl overflow-hidden">
                <h3 className="text-2xl font-semibold text-white mb-2">Get Expert Feedback</h3>
                <p className="text-gray-400 mb-8 max-w-lg">
                  Submit your idea for a free professional review from our innovation specialists.
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
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

                  {/* Submit Button */}
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
          </motion.div>
        </motion.div>
      </section>

      <GlowingBorder />

      
    </main>
  );
}