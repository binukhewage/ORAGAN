"use client"
import React from 'react';
import { motion } from 'framer-motion';
import NewServiceCard from '../components/newServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faBalanceScale, faIndustry, faProjectDiagram, faDraftingCompass, faVial } from '@fortawesome/free-solid-svg-icons';

const NewProducts = () => {
  const newServices = [
    {
      number: '01',
      title: 'Proof of Concept (POC) Development',
      link: '/services/service01',
      icon: <FontAwesomeIcon icon={faVial} className="text-white text-3xl" />,
      description: "In this stage, we focus on demonstrating the technical feasibility of an idea. A basic concept is developed and tested to ensure the idea is workable in real-world conditions. The POC helps identify potential challenges early and ensures that further investment is worthwhile. We provide initial designs, component selection, and basic functionality testing to validate the idea."
    },
    {
      number: '02',
      title: 'Prototype Development',
      link: '/services/service02',
      icon: <FontAwesomeIcon icon={faDraftingCompass} className="text-white text-3xl" />,
      description: "Transform concepts into tangible, functional prototypes"
    },
    {
      number: '03',
      title: 'Design for Manufacturing (DFM)',
      link: '/services/service03',
      icon: <FontAwesomeIcon icon={faProjectDiagram} className="text-white text-3xl" />,
      description: "Optimize designs for cost-effective mass production"
    },
    {
      number: '04',
      title: 'Full-scale Manufacturing',
      link: '/services/service04',
      icon: <FontAwesomeIcon icon={faIndustry} className="text-white text-3xl" />,
      description: "End-to-end production with quality assurance"
    },
    {
      number: '05',
      title: 'Marketing & Launch Support',
      link: '/services/service05',
      icon: <FontAwesomeIcon icon={faBullhorn} className="text-white text-3xl" />,
      description: "Strategic go-to-market planning and execution"
    },
    {
      number: '06',
      title: 'Patent Application Guidance',
      link: '/services/service06',
      icon: <FontAwesomeIcon icon={faBalanceScale} className="text-white text-3xl" />,
      description: "Protect your intellectual property with expert guidance"
    },
  ];

  return (
    <main className="relative bg-black overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-0"></div>
        <div className="relative z-10 w-full text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight">
              Turn <span className="text-white">Concepts</span> Into Reality
            </h1>
            <h2 className='text-gray-400 text-lg'>From Idea to Impact — We Build What You Imagine.</h2>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {newServices.map((service, index) => (
              <div
                key={index}
              >
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
    </main>
  );
}

export default NewProducts;