import Link from 'next/link';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="relative bg-black text-gray-300 overflow-hidden">
            {/* Glowing background elements similar to your homepage */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-[100px]"></div>
                <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/5 rounded-full filter blur-[100px]"></div>
            </div>
            
            {/* Main footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
                {/* Top section with social links */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-800 pb-8 mb-8">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <img 
                                src={logo.src} 
                                alt="ORAGAN.IST Logo" 
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>
                    
                    <div className="flex space-x-6">
                        {/* Facebook */}
                        <a 
                            href="https://www.facebook.com/profile.php?id=61556242558777" 
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 320 512">
                                <path
                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                        
                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/company/oragan-ist/mycompany/" 
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {/* Navigation links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
                            NAVIGATION
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    href="#aboutusSection" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#serviceSection" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#productSection" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Contact information */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
                            CONTACT US
                        </h3>
                        <address className="not-italic space-y-4">
                            <div className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mt-0.5 mr-3 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                <span className="text-gray-400">
                                    Jayabima, Galpanawa Road,<br />
                                    Monnekulama, Nikaweratiya
                                </span>
                            </div>
                            
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-3 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <a 
                                    href="mailto:oragan.ist@gmail.com" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                   info@oragan-idea.com
                                </a>
                            </div>
                            
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-3 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                <a 
                                    href="tel:+94 71 118 6006" 
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    +94 71 118 6006
                                </a>
                            </div>
                        </address>
                    </div>
                    
                    {/* Newsletter or additional content can go here */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 tracking-wider">
                            SEND US YOUR IDEAS
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Let's connect and make your dream a reality
                        </p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-white text-white w-full"
                            />
                            <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-200 transition-colors duration-300">
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>
                        © {new Date().getFullYear()} ORAGAN.IST. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}