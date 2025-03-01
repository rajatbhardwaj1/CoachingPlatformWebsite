import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center text-white min-h-[75vh] bg-[#151515] p-6">
      <div className="relative z-10 max-w-4xl w-full px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-100">
          Kumar Physics Classes
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
          Empowering students to achieve excellence in Physics through innovative teaching methods and personalized attention.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-2xl">JEE</span>
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-2xl">NEET</span>
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-2xl">11th & 12th</span>
          <span className="flex items-center justify-center px-6 py-2 bg-gray-700 rounded-lg text-white font-medium text-xl">9th & 10th (Science & Math)</span>
        </div>

        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
          Join Kumar Physics classes to unlock your potential and achieve excellence in competitive and board exams with our expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Enroll Now
          </a>
          {/* <a href="#about" className="border border-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Explore Courses
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;