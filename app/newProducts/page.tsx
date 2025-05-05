import React from 'react';
import NewServiceCard from '../components/newServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faBalanceScale, faIndustry, faProjectDiagram, faDraftingCompass, faVial } from '@fortawesome/free-solid-svg-icons';

const newProducts = () => {
  const newServices = [
    {
      number: '01',
      title: 'Proof of Concept (POC) Development',
      link: '/services/service01',
      icon: <FontAwesomeIcon icon={faVial} className="text-white text-3xl" />
    },
    {
      number: '02',
      title: 'Prototype Development',
      link: '/services/service02',
      icon: <FontAwesomeIcon icon={faDraftingCompass} className="text-white text-3xl" />
    },
    {
      number: '03',
      title: 'Design for Manufacturing (DFM)',
      link: '/services/service03',
      icon: <FontAwesomeIcon icon={faProjectDiagram} className="text-white text-3xl" />
    },
    {
      number: '04',
      title: 'Full-scale Manufacturing',
      link: '/services/service04',
      icon: <FontAwesomeIcon icon={faIndustry} className="text-white text-3xl" />
    },
    {
      number: '05',
      title: 'Marketing & Launch Support',
      link: '/services/service05',
      icon: <FontAwesomeIcon icon={faBullhorn} className="text-white text-3xl" />
    },
    {
      number: '06',
      title: 'Patent Application Guidance',
      link: '/services/service06',
      icon: <FontAwesomeIcon icon={faBalanceScale} className="text-white text-3xl" />
    },
  ];
  return (
    <main>
      <section className="h-[50vh] w-full flex items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0A1A2F] z-1"></div>
        <div className="relative w-full h-[50vh] flex items-center justify-center">
          <div className="mt-[80px]">
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
              <h2 className="at-border-head flex items-center text-xl">
                <span className="at-border relative mr-2.5 inline-block"></span>
                <span className="text-white pr-1">Idea to Products</span>
              </h2>
              <h1 className="text-4xl md:text-6xl pb-3 pt-3 font-bold">
                <span className="text-white pr-1">Turn Concepts into Real-World Solutions</span>
              </h1>
            </div>

          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 items-center justify-center p-[50px] space-y-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {newServices.map((newservice, index) => (
            <NewServiceCard
              key={index}
              number={newservice.number}
              title={newservice.title}
              link={newservice.link}
              icon={newservice.icon} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default newProducts; 
