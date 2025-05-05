import Link from 'next/link';
import aboutPageImg2 from '../assets/aboutPageImg2.png';
import aboutPageImg3 from '../assets/aboutPageImg3.png';

export default function About() {
    const data = [
        { value: '06+', label: 'Years Of Trust' },
        { value: '120+', label: 'Successful Projects' },
        { value: '10+', label: 'IT Professionals' },
    ];

    return (
        <>
            <main>
                <section className="h-[80vh] w-full flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center opacity-25 z-0">
                        <div className="h-[80vh] w-full">
                            <video src={require('../../public/video.mp4')} autoPlay muted loop className="h-full w-full object-cover" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#0A1A2F] to-[#0A1A2F] opacity-60 z-1"></div>
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                        <h2 className="at-border-head flex items-center text-xl">
                            <span className="at-border relative mr-2.5 inline-block"></span>
                            <span className="text-white pr-1">Pioneering Innovation and Excellence</span>
                        </h2>
                        <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold">
                            <span className="text-white pr-1">We Are Your IT Partners for Cutting-Edge Hardware and Software Solutions</span>
                        </h1>
                    </div>
                </section>

                <section className="h-auto w-full flex items-center justify-center py-10">
                    <div className="relative w-full mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="at-border-head flex items-center justify-center text-xl">
                                <span className="at-border relative mr-2.5 inline-block"></span>
                                <span className="text-[#0A1A2F] pr-1">ABOUT</span>COMPANY
                            </h2>
                            <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold">
                                Our <span className="text-[#0A1A2F] pr-1">Story</span>
                            </h1>
                            <p className="mb-5 text-lg text-[#666766]">
                                Our company was founded with a powerful vision in mind: to transcend the ordinary and venture "Beyond the Limits". We embarked on our journey in 2019 with a mission to revolutionize the way technology transforms lives, businesses, and societies. We aim to not just deliver exceptional technology solutions but also to champion three core principles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4">
                                <div className="h-full p-4 shadow-md rounded-lg bg-white">
                                    <h2 className="at-border-head flex items-center text-xl">
                                        <div className="w-7 h-7 bg-[#C8D3F6] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-[#0A1A2F] rounded-full inline-block"></div>
                                        </div>
                                        <span className="pr-1 pl-1 font-bold">Collaboration</span>
                                    </h2>
                                    <p className="m-5 text-lg text-[#666766]">
                                        Our goal is to unite individuals from diverse backgrounds, promoting collaboration, idea sharing, and innovative solutions, thereby fostering creativity and success.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="h-full p-4 shadow-md rounded-lg bg-white">
                                    <h2 className="at-border-head flex items-center text-xl">
                                        <div className="w-7 h-7 bg-[#C8D3F6] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-[#0A1A2F] rounded-full inline-block"></div>
                                        </div>
                                        <span className="pr-1 pl-1 font-bold">Innovation</span>
                                    </h2>
                                    <p className="m-5 text-lg text-[#666766]">
                                        Our commitment to innovation ensures that our products are not only innovative but also practical and user-friendly, keeping us ahead of industry trends.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="h-full p-4 shadow-md rounded-lg bg-white">
                                    <h2 className="at-border-head flex items-center text-xl">
                                        <div className="w-7 h-7 bg-[#C8D3F6] rounded-full flex items-center justify-center">
                                            <div className="w-3 h-3 bg-[#0A1A2F] rounded-full inline-block"></div>
                                        </div>
                                        <span className="pr-1 pl-1 font-bold">Excellence</span>
                                    </h2>
                                    <p className="m-5 text-lg text-[#666766]">
                                        Our commitment to quality and customer satisfaction has led to exceptional results and exceeded client expectations, positively impacting our work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="h-auto w-full flex items-center justify-center py-10">
                    <div className="relative w-full mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="order-2 md:order-1 text-center md:text-left">
                                <h2 className="at-border-head flex items-center text-xl">
                                    <span className="at-border relative mr-2.5 inline-block"></span>
                                    <span className="text-[#0A1A2F] pr-1">NOTABLE</span>ACHIEVEMENTS
                                </h2>
                                <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold">
                                    Experience <span className="text-[#0A1A2F] pr-1">Matters</span>
                                </h1>
                                <p className="mb-5 text-lg text-[#666766]">
                                    Our services include IoT, PCB design, Embedded systems, 3D design, software, machine learning, BOM services, and industrial problem-solving. We offer innovative hardware and software solutions, addressing industry challenges and driving efficiency. Trust us for scalable technology.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center hidden md:flex">
                                <img src={aboutPageImg3.src} className="w-[500px] h-[300px]" />
                            </div>
                            <div className="order-3 col-span-2 flex flex-wrap justify-center">
                                {data.map((item, index) => (
                                    <div key={index} className="w-full md:w-auto p-2">
                                        <div className="at-experience-box-des p-4 border rounded text-center">
                                            <h3 className="text-4xl font-bold text-[#0A1A2F]">{item.value}</h3>
                                            <p className="text-base">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
