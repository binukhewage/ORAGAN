import React from 'react';
import service05Image from '../../assets/service05MainImage.png'
const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                        Marketing & Launch Support Patent Application Guidance
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                            Once the product is ready, we assist in bringing it to market with strategic marketing solutions. This includes branding, product promotion, digital marketing campaigns, and creating marketing collateral such as brochures, demo videos, and website content. We help set up sales channels and gather customer feedback to refine both the product and marketing strategy, ensuring the product reaches the right audience effectively.</p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[500px]"
                            src={service05Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
