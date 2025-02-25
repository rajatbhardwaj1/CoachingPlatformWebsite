import React from "react";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
          About Kumar Physics Classes
        </h2>
        <div className="h-1 w-20 bg-[#ffc107] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate__animated animate__fadeInLeft">
          <div className="bg-neutral-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
            <p className="text-neutral-700 mb-6">
              At Kumar Physics Classes, we are dedicated to providing exceptional
              physics education that empowers students to excel in competitive
              examinations and build strong foundational knowledge.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ffc107] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-700">Expert Faculty with 20+ Years Experience</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ffc107] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-700">Personalized Attention to Every Student</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ffc107] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-neutral-700">Comprehensive Study Material</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <div className="bg-neutral-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[#ffc107] pl-4">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Proven Track Record</h4>
                <p className="text-neutral-700">
                  Consistently producing top rankers in competitive exams with over 1000+ students qualified for JEE and NEET.
                </p>
              </div>
              <div className="border-l-4 border-[#ffc107] pl-4">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Interactive Learning</h4>
                <p className="text-neutral-700">
                  Engaging teaching methods that make complex concepts easy to
                  understand and remember.
                </p>
              </div>
              <div className="border-l-4 border-[#ffc107] pl-4">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Regular Assessment</h4>
                <p className="text-neutral-700">
                  Frequent tests and detailed performance analysis to track
                  progress and improve weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center animate__animated animate__fadeIn">
        <a
          href="#contact"
          className="inline-block bg-[#ffc107] text-neutral-900 px-8 py-3 rounded-md font-semibold hover:bg-[#ffcd38] transition-all duration-300"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
