"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] bg-gray-400 backdrop-blur-sm z-50 border-b border-gray-800/50 py-2 rounded-[50px] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12"> {/* Reduced height */}
          
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src={logo.src} 
              alt="ORAGAN Logo" 
              className="h-8 w-auto"  // Smaller logo
            />
          </Link>

          {/* Mobile menu button - hidden on desktop */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-6">  {/* Reduced spacing */}
              {[
                { href: "/", label: "Home" },
                { href: "/Products", label: "Products" },
                { href: "/newProducts", label: "Idea to Product" },
                { href: "https://sltmobitelecms.vercel.app", label: "IoT Core" },
                { href: "/community", label: "Community" },
                { href: "/aboutus", label: "About" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white px-2 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-sm"
            >
              Reach Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu - appears below the thin navbar */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/Products", label: "Products" },
              { href: "/newProducts", label: "Idea to Product" },
              { href: "https://sltmobitelecms.vercel.app", label: "ORAGAN IOT Core" },
              { href: "/community", label: "Community" },
              { href: "/aboutus", label: "About" },
              { href: "/reachus", label: "Reach Us", isCTA: true },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium ${
                  item.isCTA 
                    ? 'text-white bg-orange-600 rounded-md text-center mt-2'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}