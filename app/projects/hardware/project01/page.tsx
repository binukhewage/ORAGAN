import React from 'react';
import product01 from '../../../assets/product-01.png';

const Project = () => {
  return (
    <main>
      <section className="h-[50vh] w-full flex items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0A1A2F] z-1"></div>
        <div className="relative w-full h-[50vh] flex items-center justify-center">
          <div className="mt-[80px]">
            <h1 className="text-6xl font-bold text-center">
              <span className="text-white">XION IOT LORA CORE</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white md:py-16 h-auto w-full flex items-center justify-center p-[50px]">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto flex flex-col items-center">
              <img
                className="w-full"
                src={product01.src}
                alt="iMac Front"
              />
              {/* <div className="flex flex-wrap gap-4">
                <button type="button" className="min-w-[200px] px-4 py-3 bg-[#0A1A2F]  text-white text-sm font-semibold rounded-md">Buy now</button>
                <button type="button" className="min-w-[200px] px-4 py-2.5 border border-[#0A1A2F] bg-transparent hover:bg-gray-50 text-[#0A1A2F] text-sm font-semibold rounded-md">Download documents</button>
              </div> */}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0 items-center">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">Introduction</h1>
              <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                <p className="text-base text-gray-500 sm:text-small">
                  The development board is a versatile tool for IoT and embedded system projects, featuring a robust DC power jack, an SD card slot for data logging, and the LoRa Ra-02 module for long-range, low-power wireless communication. Powered by a high-performance microcontroller, it ensures efficient processing and smooth operation. The USB-C connector offers fast programming, reliable power delivery, and high-speed data transfer. The board is equipped with tactile push buttons, LED indicators, and a built-in buzzer for immediate feedback and notifications. External sensors and actuators can be securely connected via the green terminal block, and integrated circuits ensure precise power regulation and efficient communication.
                </p>
              </div>
              <hr className="my-6 md:my-8 border-gray-200" />
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Key Components and Features</h2>
              <ul className="space-y-4 text-left text-gray-500">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Microcontroller (ESP32)</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>LoRa Module (Ra-02)</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Micro USB Port</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>SD Card Slot</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Pin Headers</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Debugging and Programming Interface</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Power Management</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Buttons and LEDs</span>
                </li>
              </ul>
              <br />
              <h2 className="mb-2 text-lg font-semibold text-gray-900">Powering the Module</h2>
              <ul className="space-y-4 text-left text-gray-500">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Use a USB-C cable to power the board through the USB-C connector.</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>The board can also be powered through the DC power jack (9V-12V).</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>Ensure that the power source is stable and provides sufficient current.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
