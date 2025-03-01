import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 text-black py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 animate__animated animate__fadeIn">
          About Kumar Physics Classes
        </h2>
        <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="animate__animated animate__fadeInLeft bg-gray-200 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            At Kumar Physics Classes, we are dedicated for providing exceptional education. Students are taught as well as guided to make them aware of various career opportunities to generate toughness and confidence in them.
          </p>
        </div>

        <div className="animate__animated animate__fadeInRight bg-gray-200 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Why Choose Us?</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Expert faculty with 25 years of experience
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Personalized attention to every student
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Comprehensive study material
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Recorded video lectures
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Regular evaluation through frequent tests
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> Special attention to numerical problems
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 font-bold mr-2">•</span> MCQs practice for Board class students
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center animate__animated animate__fadeIn">
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-all duration-300"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
