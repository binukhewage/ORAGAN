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
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>

        <div className="relative w-full h-full mx-auto">
          <div className="overflow-hidden relative w-full h-full grid grid-cols-1 md:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 right-0 w-full h-full transition-transform duration-500 flex ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                  }`}
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <div className="flex flex-col items-start justify-center p-4 md:pl-[10rem] w-full md:w-1/2 h-full">
                  <h2 className="text-left" dangerouslySetInnerHTML={{ __html: image.text }} />
                  <p className="text-left" dangerouslySetInnerHTML={{ __html: image.subtext }} />
                  <Button href="#serviceSection" variant="alternative" className="mt-4  md:mt-8">
                    Learn More
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 h-full pr-[2rem] md:pr-[10rem]">
                  <Image src={image.src} alt={image.alt} className="w-[40] h-[40] md:w-30 md:h-30 p-5" />
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30">
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30">
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      <br></br>
      {/* Innovations section */}
      <section id='InnovationsSection' className="w-full bg-gray-100 items-center justify-center p-[50px] space-y-5" data-aos="fade-up">
        <h2 className="at-border-head flex items-center text-xl md:text-2xl">
          <span className="at-border relative mr-2.5 inline-block"></span>
          <span className='text-[#0A1A2F] pr-1'>FEATURED</span> PROUDUCTS
        </h2>
        <h1 className="text-2xl md:text-6xl pb-3 pt-1 font-bold items-center">Products</h1>
        <p className='mb-2 text-sm md:text-base text-[#666766]'>
          Explore our exclusive selection of products tailored to meet your needs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
            imageSrc={Hardware.src}
            title="XION LORA CORE"
            description="Discover our premium hardware solutions designed to enhance your productivity."
            link="/projects/hardware/project01"
          />
          <Card
            imageSrc={software.src}
            title="IMSP"
            description="Explore our software solutions that are tailored to meet your specific needs."
            link="/projects/software/project01"
          />
        </div>
      </section>

      <br></br>
      {/* Services section */}
      <section id='projectSection' className="w-full items-center justify-center p-[50px] space-y-5 delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">
        <h2 className="at-border-head flex items-center text-xl md:text-2xl">
          <span className="at-border relative mr-2.5 inline-block"></span>
          <span className='text-[#0A1A2F] pr-1'>FEATURED  </span>SERVICES
        </h2>
        <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold items-center">Idea into Products</h1>
        <p className='mb-5 text-sm md:text-base text-[#666766]'>
          Our services provide a comprehensive pathway for turning an innovative idea into a real-world, manufacturable product, covering every aspect from conceptualization to market entry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newServices.map((newservice, index) => (
            <NewServiceCard
              key={index}
              number={newservice.number}
              title={newservice.title}
              link={newservice.link}
              icon={newservice.icon} />
          ))}
        </div>
      </section>

      {/* Community section */}
      <section id='communitySection' className="h-screen w-full flex items-center justify-center">
        <div className="relative w-full h-full mx-auto">
          <div className="grid grid-cols-1 gap-2 m-3">
            <div>
              <h4 className='text-xl mb-2 '>Free Guide Book on Converting Ideas into Products</h4>
              <p className='text-base text-[#666766] '>We provide a free, comprehensive guide for customers, which walks them through the entire process of turning an idea into a real product. The document covers key stages, from initial concept development to prototyping, manufacturing, and even filing for patents. It serves as an educational tool, helping customers understand the journey ahead and the steps required to bring their vision to life</p>
              <div className="flex items-center mt-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0  rounded-md flex items-center justify-center">
                    <img src={pdfimage.src} className="w-[50px] h-[60px] md:w-[5500px] md:h-[70px]" />
                    <br></br>
                   </div>
                </div>
                <a href="./ORAGAN Innovation Playbook_ Turning Your Idea into a Market-Ready Product"
                  target="_blank"
                  className="ml-4 bg-[#0A1A2F] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#142a47]">
                  Download
                </a>
              </div>
            </div>

            <div>
              <h4 className='text-xl mb-2'>Free Idea Review for Customers</h4>
              <p className='text-base text-[#666766] '>ORAGAN offers a free consultation to review and assess customer ideas. During this session, our team of experts will provide valuable feedback on the feasibility, market potential, and next steps for converting the idea into a tangible product. This service is designed to give innovators the confidence to move forward with their projects, knowing that they have expert support right from the start.</p>
              <br></br>

              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                  <input type="text" id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                  <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your Idea</label>
                  <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
                </div>
                <button type="submit" className="text-white bg-[#0A1A2F]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id='aboutusSection' className="h-screen w-full flex items-center justify-center">
        <div className="relative w-full h-full mx-auto">
          <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2">
            <div className='flex items-center justify-center'>
              <img src={aboutpageImg.src} className="w-[300px] h-[400px] md:w-[500px] md:h-[650px]" />
            </div>
            <div className="flex flex-col justify-center p-4 md:p-0">
              <div>
                <h2 className="at-border-head flex items-center text-xl md:text-2xl">
                  <span className="at-border relative mr-2.5 inline-block"></span>
                  <span className='text-[#0A1A2F] pr-1'>WHO</span> WE ARE
                </h2>
                <h1 className="text-3xl md:text-6xl pb-3 pt-3 font-bold items-center">
                  Founding <span className='text-[#0A1A2F] pr-1'>Inspiration</span>
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
