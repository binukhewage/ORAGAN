"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-neutral-900/80 backdrop-blur-lg z-50 border border-neutral-700/50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img 
              src={logo.src} 
              alt="ORAGAN Logo" 
              className="h-8 w-auto transition-transform hover:scale-105" 
            />
          </Link>

          {/* Mobile menu button - hidden on desktop */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-neutral-300 hover:text-white focus:outline-none p-2 rounded-full hover:bg-neutral-800/50 transition-all"
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
            <ul className="flex space-x-2">
              {[
                { href: "/", label: "Home" },
                { href: "/Products", label: "Products" },
                { href: "/newProducts", label: "Idea into Product" },
                { href: "https://oragan-dashboard.vercel.app", label: "IoT Core" },
                { href: "compage", label: "Community" },
                { href: "/aboutus", label: "About" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-neutral-300 hover:text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-neutral-800/50 transition-all duration-200"
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
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              Reach Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu - appears below the navbar */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-700/50 mt-2 rounded-2xl overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/Products", label: "Products" },
              { href: "/newProducts", label: "Idea to Product" },
              { href: "https://oragan-dashboard.vercel.app", label: "ORAGAN IOT Core" },
              { href: "compage", label: "Community" },
              { href: "/aboutus", label: "About" },
              { href: "/reachus", label: "Reach Us", isCTA: true },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  item.isCTA 
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-center'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
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