import React from 'react';
import product02 from '../../../assets/product-02.png'
const Project = () => {
  return (
    <main>
      <section className="h-[50vh] w-full flex items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0A1A2F]   z-1"></div>
        <div className="relative w-full h-[50vh] flex items-center justify-center">
          <div className="mt-[80px]">
            <h1 className="text-6xl font-bold text-center">
              <span className="text-white">
              Industrial Management and Solution Platform 
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white md:py-16 h-auto w-full flex items-center justify-center p-[50px]">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 items-center">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full"
                src={product02.src}
                alt="iMac Front"
              /> 
            </div> 
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Overview
              </h1>
              <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                <p className="text-base   text-gray-500 sm:text-small">
                Simplify your sales process with our cutting-edge POS Solution. Designed to operate seamlessly without the need for an internet connection, our POS software ensures that your business transactions are fast, reliable, and secure. Perfect for small and medium-sized businesses, it offers an affordable solution without compromising on quality.                </p>
              </div>
              <hr className="my-6 md:my-8 border-gray-200" />
              <h2 className="mb-2 text-lg font-semibold text-gray-900 ">Key Features </h2>
              <ul className="space-y-4 text-left text-gray-500  ">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>No Internet Needed

</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>User-Friendly Interface</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Affordable</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Fast and Reliable</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Secure Data</span>
                </li>
              </ul>
              <br></br>
               
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
