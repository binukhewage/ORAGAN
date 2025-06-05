"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faWrench,
  faMicrochip,
  faShapes,
  faRobot,
  faFlask,
  faIndustry,
  faBullhorn,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const RDService = () => {
  const services = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faLightbulb}
          className="text-yellow-400 text-2xl"
        />
      ),
      title: "R&D Problem Solving",
      description:
        "We explore, prototype, and test ideas to solve your company's unique challenges.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faWrench} className="text-blue-400 text-2xl" />
      ),
      title: "Product Concept Development",
      description:
        "We help develop entirely new product lines or solutions based on your goals.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faMicrochip}
          className="text-green-400 text-2xl"
        />
      ),
      title: "Smart Device Design & IoT Integration",
      description:
        "From sensors to real-time dashboards, we digitize your operations.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faShapes} className="text-purple-400 text-2xl" />
      ),
      title: "Mechanical & Industrial Design",
      description:
        "We design functional and production-ready enclosures and systems.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faRobot} className="text-red-400 text-2xl" />
      ),
      title: "Embedded Systems & Firmware",
      description:
        "We develop firmware for ESP32, STM32, Arduino and more — with OTA and connectivity.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faFlask} className="text-cyan-400 text-2xl" />
      ),
      title: "Prototype Development & Testing",
      description:
        "We create real working prototypes for demonstration or validation.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faIndustry}
          className="text-orange-400 text-2xl"
        />
      ),
      title: "Manufacturing Support",
      description:
        "We prepare your solution for mass production with DFM, documentation, and sourcing.",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faBullhorn} className="text-pink-400 text-2xl" />
      ),
      title: "Go-to-Market & Branding",
      description:
        "We support product branding, packaging, and investor-ready presentations.",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFileSignature}
          className="text-white text-2xl"
        />
      ),
      title: "Patent Guidance & IP Filing",
      description:
        "We guide your team through protecting the innovation you build with us.",
    },
  ];

  const targetAudience = [
    "Manufacturing companies aiming to digitize and modernize operations",
    "Startups needing a complete product team",
    "R&D departments seeking fast prototyping help",
    "Government, NGO or university teams looking for tech innovation",
    "Entrepreneurs and hardware innovators",
  ];

  return (
    <main className="relative bg-black overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[50px] w-full flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={require("../../public/servicepagevid.mp4")}
              type="video/mp4"
            />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-black"></div>
          </video>
          {/* Video overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 w-full text-center px-4 sm:px-6 md:px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/*<h2 className="flex items-center justify-center text-xl md:text-xl mb-4">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-white mr-3"></span>
                            <span className='text-gray-300 pr-1 font-medium tracking-wider'>INNOVATION</span>
                            <span className='text-white'>PARTNER FOR YOUR BUSINESS</span>
                        </h2>*/}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-3 leading-tight">
              Innovate Smarter <span className="text-white">with ORAGAN</span>
            </h1>
            <h2 className="text-gray-400 text-base sm:text-lg">
              We become your external R&D team — helping you solve problems,
              develop new products, and bring ideas to life without the
              overhead.
            </h2>
            <h2 className="text-gray-400 text-sm sm:text-base mt-6 sm:mt-8 px-4 sm:px-10 md:px-20">
              At ORAGAN Innovation Studio, we offer complete product development
              and innovation services to businesses, startups, and
              organizations. Whether you need to solve a technical problem,
              modernize a process, or launch a new smart device — we act as your
              dedicated external R&D team. From concept to commercialization,
              we've got you covered.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              What <span className="text-white">We Offer</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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

      {/* Who It's For Section */}
      <section className="relative w-full px-6 md:px-12 pb-20">
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
                Who <span className="text-white">Benefits From Our Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-blue-400 mt-1">●</span>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-white/10 to-white/20 p-px rounded-full">
                <div className="bg-gray-900/80 rounded-full px-6 py-3">
                  <Link href="/contact" className="text-gray-300 font-medium">
                    Need a dedicated team to solve your next challenge? {" "}
                    <span className="text-cyan-500"> Let's work together! </span>
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

export default RDService;
