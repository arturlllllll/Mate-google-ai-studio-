
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
      style = "bg-white text-[#464E62] border border-gray-100";
      break;
  }

  return (
    <span className={`inline-flex items-center h-[32px] px-[12px] rounded-full text-[12px] font-bold tracking-[-0.02em] ${style}`}>
      {type}
    </span>
  );
};

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="relative h-[228px] bg-[#F5F6FA] rounded-[24px] p-[32px] group cursor-pointer hover:shadow-lg transition-all duration-300">
      {/* Tags */}
      <div className="absolute top-[32px] left-[32px] flex flex-wrap gap-2 z-10">
        {course.tags.map((tag, idx) => (
          <Tag key={idx} type={tag} />
        ))}
      </div>

      {/* Illustration */}
      <div className="absolute top-[20px] right-[20px]">
        <img 
          src="https://preview--full-time-mate.lovable.app/assets/course-card-illustration-ncTibKXp.png" 
          alt="Illustration" 
          className="w-[120px] h-[120px] object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-[32px] left-[32px] flex flex-col gap-[16px]">
        <span className="text-micro-m uppercase">{course.subTitle}</span>
        <h3 className="text-headline-xs">{course.title}</h3>
      </div>
    </div>
  );
};
