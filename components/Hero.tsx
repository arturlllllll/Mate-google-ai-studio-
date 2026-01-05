
import React from 'react';
import { Button } from './Button';

const HeroTag: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <span className="text-lg">{icon}</span>
    <span className="text-[14px] font-semibold text-[#464E62]">{text}</span>
  </div>
);

const StatIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex w-[88px] h-[88px] p-[8px] flex-col justify-center items-center gap-[8px] rounded-[16px] bg-[#2A2F3C] flex-shrink-0">
    {children}
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section 
      className="pt-[110px] pb-[20px] px-6 md:px-12 bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: 'url(https://preview--full-time-mate.lovable.app/images/hero-bg.png)' }}
    >
      <div className="max-w-[1408px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-[40px]">
          <div className="lg:w-1/2 flex flex-col items-start gap-6">
            <div className="flex flex-wrap gap-4">
              <HeroTag icon="👥" text="Для новачків" />
              <HeroTag icon="⭐" text="4.9/5 в Google" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-headline-l">
                Онлайн-курси<br />ІТ-професій
              </h1>
              <p className="text-subtitle max-w-[440px]">
                З нуля до першої роботи в ІТ
              </p>
            </div>

            <Button className="w-full sm:w-auto mt-2">До списку професій</Button>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
             {/* People image - shifted up via smaller translate */}
            <img 
              src="https://preview--full-time-mate.lovable.app/assets/hero-people-D8slc-1r.png" 
              alt="Successful students" 
              className="w-full max-w-[640px] h-auto object-contain relative z-[-1] translate-y-[40px]"
            />
          </div>
        </div>

        {/* Stats Blocks Container - Overlapping more compactly */}
        <div className="flex flex-col xl:flex-row gap-[32px] items-stretch relative z-20 mt-[-100px]">
          
          {/* Black Section */}
          <div className="flex-1 flex flex-wrap lg:grid lg:grid-cols-2 gap-[32px] p-[32px] items-center rounded-[32px] bg-[#212631] shadow-2xl">
            {/* Item 1 */}
            <div className="flex items-center gap-[24px]">
              <StatIcon>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5L22.5 15H32.5L24.5 21L27.5 31L20 25L12.5 31L15.5 21L7.5 15H17.5L20 5Z" fill="#FFD700"/>
                  <circle cx="20" cy="20" r="18" stroke="#E25544" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </StatIcon>
              <p className="text-white text-[16px] font-medium leading-[24px]">
                Місія — допомогти кожному, де б він не був, побудувати кар’єру в ІТ
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-[24px]">
              <StatIcon>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </StatIcon>
              <p className="text-white text-[16px] font-medium leading-[24px]">
                Отримали нагороду «Rising Star» від Google for Startups
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-[24px]">
              <StatIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </StatIcon>
              <p className="text-white text-[16px] font-medium leading-[24px]">
                З 2022 навчаємо ІТ-професіям у Польщі та Бразилії
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-[24px]">
              <StatIcon>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </StatIcon>
              <p className="text-white text-[16px] font-medium leading-[24px]">
                Навчаємо та працевлаштовуємо айтівців понад 11 років
              </p>
            </div>
          </div>

          {/* Purple Section */}
          <div className="w-full xl:w-[392px] p-[32px] flex flex-col items-start gap-[32px] rounded-[32px] bg-[#5955F4] shadow-2xl">
            <div className="flex flex-col gap-[12px]">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#5955F4] bg-gray-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p className="text-white text-[14px] font-semibold leading-[20px]">
                4,300+ мейтівців вже працюють в ІТ
              </p>
            </div>

            <h2 className="text-white text-[80px] font-extrabold leading-[80px] tracking-[-4px]">
              90%
            </h2>

            <p className="text-white text-[16px] font-medium leading-[24px]">
              наших студентів не мали технічної освіти чи досвіду в ІТ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
