import React from 'react';

interface CourseProps {
  courseName: string;
  duration: string;
  courseType: string;
}

const courseCard: React.FC<CourseProps> = ({ courseName, duration, courseType }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto w-72 h-52 flex flex-col justify-center align-items-cnter">
      <h2 className="text-xl font-bold mb-2">{courseName}</h2>
      <p className="text-gray-700 mb-2">Duration: {duration}</p>
      <p className="text-gray-700">Type: {courseType}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default courseCard;
