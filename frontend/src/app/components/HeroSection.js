import React from "react";

const HeroSection = () => {
  return (
<div 
  className="relative min-h-[80vh] flex items-center bg-no-repeat" 
  style={{ 
    backgroundImage: "url('/images/students.jpeg')", 
    backgroundSize: "50%",  // Zooms out (default cover is 100%)
    backgroundPosition: "right center", // Moves image towards the right
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll"
  }}
>


      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/100 to-white/50 z-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate__animated animate__fadeIn">
          <span className="block">Welcome to</span>
          <span className="block text-maroon">Kumar Physics Classes</span>
          <span className="block text-yellow-500">Excellence in Physics Education</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
          Empowering students to achieve their dreams through quality physics education
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate__animated animate__fadeIn animate__delay-2s">
          <div className="rounded-md shadow">
            <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-maroon hover:bg-maroon/80 md:py-4 md:text-lg md:px-10">
              Join Now
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
