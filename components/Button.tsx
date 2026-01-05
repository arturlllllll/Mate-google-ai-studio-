
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex h-[48px] px-[24px] py-[12px] 
        justify-center items-center gap-[4px] 
        rounded-[10px] bg-[#E25544] hover:bg-[#C52A20] 
        text-white text-center font-bold text-[14px] 
        leading-[18px] tracking-[-0.28px] transition-colors duration-200
        ${className}
      `}
      style={{ fontFamily: 'Manrope' }}
    >
      {children}
    </button>
  );
};
