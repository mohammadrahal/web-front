import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Courses {
  _id: string;
  courseName: string;
  duration: number;
  type: string;
  additionalInfo: {
    description: string;
    instructors: string[];
    materials: {
      title: string;
      content: string;
    }[];
  };
}

const Course: React.FC = () => {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getAllCourses`);
        setCourses(response.data.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  // Function to handle course purchase
  const handleBuyCourse = (courseId: string) => {
    // Replace the following toast with your purchase logic (e.g., redirect to a payment page)
    toast.success(`Course purchased: ${courseId}`, {
      position: 'top-right', // Use string literal for position
      autoClose: 3000, // Auto-close after 3 seconds
    });
  };

  return (
    <>
      <Header />
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">All Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.length === 0 ? (
            <p className="text-gray-500">No courses available</p>
          ) : (
            courses.map((course) => (
              <div key={course._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{course.courseName}</h2>
                <p className="text-gray-700">Duration: {course.duration} weeks</p>
                <p className="text-gray-700">Type: {course.type}</p>
                <p className="mt-2 text-gray-600">{course.additionalInfo.description}</p>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Materials:</h3>
                  <ul className="list-disc ml-5">
                    {course.additionalInfo.materials.map((material, index) => (
                      <li key={index}>
                        <strong>{material.title}:</strong> {material.content}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buy Course Button */}
                <button 
                  onClick={() => handleBuyCourse(course._id)} 
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Buy Course
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer/>
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </>
  );
};

export default Course;
