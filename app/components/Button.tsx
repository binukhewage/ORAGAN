import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { classNames } from '../components/classNames';  

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'default' | 'alternative';
  className?: string;  
}

const Button: FC<ButtonProps> = ({ href, children, variant = 'default', className }) => {
  const defaultStyle = `relative w-fit block text-white px-4 py-2 overflow-hidden border border-[#0A1A2F] bg-[#0A1A2F] text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:bg-blue-800 hover:before:-translate-x-40 rounded-lg flex items-center justify-center`;
  const alternativeStyle = `relative text-sm w-fit block text-[#0A1A2F] px-4 py-2 overflow-hidden border border-[#0A1A2F] bg-white text-[#0A1A2F] transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:bg-[#0A1A2F] hover:text-white hover:before:-translate-x-40 rounded-lg flex items-center justify-center`;

  return (
    <Link
      className={classNames(variant === 'default' ? defaultStyle : alternativeStyle)}
      href={href}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Button;
