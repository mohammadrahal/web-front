import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />

      <div className="py-10">
        <h1 className="text-4xl text-center font-bold mb-8">About Us</h1>

        <div className="max-w-7xl mx-auto px-4 mb-10 space-y-6">
          {/* Card Section for Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Our vision is to empower individuals through quality education and training in technology. We strive to create a world where everyone has access to the knowledge and resources they need to succeed in their careers and personal lives.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to provide high-quality, affordable online courses that cater to diverse learning needs. We aim to foster a supportive learning environment that encourages creativity, collaboration, and continuous growth.
              </p>
            </div>
          </div>

          {/* Divider with Title */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <hr className="border-gray-300 w-full" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-lg font-semibold text-gray-700">Our Values</span>
            </div>
          </div>



          {/* Second Section: Values and Story */}
          <section>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
              <li>Innovation: We embrace innovation to enhance the learning experience.</li>
              <li>Inclusivity: We promote inclusivity and diversity in our learning community.</li>
              <li>Excellence: We strive for excellence in everything we do.</li>
              <li>Collaboration: We believe in the power of collaboration and teamwork.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in [Year], we started with a simple goal: to make learning accessible to everyone. Over the years, we have grown into a vibrant community of learners and educators, and we are proud of the impact we have made. Our team is passionate about education and dedicated to helping our students achieve their goals.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
