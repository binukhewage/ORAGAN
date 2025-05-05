
import Link from 'next/link'

interface NewServiceCardProps {
    number: string;
    title: string;
    link: string;
    icon: JSX.Element;
}

const NewServiceCard: React.FC<NewServiceCardProps> = ({ number, title, link, icon }) => {
    return (
        <Link href={link} >
            <div className='relative h-full p-6 shadow-md rounded-lg bg-white text-center flex flex-col items-center'>
                <div className='w-16 h-16 bg-[#0A1A2F] rounded-full flex items-center justify-center mb-4'>
                    {icon}
                </div>
                <span className='text-black text-xl font-bold mb-2'>{number}</span>
                <h3 className='font-semibold text-lg text-[#0A1A2F] mb-4'>
                    {title}
                </h3>
            </div>
        </Link>
    );
};


export default NewServiceCard;
