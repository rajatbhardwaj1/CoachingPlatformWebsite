import React from "react";

const FacultySection = () => {
  return (
    <div className="bg-gray-100 text-black py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 animate__animated animate__fadeIn">
          Our Faculty
        </h2>
        <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Faculty Member 1 */}
        <div className="animate__animated animate__fadeInUp bg-gray-200 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Er. Kumar Bharti</h3>
          <p className="text-gray-700 font-semibold">Physics Educator</p>
          <p className="text-gray-700">NEET | JEE | 11th | 12th (Phy)</p>
          <p className="text-gray-700">9th | 10th Science</p>
          <p className="text-gray-700 mt-2">Experience: 25+ years</p>
        </div>

        {/* Faculty Member 2 */}
        <div className="animate__animated animate__fadeInUp bg-gray-200 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Ms. Priya</h3>
          <p className="text-gray-700 font-semibold">Science Educator</p>
          <p className="text-gray-700">MSc Zoology | BEd</p>
          <p className="text-gray-700">9th | 10th Science</p>
          <p className="text-gray-700 mt-2">Experience: 12 years+</p>
        </div>

        {/* Faculty Member 3 */}
        <div className="animate__animated animate__fadeInUp bg-gray-200 p-8 rounded-lg shadow-lg text-center py-11">
          <h3 className="text-2xl font-bold text-black mb-4">Mr. Rajiv Kapoor</h3>
          <p className="text-gray-700 font-semibold">Mathematics Educator</p>
          <p className="text-gray-700">9th | 10th Maths</p>
          

          <p className="text-gray-700 mt-2">Experience: 25+ years</p>
        </div>
      </div>
    </div>
  );
};

export default FacultySection;