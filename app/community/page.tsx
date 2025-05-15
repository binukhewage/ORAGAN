"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import OdysseyImage from '../assets/odessey.jpg';
import StudioImage from '../assets/innovisionstudio.jpg';
import WorkshopImage from '../assets/workshop.webp';

const page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('October 1, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      id: 1,
      title: "ORAGAN Innovision Odyssey",
      date: "October 1, 2025",
      image: OdysseyImage,
      goal: "In this Event:",
      description: "Innovision Odyssey will be ORAGAN’s flagship annual event, held on October 1, aimed at showcasing and launching new products to the public, investors, and media. It will be a high-profile event similar to major product launches by leading tech companies.",
      highlights: [
        "Showcase ORAGAN’s latest product innovations.",
        "Engage with media, customers, investors, and industry leaders.",
        "Strengthen ORAGAN’s position as a leader in product innovation."
      ]
    },
    {
      id: 2,
      title: "ORAGAN Innovation Studio",
      date: "Ongoing Program",
      image: StudioImage,
      description: "The Innovation Studio is designed to be ORAGAN’s incubator for nurturing creative talent and innovative ideas. The Studio will provide selected individuals with an opportunity to collaborate on real ORAGAN projects, develop their own product ideas, and contribute to the company’s innovation pipeline. This will be achieved through active community engagement, structured internships, and a clear path for promising ideas to progress to commercialization.",
      highlights: [
        "Community Engagement:Identify top talent by hosting workshops and competitions to bring together innovators, students, and entrepreneurs. Participants will be selected based on creativity, feasibility, and potential impact.",
        "Internship Program: Offer selected participants a structured internship where they collaborate on real ORAGAN projects while developing their own innovative ideas under mentorship.",
        "Product Pipeline: Promising innovations from the Innovation Studio will be refined and considered for commercialization under ORAGAN’s product development process."
      ],
      button: {
        text: "Apply for Internship Program",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdTqWKsNpZU5qhap-pX6xGRs__kHvl71toYj-UIh3YCmbWmJg/viewform"
      }
    },
    {
      id: 3,
      title: "ORAGAN Innovision Workshop",
      date: "Quarterly Events",
      image: WorkshopImage,
      goal: "Workshop Goals:",
      description: "To equip participants with creative thinking skills, an understanding of the innovation process, and practical tools to turn their ideas into real products. The workshop highlights ORAGAN's role in guiding innovative ideas into successful products.",
      highlights: [
        "Inspire creative and critical thinking in participants.",
        "Demonstrate how to convert ideas into tangible products through structured methodologies.",
        "Provide practical techniques to solve problems creatively and validate ideas.",
        "Motivate participants to pursue innovation as a way to make a difference in their respective fields."
      ],
      button: {
        text: "Register for Workshop",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSd_SKgIWoZWKMCPuzO4htNOPslIXHRsytehcMoVNU0Cq3yvZw/viewform"
      }
    }
  ];

  return (
    <div className='relative min-h-screen bg-black pt-[150px] pb-20 overflow-hidden'>
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Countdown Section (kept exactly as you wanted) */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 leading-tight'>
              ORAGAN <span className="text-white">INNOVISION ODYSSEY</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 mb-12"
          >
            <p className='text-lg md:text-xl text-gray-400 max-w mx-auto px-4'>
              <span className='text-2xl text-white'>01st October 2025</span> <br/>
              ORAGAN's flagship annual event showcasing groundbreaking innovations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-4 gap-4 md:gap-8 my-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 text-center min-w-[80px]">
              <div className="text-3xl md:text-5xl font-bold text-blue-300">{timeLeft.days}</div>
              <div className="text-gray-400 mt-2 text-sm md:text-base">Days</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 text-center min-w-[80px]">
              <div className="text-3xl md:text-5xl font-bold text-blue-300">{timeLeft.hours}</div>
              <div className="text-gray-400 mt-2 text-sm md:text-base">Hours</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 text-center min-w-[80px]">
              <div className="text-3xl md:text-5xl font-bold text-blue-300">{timeLeft.minutes}</div>
              <div className="text-gray-400 mt-2 text-sm md:text-base">Minutes</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 text-center min-w-[80px]">
              <div className="text-3xl md:text-5xl font-bold text-blue-300">{timeLeft.seconds}</div>
              <div className="text-gray-400 mt-2 text-sm md:text-base">Seconds</div>
            </div>
          </motion.div>
        </div>

        {/* Events Showcase */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            ORAGAN <span className="text-white">Innovision Programs</span>
          </h2>

          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-2xl font-bold text-white">{event.date}</h3>
                    </div>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-lg text-gray-300 mb-6">{event.description}</p>
                  <p className='text-gray-300 mb-2'>{event.goal}</p>
                  <ul className="space-y-3 mb-6">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {event.button && (
                    <motion.a
                      href={event.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      {event.button.text}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;