
import React, { useState } from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    'Курси',
    'Про Mate',
    'Найняти випускника',
    'Навчання повного дня'
  ];

  return (
    <div className="fixed top-[8px] md:top-[16px] left-[8px] md:left-[16px] right-[8px] md:right-[16px] z-50">
      <header 
        className="max-w-[1408px] w-full mx-auto flex h-[64px] md:h-[72px] px-[16px] justify-between items-center bg-white rounded-[16px] shadow-[0_4px_12px_0_rgba(34,38,47,0.1)] relative"
      >
        <div className="flex items-center gap-[12px] md:gap-[40px]">
          <button 
            className="lg:hidden p-2 text-[#212631]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <img 
            src="https://preview--full-time-mate.lovable.app/assets/ma-logo_l-DTKw2m95.png" 
            alt="Mate Academy Logo" 
            className="h-[32px] md:h-[40px] w-auto"
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
        
        <Button className="hidden sm:inline-flex">Підібрати навчання</Button>
        <Button className="sm:hidden px-4 h-[40px] text-[12px]">Підібрати</Button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white rounded-[16px] shadow-xl p-4 flex flex-col gap-4 lg:hidden border border-gray-100">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-[#212631] font-semibold text-[16px] py-2 px-4 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};