 
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  imageSrc?: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  isAllProductsCard?: boolean;
}

const NewProductCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, link, isAllProductsCard }) => {
  return (
    <div className="bg-white rounded-xl p-4 text-center text-black w-72 mx-auto shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">{description}</p>

      {isAllProductsCard && (
        <a href={link}>
          <div className="flex justify-center mt-4">
            <button type="button" className="text-white bg-[#0A1A2F] hover:bg-[#020660] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>

        </a>
      )}


      {imageSrc && (
        <div className="mt-4 flex justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={200}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};


export default NewProductCard;
