 
import React, { FC } from 'react';

interface SectionHeaderProps {
  id: string;
  title: string;
  highlight: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ id, title, highlight }) => (
  <section id={id} className="h-[90vh] w-full items-center justify-center p-[50px]">
    <h2 className="at-border-head flex items-center text-2xl">
      <span className="at-border relative mr-2.5 inline-block "></span>
      <span className="text-[#0A1A2F] pr-1">{highlight}</span>{title}
    </h2>
    <h1 className="text-6xl pb-3 pt-3 font-bold items-center">
      {title} <span className="text-[#0A1A2F] pr-1">{highlight}</span>
    </h1>
  </section>
);

export default SectionHeader;
