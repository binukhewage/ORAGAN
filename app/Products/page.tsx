import React from 'react'
import Card from '../components/ProductCard';
import software from '../assets/software.png'
import Hardware from '../assets/hardware.png'

const Products = () => {
  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Animated header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-white">
            Our Products
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Cutting-edge solutions designed for tomorrow's challenges
          </p>
        </div>

        {/* Product cards grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card
            imageSrc={Hardware.src}
            title="XION LORA CORE"
            description="Discover our premium hardware solutions designed to enhance your productivity."
            link="/projects/hardware/project01"
            className="hover:scale-105 transition-transform duration-500"
            glowColor="from-cyan-500 to-blue-600"
          />
          <Card
            imageSrc={software.src}
            title="IMSP"
            description="Explore our software solutions that are tailored to meet your specific needs."
            link="/projects/software/project01"
            className="hover:scale-105 transition-transform duration-500"
            glowColor="from-purple-500 to-indigo-600"
          />
        </div>

        {/* Futuristic decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-800 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-800 rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </div>
  )
}

export default Products