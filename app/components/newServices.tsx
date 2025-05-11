import Link from 'next/link';

interface NewServiceCardProps {
  number: string;
  title: string;
  description?: string;  // Made optional since original design doesn't show it
  link: string;
  icon: JSX.Element;
  className?: string;
  // These props are accepted but won't change the design
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
  // Destructure but don't use these additional props
  glowColor,
  borderColor,
  textColor,
  bgColor
}) => {
  return (
    <Link 
      href={link} 
      className={`h-full group hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className='relative h-full p-6 shadow-md rounded-lg bg-white text-center flex flex-col items-center'>
        {/* Icon circle */}
        <div className='w-16 h-16 bg-[#0A1A2F] rounded-full flex items-center justify-center mb-4'>
          {icon}
        </div>
        
        {/* Number */}
        <span className='text-black text-xl font-bold mb-2'>{number}</span>
        
        {/* Title */}
        <h3 className='font-semibold text-lg text-[#0A1A2F] mb-4'>
          {title}
        </h3>
        
        {/* Hidden description (exists in DOM but not visible) */}
        {description && <p className='hidden'>{description}</p>}
      </div>
    </Link>
  );
};

export default NewServiceCard;