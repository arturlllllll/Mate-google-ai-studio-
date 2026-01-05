
import React from 'react';
import { Course, TagType } from '../types';

interface CourseCardProps {
  course: Course;
}

const Tag: React.FC<{ type: TagType }> = ({ type }) => {
  let style = "";
  switch (type) {
    case TagType.SKORO_START:
      style = "bg-[#E25544] text-white";
      break;
    case TagType.POPULARNA:
      style = "bg-[#5955F4] text-white";
      break;
    case TagType.BEZ_KODINGU:
      style = "bg-white text-[#464E62] border border-gray-100 shadow-sm";
      break;
  }

  return (
    <span className={`inline-flex items-center h-[28px] md:h-[32px] px-[10px] md:px-[12px] rounded-full text-[11px] md:text-[12px] font-bold tracking-[-0.01em] md:tracking-[-0.02em] ${style}`}>
      {type}
    </span>
  );
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="relative h-auto min-h-[180px] md:h-[228px] bg-[#F5F6FA] rounded-[24px] p-6 md:p-[32px] group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 z-10 mb-4 md:mb-0">
        {course.tags.map((tag, idx) => (
          <Tag key={idx} type={tag} />
        ))}
      </div>

      {/* Illustration */}
      <div className="absolute top-[10px] md:top-[20px] right-[10px] md:right-[20px] pointer-events-none">
        <img 
          src="https://preview--full-time-mate.lovable.app/assets/course-card-illustration-ncTibKXp.png" 
          alt="Illustration" 
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain group-hover:scale-105 transition-transform duration-300 opacity-60 md:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[8px] md:gap-[16px] mt-auto">
        <span className="text-micro-m uppercase">{course.subTitle}</span>
        <h3 className="text-headline-xs pr-12 md:pr-0">{course.title}</h3>
      </div>
    </div>
  );
};