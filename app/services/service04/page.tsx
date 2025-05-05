import React from 'react';
import service04Image from '../../assets/service04MainImage.png'
const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                        Full-scale Manufacturing
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                        After the product design is finalized, we manage the full-scale manufacturing process. We handle everything from production planning, sourcing materials, and setting up manufacturing facilities to quality control. We ensure the product is produced efficiently and at the highest quality, whether for small batch production or large-scale mass manufacturing.</p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[500px]"
                            src={service04Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
