import Link from 'next/link'

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  className?: string;
  glowColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  number, 
  title, 
  description, 
  link, 
  icon,
  className = '',
  glowColor = 'from-blue-500 to-cyan-500'
}) => {
  return (
    <div className={`relative group h-full ${className}`}>
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>
      
      {/* Main card container */}
      <div className="relative h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:bg-opacity-70 p-8">
        {/* Number and icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {number}
          </span>
          <div className="w-12 h-12 bg-cyan-900 bg-opacity-50 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-800 group-hover:bg-opacity-70 transition-all duration-300">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4">
          {title}
        </h3>
        
        {/* Description */}
        <p className='mb-6 text-blue-200'>{description}</p>
        
        {/* Link */}
        <Link 
          href={link}
          className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300 group/link"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" 
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
  );
};

export default ServiceCard;