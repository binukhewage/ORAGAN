import React from 'react';
import Image from 'next/image';
import newProduct1 from '../assets/newProdocut1.png'
import newProduct2 from '../assets/newProdocut2.png'
import newProduct3 from '../assets/newProdocut3.png'
import newProduct4 from '../assets/newProdocut4.png'
import newProduct5 from '../assets/newProdocut5.png'
import newProduct6 from '../assets/newProdocut6.png'
import newProduct7 from '../assets/newProdocut7.png'
import newProduct8 from '../assets/newProdocut8.png'
import newProduct9 from '../assets/newProdocut9.png'
import newProduct10 from '../assets/newProdocut10.png'
import newProduct11 from '../assets/newProdocut11.png'
import newProduct12 from '../assets/newProdocut12.png'
import mainImage from '../assets/mainImage.jpg'
import NewProductCard from '../components/newProjectCard';

const Innovations = () => {
  const newProducts = [
    {
      imageSrc: newProduct1,
      title: 'Smart Air Purifier 4 Pro',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct2,
      title: 'Smart Humidifier 2',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct3,
      title: 'Xiaomi Smart Tower Heater Lite',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct4,
      title: 'Smart Standing Fan 2 Pro',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct5,
      title: 'Rechargeable Mini Fan',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct6,
      title: 'Smart Evaporative Humidifier Filter',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct7,
      title: 'Smart Air Purifier 4 Lite Filter Pro',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct8,
      title: 'Smart Temperature and Humidity Monitor 3 ',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct9,
      title: 'Rechargeable Mini Fan',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct10,
      title: 'Space Heater S',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct11,
      title: 'Smart Air Purifier Elite',
      description: ``,
      link: '',
    },
    {
      imageSrc: newProduct12,
      title: 'Smart Air Purifier Filter',
      description: ``,
      link: '',
    },
  ];
  return (
    <>
      <main>
        <section className="h-[100vh] w-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center z-0">
            <Image
              src={mainImage}
              alt="Background"
              className="h-[100vh] w-full pt-[100px]"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#0A1A2F] to-[#0A1A2F] opacity-60 z-10"></div>
          <div className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center z-20">

            <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold text-white">
              Rechargeable Mini Fan
            </h1>
            <h2 className="at-border-head flex items-center text-3xl text-white">
              <span className="at-border relative mr-2.5 inline-block"></span>
              <span className="text-white pr-1">A cable-free fan with long battery life, bringing cool breeze anywhere.</span>
            </h2>
            <p className="at-border-head flex items-center font-thin text-white pt-2 text-xl">2-in-1 dual use, handheld+desktop fan Smoother breeze delivered<br></br> via 7 blades 18.5h long endurance battery Low-noise ventilation</p>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300">
              Buy Now
            </button>
          </div>

        </section>

        <section className="w-full relative">
          <div className=" p-[150px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {newProducts.map((product, index) => (
              <NewProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </section>
      </main>
    </>


  );
}

export default Innovations;
