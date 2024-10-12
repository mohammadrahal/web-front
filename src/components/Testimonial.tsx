import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'This course changed my life! I learned so much in a short time.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Jane Smith',
    testimonial: 'The instructors are fantastic and very supportive!',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
  {
    name: 'Emily Johnson',
    testimonial: 'I feel confident in my skills now. Highly recommend!',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-6">What Our Students Say</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
            <p className="text-gray-600 text-center">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
