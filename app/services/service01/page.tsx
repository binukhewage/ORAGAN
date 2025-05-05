import React from 'react';
import service01Image from '../../assets/service01MainImage.png';

const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                            Proof of Concept (POC) Development
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                            In this stage, we focus on demonstrating the technical feasibility of an idea.
                            A basic concept is developed and tested to ensure the idea is workable in
                            real-world conditions. The POC helps identify potential challenges early
                            and ensures that further investment is worthwhile. We provide initial designs,
                            component selection, and basic functionality testing to validate the idea.
                        </p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[500px]"
                            src={service01Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;