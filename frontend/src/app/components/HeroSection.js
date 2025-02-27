import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-black">

      {/* Background Image with Left-Side Gradient */}
      <div
  className="absolute inset-0 w-full h-full bg-no-repeat bg-cover md:bg-contain gradient-bg"
  style={{
    backgroundImage: "linear-gradient(to right, black 5%, transparent 100%), url('/images/teaching-landscape.png')",
    backgroundPosition: "left center",
    backgroundSize: "cover",
    backgroundPositionY: "30%", // Adjust this value to move the image down
  }}
></div>



      {/* Overlay for Mobile */}
      <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>

      {/* <style>
        {`
          @media (max-width: 1600px) {
            .gradient-bg {
              background-image: linear-gradient(to right, black 40%, transparent 100%), url('/images/teaching-landscape.png') !important;
            }
          }
          @media (max-width: 1400px) {
            .gradient-bg {
              background-image: linear-gradient(to right, black 30%, transparent 100%), url('/images/teaching-landscape.png') !important;
            }
          }
          @media (max-width: 1200px) {
            .gradient-bg {
              background-image: linear-gradient(to right, black 20%, transparent 100%), url('/images/teaching-landscape.png') !important;
            }
          }
          @media (max-width: 1000px) {
            .gradient-bg {
              background-image: linear-gradient(to right, black 10%, transparent 80%), url('/images/teaching-landscape.png') !important;
            }
          }
        `}
      </style> */}

      {/* Content */}
      <div className="relative z-20 w-full text-center max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white animate__animated animate__fadeIn">
          <span className="block">Welcome to</span>
          <span className="block text-maroon">Kumar Physics Classes</span>
          <span className="block text-yellow-500">Excellence in Physics Education</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-sm text-gray-300 sm:text-base md:mt-5 md:text-lg md:max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
          Empowering students to achieve their dreams through quality physics education
        </p>
        <div className="mt-5 flex justify-center animate__animated animate__fadeIn animate__delay-2s">
          <a
            href="#contact"
            className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-md text-white bg-maroon hover:bg-maroon/80 transition-all"
          >
            Join Now
          </a>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
