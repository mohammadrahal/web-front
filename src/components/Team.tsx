import React from 'react';

const Team = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>

        <div className="flex justify-center space-x-8">
          {/* Team Member Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
            <img
              src="https://via.placeholder.com/300"
              alt="Team Member 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">Software Engineer</p>
              <p className="mt-2 text-gray-700">
                John is a passionate software engineer with 5 years of experience in full-stack development.
              </p>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs">
            <img
              src="https://via.placeholder.com/300" // Replace with your image URL
              alt="Team Member 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">UX/UI Designer</p>
              <p className="mt-2 text-gray-700">
                Jane is a creative designer who focuses on crafting user-friendly experiences and beautiful interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
