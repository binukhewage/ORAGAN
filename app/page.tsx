"use client";
import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import mainpage01 from './assets/mainpage01.gif'
import mainpage02 from './assets/mainpage02.gif'
import mainpage03 from './assets/mainpage03.gif'
import mainpage04 from './assets/mainpage04.gif'
import aboutpageImg from './assets/aboutpageImg.png';
import software from './assets/software.png'
import Hardware from './assets/hardware.png'
import './assets/css/style.css'
import ServiceCard from './components/ServiceCard';
import Button from './components/Button';
import ReadMoreButton from './components/readMore';
import Card from './components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faLightbulb, faCogs, faMicrochip, faCube, faPrint, faLaptopCode, faBrain, faBullhorn, faBalanceScale, faIndustry, faProjectDiagram, faDraftingCompass, faVial, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import NewProductCard from './components/newProjectCard';
import NewServiceCard from './components/newServices';
import Link from 'next/link';
import pdfimage from './assets/pdfimage.png'


export default function Home() {

  const images = [
    {
      src: mainpage01,
      alt: 'Home Image 1',
      text: '<div class="m-auto text-left"><span class="font-black text-4xl md:text-6xl leading-tight">Transforming your idea <br></span>  <span class="text-6xl leading-tight text-[#0A1A2F]  "><b> into market leading products</b></span></div>',
      subtext: '<div class="mb-3 text-left"><span class="font-gray-200 text-xs md:text-sm">Expertly Guiding Every Step of Product Development, from Conceptualization to Market Launch, with Tailored Solutions for Maximum Impact and Success.</span></div>'
    },
    { src: mainpage02, alt: 'Home Image 2', text: '<div class="m-auto   text-left"><span class="font-black text-6xl leading-tight  ">Transforming Business Operations <br></span>  <span class="text-6xl leading-tight text-[#0A1A2F]  "><b>Across Industries</b></span></div>', subtext: '<div class="mb-3  text-left"><span class="font-gray-200 text-sm ">A Versatile and Customizable Point of Sale System Tailored</span></div>' },
    { src: mainpage03, alt: 'Home Image 3', text: '<div class="m-auto   text-left"><span class="font-black text-6xl leading-tight  ">Innovative Approaches for <br></span>  <span class="text-6xl leading-tight text-[#0A1A2F]  "><b>Modern Challenges</b></span></div>', subtext: '<div class="mb-3  text-left"><span class="font-gray-200 text-sm ">Problem Solving, Industry Challenges, Process Optimization, Solutions Development, Strategic Planning, Modernization, Innovation, Risk Mitigation, Process Improvement, Operational Efficiency</span></div>' },
    { src: mainpage04, alt: 'Home Image 4', text: '<div class="m-auto   text-left"><span class="font-black text-6xl leading-tight  "> Transforming Visions into <br></span>  <span class="text-6xl leading-tight text-[#0A1A2F]  "><b> Market-Leading Products </b></span></div>', subtext: '<div class="mb-3  text-left"><span class="font-gray-200 text-sm ">Expertly Guiding Every Step of Product Development, from Conceptualization to Market Launch, with Tailored Solutions for Maximum Impact and Success</span></div>' },
  ];
  const newServices = [
    {
      number: '01',
      title: 'Proof of Concept (POC) Development',
      link: '/services/service01',
      icon: <FontAwesomeIcon icon={faVial} className="text-white text-3xl" />
    },
    {
      number: '02',
      title: 'Prototype Development',
      link: '/services/service02',
      icon: <FontAwesomeIcon icon={faDraftingCompass} className="text-white text-3xl" />
    },
    {
      number: '03',
      title: 'Design for Manufacturing (DFM)',
      link: '/services/service03',
      icon: <FontAwesomeIcon icon={faProjectDiagram} className="text-white text-3xl" />
    },
    {
      number: '04',
      title: 'Full-scale Manufacturing',
      link: '/services/service04',
      icon: <FontAwesomeIcon icon={faIndustry} className="text-white text-3xl" />
    },
    {
      number: '05',
      title: 'Marketing & Launch Support',
      link: '/services/service05',
      icon: <FontAwesomeIcon icon={faBullhorn} className="text-white text-3xl" />
    },
    {
      number: '06',
      title: 'Patent Application Guidance',
      link: '/services/service06',
      icon: <FontAwesomeIcon icon={faBalanceScale} className="text-white text-3xl" />
    },
  ];

  const services = [
    {
      number: '01',
      title: 'Proof of Concept (POC) Development',
      description: `Our industrial problem-solving services address complex challenges in various industries, providing innovative solutions for efficiency, cost reduction, and productivity improvement, including root cause analysis and customized solutions.`,
      link: '/services/service01',
      icon: <FontAwesomeIcon icon={faTools} className="text-white" />
    },
    {
      number: '02',
      title: 'From Idea to Market',
      description: `Our services cover product development from planning to launching, ensuring market demands and user needs are met, reducing development time and costs, and increasing product success rates.`,
      link: '/services/service02',
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-white" />
    },
    {
      number: '03',
      title: 'IoT Solutions',
      description: `Our IoT solutions enhance operational efficiency, data-driven decision making, cost savings, and connectivity through advanced technology integration, data collection, and management in various sectors.`,
      link: '/services/service03',
      icon: <FontAwesomeIcon icon={faCogs} className="text-white" />
    },
    {
      number: '04',
      title: 'Embedded Systems Development',
      description: `Our embedded systems development services include custom design, firmware development, hardware-software integration, real-time operating systems, and rigorous testing, enhancing performance, reliability, scalability, and reduced time-to-market for various applications.`,
      link: '/services/service04',
      icon: <FontAwesomeIcon icon={faMicrochip} className="text-white" />
    },
    {
      number: '05',
      title: '3D Designing and Printing',
      description: `Our 3D designing and printing services utilize advanced software, rapid prototyping, high-resolution printing, diverse materials, and post-processing for accurate, detailed models and prototypes, accelerating product development and offering cost-effective solutions.`,
      link: '/services/service05',
      icon: <FontAwesomeIcon icon={faCube} className="text-white" />
    },
    {
      number: '06',
      title: 'PCB Designing and Fabrication',
      description: `Our PCB designing and fabrication services provide custom, multi-layer PCBs for various applications, including schematic design, layout optimization, manufacturing design, rapid prototyping, functional testing, and design validation.`,
      link: '/services/service06',
      icon: <FontAwesomeIcon icon={faPrint} className="text-white" />
    },
    {
      number: '07',
      title: 'Software Solutions',
      description: `Our software solutions cover the entire development lifecycle, specializing in web, hosting, dashboard, POS system, app, and firmware development, offering operational efficiency, enhanced user experience, scalable solutions, comprehensive support, and data-driven decisions.`,
      link: '/services/service07',
      icon: <FontAwesomeIcon icon={faLaptopCode} className="text-white" />
    },
    {
      number: '08',
      title: 'Machine Learning Developments',
      description: `We provide advanced machine learning services, utilizing AI for predictive analytics, natural language processing, computer vision, data mining, and custom models, enhancing accuracy, efficiency, and customer experience.`,
      link: '/services/service08',
      icon: <FontAwesomeIcon icon={faBrain} className="text-white" />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const swiper = new Swiper('.centered-slide-carousel', {
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: '.centered-slide-carousel .swiper-pagination',
        clickable: true,  // Correct way to set clickable pagination
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
  return (
      <main>
        {/* home section */}
        <section id='homeSection' className="h-screen w-full flex items-center justify-center">
          <div>Hero Video Animation</div>
        </section>

        <br></br>
        {/* Innovations section */}
        <section 
    id='InnovationsSection' 
    className="w-full bg-black items-center justify-center py-16 px-6 md:py-20 md:px-12 space-y-8"
    data-aos="fade-up"
  >
    

    {/* Header section */}
    <div className="relative max-w-7xl mx-auto text-center">
      <h2 className="flex items-center justify-center text-xl md:text-2xl mb-4">
        <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mr-3"></span>
        <span className='text-cyan-300 pr-1 font-medium tracking-wider'>FEATURED</span>
        <span className='text-white'>PRODUCTS</span>
      </h2>
      
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
        Products
      </h1>
      
      <p className='text-lg md:text-xl text-blue-200 max-w-3xl mx-auto'>
        Explore our exclusive selection of cutting-edge solutions tailored to meet your needs
      </p>
    </div>

    {/* Products grid */}
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <Card
        imageSrc={Hardware.src}
        title="XION LORA CORE"
        description="Discover our premium hardware solutions designed to enhance your productivity."
        link="/projects/hardware/project01"
        glowColor="from-cyan-500 to-blue-600"
      />
      <Card
        imageSrc={software.src}
        title="IMSP"
        description="Explore our software solutions that are tailored to meet your specific needs."
        link="/projects/software/project01"
        glowColor="from-purple-500 to-indigo-600"
      />
    </div>
  </section>


      {/* Services section */}
<section 
  id='projectSection' 
  className="w-full bg-black items-center justify-center py-16 px-6 md:py-20 md:px-12 space-y-8 delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
  data-taos-offset="300"
>
  {/* Decorative background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-800 rounded-full filter blur-3xl opacity-20"></div>
  </div>

  {/* Header section */}
  <div className="relative max-w-7xl mx-auto text-center">
    <h2 className="flex items-center justify-center text-xl md:text-2xl mb-4">
      <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mr-3"></span>
      <span className='text-cyan-300 pr-1 font-medium tracking-wider'>FEATURED</span>
      <span className='text-white'>SERVICES</span>
    </h2>
    
    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
      Idea into Products
    </h1>
    
    <p className='text-lg md:text-xl text-blue-200 max-w-3xl mx-auto'>
      Our services provide a comprehensive pathway for turning an innovative idea into a real-world, manufacturable product, covering every aspect from conceptualization to market entry.
    </p>
  </div>

  {/* Services grid */}
  <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
    {newServices.map((newservice, index) => (
      <NewServiceCard
        key={index}
        number={newservice.number}
        title={newservice.title}
        link={newservice.link}
        icon={newservice.icon}
        className="group hover:scale-[1.03] transition-transform duration-300"
        glowColor={index % 3 === 0 ? "from-cyan-500 to-blue-600" : 
                   index % 3 === 1 ? "from-purple-500 to-indigo-600" : 
                   "from-blue-500 to-cyan-500"}
      />
    ))}
  </div>
</section>

      {/* Community section - Ultra Modern Design */}
  <section 
    id='communitySection' 
    className="min-h-screen w-full flex items-center justify-center bg-black py-20 px-6 md:px-12 relative overflow-hidden"
  >
  <div className="relative max-w-4xl w-full mx-auto space-y-16 z-10">
    {/* Section Header */}
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
        Innovation Resources
      </h2>
      <p className="text-xl text-blue-200 max-w-2xl mx-auto">
        Fuel your creative journey with our premium tools and expert guidance
      </p>
    </div>

    {/* Interactive Card Stack */}
    <div className="relative">
      {/* Guide Card - 3D Tilt Effect */}
      <div 
        className="group relative bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
        data-tilt
        data-tilt-max="8"
        data-tilt-speed="400"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl flex items-center justify-center border border-cyan-800/50 shadow-inner">
              <img 
                src={pdfimage.src} 
                className="w-16 h-20 object-contain drop-shadow-lg" 
                alt="PDF Guide" 
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-cyan-600 rounded-full text-xs font-bold text-white shadow-lg">
              FREE
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Innovation Playbook</h3>
            <p className="text-blue-200 mb-6">
              Master the complete journey from concept to market with our comprehensive guide covering prototyping, manufacturing, and intellectual property protection.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="./ORAGAN Innovation Playbook_ Turning Your Idea into a Market-Ready Product"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Guide
              </a>
              <button className="px-6 py-3 bg-gray-700/50 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Idea Review Form - Futuristic Panel */}
      <div className="mt-16 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          
          <h3 className="text-2xl font-bold text-white mb-2">Get Expert Feedback</h3>
          <p className="text-blue-200 mb-8 max-w-lg">
            Submit your idea for a free professional review. Our innovation experts will provide actionable insights within 48 hours.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-2">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Describe Your Idea</label>
              <div className="relative">
                <div className="absolute top-3 left-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <textarea 
                  rows={4} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Describe your innovative idea in detail..."
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 group"
            >
              <span>Submit for Review</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* about section */}
      <section id='aboutusSection' className="h-screen w-full flex items-center justify-center bg-black">
        <div className="relative w-full h-full mx-auto">
          <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2">
            <div className='flex items-center justify-center'>
              <img src={aboutpageImg.src} className="w-[300px] h-[400px] md:w-[500px] md:h-[650px]" />
            </div>
            <div className="flex flex-col justify-center p-4 md:p-0">
              <div>
                <h2 className="at-border-head flex items-center text-xl md:text-2xl text-white">
                  <span className="at-border relative mr-2.5 inline-block"></span>
                  <span className='text-white pr-1'>WHO</span> WE ARE
                </h2>
                <h1 className="text-3xl md:text-6xl pb-3 pt-3 font-bold items-center text-white">
                  Founding <span className='text-white pr-1'>Inspiration</span>
                </h1>
                <p className='mb-5 text-sm md:text-lg text-[#666766]'>
                  Established in 2019, our company aims to revolutionize the technology industry by
                  introducing innovative, practical, and user-friendly products. We believe in technology's power to
                  transform lives, businesses, and societies, and our products reflect our commitment to quality, innovation,
                  and customer satisfaction. We constantly evolve and push boundaries in the fast-paced technology world.
                </p>
                <ReadMoreButton href="/aboutus">Read More</ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[-20px] md:top-[-40px] w-[200px] h-[175px] md:w-[400px] md:h-[350px] bg-no-repeat bg-contain" style={{ backgroundImage: "url('./assets/Group 2.png)" }}></div>
      </section>
    </main >
  );
}
