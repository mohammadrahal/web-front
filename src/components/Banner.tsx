import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="relative bg-blue-800 h-[600px] sm:h-[700px] lg:h-[800px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      
      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-5xl">
            WELCOME TO <span className="text-yellow-400">AMAL ACADEMY!</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Build confidence through expert-led courses and hands-on projects that bring real-world coding to life.
          </p>
          <button className="mt-6 border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-2 px-6 rounded-full transition duration-300">
            TAKE A TOUR
          </button>
        </div>
      </div>

      {/* Student Image (Optional) */}
      {/* <div className="absolute bottom-0 left-0 transform translate-y-1/4">
        <img src="/path-to-student-image.png" alt="Student" className="h-[400px] object-cover" />
      </div> */}

      {/* Cards */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 sm:mt-0 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:transform sm:translate-y-1/2 px-4 sm:px-0">
        <div className="bg-pink-500 text-white text-center px-10 py-8 w-full sm:w-64 lg:w-80 rounded-lg shadow-lg transition-all hover:scale-105 duration-300">
          <h3 className="font-bold text-lg sm:text-xl">STUDENT EVENTS</h3>
          <p className="mt-2 text-sm sm:text-base">Exciting activities</p>
        </div>
        <div className="bg-orange-400 text-white text-center px-10 py-8 w-full sm:w-64 lg:w-80 rounded-lg shadow-lg transition-all hover:scale-105 duration-300">
          <h3 className="font-bold text-lg sm:text-xl">CLASSROOM STORIES</h3>
          <p className="mt-2 text-sm sm:text-base">Engaging lessons</p>
        </div>
        <div className="bg-teal-500 text-white text-center px-10 py-8 w-full sm:w-64 lg:w-80 rounded-lg shadow-lg transition-all hover:scale-105 duration-300">
          <h3 className="font-bold text-lg sm:text-xl">TEACHERS PEOPLE</h3>
          <p className="mt-2 text-sm sm:text-base">Inspiring leaders</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
