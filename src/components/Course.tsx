import React from 'react';
import CourseCard from './course/courseCard';

const Course: React.FC = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Available Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        <CourseCard courseName="TypeScript " duration="6 Weeks" courseType="TS Backend" />
        <CourseCard courseName="Node.js Masterclass" duration="8 Weeks" courseType="Full-Stack" />
        <CourseCard courseName="Frontend " duration="5 Weeks" courseType="Frontend" />
        <CourseCard courseName="JavaScript Essentials" duration="4 Weeks" courseType="JavaScript" />
        <CourseCard courseName="Full-Stack Development " duration="10 Weeks" courseType="Full-Stack" />
        <CourseCard courseName="English" duration="8 Weeks" courseType="Language" />
      </div>
    </div>
  );
};

export default Course;
