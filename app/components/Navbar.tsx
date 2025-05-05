"use client";
import { useState } from 'react';
import Link from 'next/link';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <nav className={`md:flex md:justify-between md:items-center text-sm p-3 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <Link href="/">
                    <img src={logo.src} alt="Logo" width={150} height={50} />
                </Link><br></br>
                <ul className="flex flex-col gap-4 md:flex-row md:gap-[3vw] font-poppins">
                    <li className="font-medium font-sans block hover:text-[#0A1A2F] hover:font-medium">
                            <span className="text-black flex items-center space-x-2">
                                <a href="/" className="pl-2">Home</a>
                            </span>
                    </li>
                    <li className="font-medium font-sans block hover:text-[#0A1A2F] hover:font-medium">
                        <span className="text-black flex items-center space-x-2">
                            <span className="border-l-2 border-orange-500 h-5"></span>
                            <a href="/Products" className="pl-2">Products</a>
                        </span>

                    </li>
                    <li className="font-medium font-sans block hover:text-[#0A1A2F] hover:font-medium">
                        <span className="text-black flex items-center space-x-2">
                            <span className="border-l-2 border-orange-500 h-5"></span>
                            <a href="/newProducts" className="pl-2">Idea into Product</a>
                        </span>
                    </li>
                    <li className="relative font-medium font-sans w-fit block hover:text-[#0A1A2F] hover:font-medium">
                        <button
                            id="dropdownNavbarLink"
                            onClick={toggleProductDropdown}
                            className="flex items-center justify-between"
                        >
                            <span className="text-black flex items-center space-x-2">
                                <span className="border-l-2 border-orange-500 h-5"></span>
                                <a href="https://sltmobitelecms.vercel.app" className="pl-2">ORAGAN IOT Core</a>
                            </span>
                        </button>
                        {/*{isProductDropdownOpen && (
                            <div
                                id="dropdownNavbar"
                                className="absolute mt-2 z-10 font-normal bg-white divide-y divide-gray-100 shadow w-44"
                            >
                                <ul className="py-2 text-sm text-gray-700">
                                    <li>
                                        <a href="/projects/hardware/project01" className="block px-4 py-2 hover:text-[#0A1A2F]">
                                            XION LORA
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/projects/software/project01" className="block px-4 py-2 hover:text-[#0A1A2F]">
                                            IMSP
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}*/}
                    </li>
                    <li className="font-medium font-sans block hover:text-[#0A1A2F] hover:font-medium">
                        <span className="text-black flex items-center space-x-2">
                            <span className="border-l-2 border-orange-500 h-5"></span>
                            <a href="/community" className="pl-2">Community</a>
                        </span>
                    </li>
                    <li className="font-medium font-sans block hover:text-[#0A1A2F] hover:font-medium">
                        <span className="text-black flex items-center space-x-2">
                            <span className="border-l-2 border-orange-500 h-5"></span>
                            <a href="/aboutus" className="pl-2">About</a>
                        </span> 
                    </li>
                </ul><br></br>

            </nav>
        </header>
    );
}
