import React from 'react';
import service02Image from '../../assets/service02MainImage.png'
const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                            Prototype Development
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                            Once the POC is validated, we develop a working prototype to demonstrate the core features of the product. This includes refining designs, sourcing components, and assembling the product to a stage where it showcases its primary functionality. Prototyping allows for multiple rounds of testing and improvements, ensuring the product works as expected and meets the user’s needs before moving into mass production. </p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[500px]"
                            src={service02Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
