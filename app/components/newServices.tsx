import Link from 'next/link';
import React from 'react';

interface NewServiceCardProps {
  number: string;
  title: string;
  description?: string;
  link: string;
  icon: React.ReactElement;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
}

const NewServiceCard: React.FC<NewServiceCardProps> = ({ 
  number, 
  title, 
  description, 
  link, 
  icon,
  className = '',
  glowColor = 'from-blue-500/10 to-cyan-50/10',
  borderColor = 'border-gray-800',
  textColor = 'text-white',
  bgColor = 'bg-gray-900'
}) => {
  return (
    <Link 
      href={link} 
      className={`h-full group transition-all duration-500 hover:-translate-y-2 ${className}`}
      passHref
    >
      <div className={`
        relative h-full p-6 rounded-xl border ${borderColor} ${bgColor}
        flex flex-col items-center overflow-hidden 
        hover:border-cyan-50/30 hover:bg-gray-800/70
        transition-all duration-500
      `}>
        {/* Gradient highlight on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
        
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Icon circle with gradient border */}
          <div className='
            w-16 h-16 rounded-full flex items-center justify-center mb-4
            bg-gradient-to-br from-blue-600 to-cyan-400
            group-hover:from-blue-500 group-hover:to-cyan-300
            transition-all duration-500
          '>
            {React.cloneElement(icon, { 
              className: `${icon.props?.className || ''} text-cyan-50 text-2xl` 
            })}
          </div>
          
          {/* Number */}
          <span className={`
            text-xl font-bold mb-2 
            text-cyan-50 group-hover:text-white
            transition-colors duration-500
            ${textColor}
          `}>
            {number}
          </span>
          
          {/* Title */}
          <h3 className={`
            font-semibold text-lg mb-4 text-center 
            text-white group-hover:text-cyan-50
            transition-colors duration-500
            ${textColor}
          `}>
            {title}
          </h3>
          
          {/* Description */}
          {description && (
            <p className='
              text-gray-400 text-center mt-2 px-2
              max-h-0 opacity-0 overflow-hidden
              group-hover:max-h-[100px] group-hover:opacity-100
              transition-all duration-500
            '>
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewServiceCard;