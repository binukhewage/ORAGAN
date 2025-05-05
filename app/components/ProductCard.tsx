import React from 'react';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link }) => {
    return (
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col m-5 items-center justify-center p-5 bg-white rounded-lg shadow-lg">
            <img src={imageSrc} className="w-full h-[250px] object-cover rounded-t-lg" alt={title} />
            <div className="text-center mt-4">
                <h3 className="text-lg md:text-xl font-bold">{title}</h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                    {description}
                </p>
                <a href={link}
                     className="mt-4 inline-block px-4 py-2 bg-[#0A1A2F] text-white rounded-lg hover:bg-[#0A1A2F]">
                        Learn More
                     
                </a>
            </div>
        </div>
    );
};

export default Card;
