// components/ServiceCard.tsx
import Link from 'next/link'

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;  
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, link, icon }) => {
  return (
    <div className='relative h-full p-4 shadow-md rounded-lg bg-white'>
      {/* Circle with Icon */}
      <div className='absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-12 h-12 bg-[#0A1A2F] rounded-full flex items-center justify-center'>
        {icon}
      </div>
      
      <h3 className='mb-5 font-semibold text-lg'>
        {number}-<span className='text-[#0A1A2F] font-semibold text-lg'>{title}</span>
      </h3>
      <p className='mb-5 text-base text-[#666766]'>{description}</p>
      <Link href={link} className='relative inline-block focus:outline-none text-black font-bold hover:text-[#0A1A2F] link-underline'>
        Read More
      </Link>
    </div>
  );
};

export default ServiceCard;
