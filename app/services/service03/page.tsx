import React from 'react';
import service03Image from '../../assets/service03MainImage.png'
const Service = () => {
    return (
        <main>
            <section className="py-20 bg-[#0A1A2F] md:py-20 w-full flex items-center justify-center">
                <div className="text-white min-h-screen flex flex-col items-center justify-center md:px-4">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 py-15 md:py-10">
                            Design for Manufacturing (DFM)
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 mb-10">
                            After prototyping, the design is optimized for large-scale production. DFM involves refining the product to be efficiently manufactured, reducing costs, simplifying production processes, and ensuring consistent quality. This stage includes component standardization, material selection, and assembly procedures.</p>
                    </div>

                    <div className="relative w-full max-w-2xl   flex justify-center"> {/* Added flex justify-center */}
                        <img
                            className="w-[500px]"
                            src={service03Image.src}
                            alt="iMac Front"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
