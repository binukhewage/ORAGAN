import React from 'react';
import service06Image from '../../assets/service06MainImage.png'
const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                         Patent Application Guidance
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                        We help innovators protect their intellectual property by guiding them through the patent application process. This includes conducting initial patent searches, advising on patentability, and supporting the documentation needed for patent submissions, ensuring that their innovation is legally protected.</p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[300px]"
                            src={service06Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
