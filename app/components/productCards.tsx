// components/ProductCards.tsx
import React from 'react';
import Link from 'next/link';

interface ProductCardsProps {
  imageSrc: string;
  link: string;
  title: string;
}

const ProductCards: React.FC<ProductCardsProps> = ({ imageSrc, link, title }) => {
  return (
    <div className="w-82 bg-white rounded-xl flex flex-col items-center">
      <div className="w-full relative max-w-sm mx-auto h-auto">
        <img src={imageSrc} className="h-80 w-72 object-cover rounded-t-xl" />
        <Link href={link} className="absolute w-full h-full top-0 left-0 bg-[#0A1A2F] opacity-0 z-10 transition-opacity duration-300 hover:opacity-75 flex items-center justify-center text-white text-lg font-semibold">
          <span
            className="relative z-10 font-bold text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
