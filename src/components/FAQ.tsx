import React from 'react';

const faqs = [
  {
    question: 'What is the duration of the courses?',
    answer: 'The duration varies from course to course, typically ranging from 4 to 8 weeks.',
  },
  {
    question: 'Are there any prerequisites for enrolling in a course?',
    answer: 'It depends on the course. Some courses may require prior knowledge of programming, while others do not.',
  },
  {
    question: 'Can I get a certificate after completing a course?',
    answer: 'Yes, all our courses provide a certificate upon successful completion.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl text-center font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-7xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
