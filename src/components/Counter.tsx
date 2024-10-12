const Counter: React.FC = () => {
    return (
      <section className="bg-[#7091e6] text-[#ede8f5] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Students */}
          <div className="flex flex-col items-center">
            <div className="bg-[#ede8f5] p-4 rounded-full text-[#7091e6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a5 5 0 100-10 5 5 0 000 10z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mt-4">Students</h3>
            <p className="text-lg">Over 1000 students enrolled</p>
          </div>
  
          {/* Courses */}
          <div className="flex flex-col items-center">
            <div className="bg-[#ede8f5] p-4 rounded-full text-[#7091e6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-3.86 0-7 1.79-7 4v5h14v-5c0-2.21-3.14-4-7-4zM12 8c3.86 0 7 1.79 7 4v5H5v-5c0-2.21 3.14-4 7-4zm0-3a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mt-4">Courses</h3>
            <p className="text-lg">50+ courses available</p>
          </div>
  
          {/* Finished Courses */}
          <div className="flex flex-col items-center">
            <div className="bg-[#ede8f5] p-4 rounded-full text-[#7091e6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h1v1h-1v-1zm0 2h1v1H9v-1zm2 0h1v1h-1v-1zm0-2h1v1h-1v-1zm2 2h1v1h-1v-1zm0-2h1v1h-1v-1zm2 2h1v1h-1v-1zm0-2h1v1h-1v-1zm-8 4h10v1H7v-1z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mt-4">Courses Completed</h3>
            <p className="text-lg">800+ students completed courses</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Counter;
  