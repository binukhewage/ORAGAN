// ProductCard.tsx
import React from 'react';
import Link from 'next/link';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  className?: string;
  gradient?: string;
  borderColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  imageSrc, 
  title, 
  description, 
  link, 
  className = '', 
  gradient = 'from-blue-500/20 to-cyan-500/20',
  borderColor = 'border-blue-500/30'
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Main card container */}
      <div className={`relative h-full bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden border ${borderColor} transition-all duration-500 group-hover:border-opacity-100`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Image container */}
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imageSrc} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={title}
            loading="lazy"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content container */}
        <div className="p-6 relative">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <span className="ml-auto w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
          </div>
          <p className="text-neutral-400 mb-6">{description}</p>
          <Link 
            href={link}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-cyan-400/50 text-white font-medium rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
          >
            Explore
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;