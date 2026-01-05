
import React from 'react';
import { CourseCard } from './CourseCard';
import { Course, TagType } from '../types';

export const CourseSection: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      tags: [TagType.SKORO_START, TagType.POPULARNA],
      subTitle: "Full-time",
      title: "Fullstack Web"
    },
    {
      id: 2,
      tags: [TagType.POPULARNA],
      subTitle: "Part-time",
      title: "Frontend"
    },
    {
      id: 3,
      tags: [TagType.BEZ_KODINGU],
      subTitle: "Full-time",
      title: "UI/UX Design"
    },
    {
      id: 4,
      tags: [TagType.SKORO_START],
      subTitle: "Part-time",
      title: "Python"
    },
    {
      id: 5,
      tags: [TagType.POPULARNA, TagType.BEZ_KODINGU],
      subTitle: "Full-time",
      title: "QA Engine"
    },
    {
      id: 6,
      tags: [TagType.SKORO_START],
      subTitle: "Part-time",
      title: "Java"
    }
  ];

  return (
    <section className="bg-[#F5F6FA] py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[1408px] mx-auto bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-12 lg:p-[120px]">
        <div className="mb-[40px] md:mb-[64px] flex flex-col items-center text-center">
          <span className="text-micro-s block mb-[12px] md:mb-[16px]">ЧОГО МИ НАВЧАЄМО</span>
          <h2 className="text-[#212631] text-[28px] md:text-[48px] font-bold leading-tight px-4">
            Популярні професії
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[24px]">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};