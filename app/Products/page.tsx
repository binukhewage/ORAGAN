// Products.tsx
import React from 'react';
import Card from '../components/ProductCard';
import software from '../assets/software.png';
import hardware from '../assets/hardware.png';

const Products = () => {
  return (
    <div className="min-h-screen pt-32 bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern header with gradient text */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-white bg-clip-text text-transparent mb-4">
             Products
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Next-generation solutions engineered for digital transformation
          </p>
        </div>

        {/* Enhanced product grid with subtle animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card
            imageSrc={hardware.src}
            title="XION LORA CORE"
            description="Advanced hardware platform with cutting-edge connectivity and edge computing capabilities."
            link="/projects/hardware/project01"
            className="hover:-translate-y-2 transition-transform duration-300"
            gradient="from-cyan-500/20 to-blue-600/20"
            borderColor="border-cyan-500/30"
          />
          <Card
            imageSrc={software.src}
            title="IMSP"
            description="Intelligent management software platform with AI-driven analytics and automation."
            link="/projects/software/project01"
            className="hover:-translate-y-2 transition-transform duration-300"
            gradient="from-purple-500/20 to-indigo-600/20"
            borderColor="border-purple-500/30"
          />
        </div>

        {/* Subtle background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;