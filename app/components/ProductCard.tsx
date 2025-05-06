import React from 'react';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
    className?: string;
    glowColor?: string;
}

const Card: React.FC<CardProps> = ({ 
    imageSrc, 
    title, 
    description, 
    link, 
    className = '', 
    glowColor = 'from-blue-500 to-cyan-500' 
}) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
            
            {/* Main card container */}
            <div className="relative h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:bg-opacity-70">
                {/* Image container */}
                <div className="w-full relative h-60 overflow-hidden">
                    <img 
                        src={imageSrc} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        alt={title} 
                    />
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
                </div>
                
                {/* Content container */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-blue-200 mb-6">{description}</p>
                    <Link 
                        href={link}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                    >
                        Learn More
                        <svg 
                            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M14 5l7 7m0 0l-7 7m7-7H3" 
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;