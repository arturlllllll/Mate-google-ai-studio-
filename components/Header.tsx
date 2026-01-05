
import React from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const menuItems = [
    'Курси',
    'Про Mate',
    'Найняти випускника',
    'Навчання повного дня'
  ];

  return (
    <div className="fixed top-[16px] left-[16px] right-[16px] z-50">
      <header 
        className="max-w-[1408px] w-full mx-auto flex h-[72px] p-[16px] justify-between items-center bg-white rounded-[16px] shadow-[0_1px_2px_0_rgba(34,38,47,0.08)]"
      >
        <div className="flex items-center gap-[40px]">
          <img 
            src="https://preview--full-time-mate.lovable.app/assets/ma-logo_l-DTKw2m95.png" 
            alt="Mate Academy Logo" 
            className="h-[40px] w-auto"
          />
          <nav className="hidden lg:flex items-center gap-[24px]">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[#000000] font-medium text-[14px] hover:text-[#E25544] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <Button>Підібрати навчання</Button>
      </header>
    </div>
  );
};
