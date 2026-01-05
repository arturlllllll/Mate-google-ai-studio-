
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseSection } from './components/CourseSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F6FA] selection:bg-[#E25544] selection:text-white">
      <Header />
      <main>
        <Hero />
        <CourseSection />
      </main>
    </div>
  );
};

export default App;
