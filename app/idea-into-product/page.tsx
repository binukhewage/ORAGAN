"use client"
import React from 'react';
import { motion } from 'framer-motion';
import NewServiceCard from '../components/newServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faBalanceScale, faIndustry, faProjectDiagram, faDraftingCompass, faVial } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { 
  faLightbulb, 
  faRocket, 
  faFlask,
  faUserGraduate 
} from '@fortawesome/free-solid-svg-icons';

const NewProducts = () => {
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

  const coreServices = [
    {
      icon: "📝",
      title: "Idea Evaluation & Feasibility",
      description: "We listen to your idea, then check if it's technically possible and market-worthy before starting development."
    },
    {
      icon: "🧠",
      title: "Concept Development & Planning",
      description: "We break down your idea into clear steps: what it will do, how it will work, and what's needed to build it."
    },
    {
      icon: "📐",
      title: "UI/UX Design",
      description: "We design how your app or device will look and feel to make it intuitive and enjoyable for users."
    },
    {
      icon: "🔌",
      title: "Electronics & PCB Design",
      description: "We design the electrical schematics and circuit boards that make your product function."
    },
    {
      icon: "⚡",
      title: "Power System Design",
      description: "We design how your device gets power — whether through batteries, solar panels, or charging ports."
    },
    {
      icon: "🔧",
      title: "Embedded Firmware",
      description: "We write the internal software that runs on microchips and controls your hardware."
    },
    {
      icon: "🌐",
      title: "IoT Integration",
      description: "We make your device smart and connected to the cloud or other devices."
    },
    {
      icon: "📱",
      title: "App Development",
      description: "We build mobile apps or web dashboards to control or monitor your product."
    },
    {
      icon: "🏗",
      title: "Mechanical Design",
      description: "We design the outer shell or body of your product for both aesthetics and protection."
    },
    {
      icon: "🖨",
      title: "3D Printing & Prototyping",
      description: "We create physical models for testing, investor demos, or design refinement."
    },
    {
      icon: "💎",
      title: "Laser Cutting & CNC",
      description: "We cut and shape parts from various materials to create accurate components."
    },
    {
      icon: "🧪",
      title: "Testing & QA",
      description: "We rigorously test everything to ensure reliability and safety before scaling."
    },
    {
      icon: "📡",
      title: "Wireless Connectivity",
      description: "We integrate Bluetooth, Wi-Fi, or GSM for wireless communication."
    },
    {
      icon: "📂",
      title: "Technical Documentation",
      description: "We prepare all professional documents needed for manufacturing."
    },
    {
      icon: "🏭",
      title: "Manufacturing Support",
      description: "We help prepare for mass production and find reliable manufacturers."
    },
    {
      icon: "🧾",
      title: "PCB Fabrication",
      description: "We manufacture your circuit boards from prototypes to full production."
    },
    {
      icon: "🎨",
      title: "Branding & Packaging",
      description: "We design your visual identity so your product looks as good as it works."
    }
  ];

  const targetAudience = [
    {
      icon: <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400 text-2xl" />,
      description: "Entrepreneurs & inventors with new product ideas"
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} className="text-blue-400 text-2xl" />,
      description: "Startups building their first prototypes"
    },
    {
      icon: <FontAwesomeIcon icon={faFlask} className="text-purple-400 text-2xl" />,
      description: "R&D teams at companies"
    },
    {
      icon: <FontAwesomeIcon icon={faUserGraduate} className="text-green-400 text-2xl" />,
      description: "Students or creators working on innovation projects"
    }
  ];

  return (
    <main className="relative bg-black overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-0"></div>
        <div className="relative z-10 w-full text-center px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-3 leading-tight">
              Turn <span className="text-white">Your Idea</span> Into Real Product
            </h1>
            <h2 className="text-gray-400 text-base sm:text-lg">
              From a simple thought to a product in people's hands — ORAGAN helps you build it, step by step.
            </h2>
            <h2 className="text-gray-400 text-sm sm:text-base mt-6 sm:mt-8 px-4 sm:px-10 md:px-20">
              We know that turning a creative idea into a working product can feel overwhelming — especially if you're not sure where to start.
              At ORAGAN, we guide you through every stage of the journey, using clear steps and hands-on support.
            </h2>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {newServices.map((service, index) => (
              <div key={index}>
                <NewServiceCard
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  icon={service.icon}
                  className="h-full group hover:shadow-xl transition-all duration-300"
                  glowColor="from-white/10 to-white/20"
                  borderColor="border-gray-700/50"
                  textColor="text-white"
                  bgColor="bg-gray-900/50"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Technologies & Services Section */}
      <section className="relative w-full px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-4">
              Technologies & Services <span className="text-white">We Use</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              To support your journey from idea to product, we offer expert services and technologies behind the scenes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/30 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Who Is This For Section */}
      <section className="relative w-full px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 md:p-12 overflow-hidden"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-4">
                👤 Who Is <span className="text-white">This For?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                You don't need to be an engineer — just bring your idea. We'll handle the rest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/40 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-gray-300 text-lg w-[200px]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-white/10 to-white/20 p-px rounded-full">
                <div className="bg-gray-900/80 rounded-full px-6 py-3">
                  <Link
                  href="/contact"
                   className="text-gray-300 font-medium"
                   
                   >
                    Ready to bring your idea to life? <span className="text-cyan-500">  Let's talk!</span>
                  </Link>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NewProducts;