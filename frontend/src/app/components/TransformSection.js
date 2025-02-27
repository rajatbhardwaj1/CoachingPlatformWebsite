import React from "react";
import Image from 'next/image';

const TransformSection = () => {
    return (
        <div className="bg-gradient-to-r from-black to-[#000]">
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-32 sm:pb-16">
                {/* Background Images */}
                <div className="absolute inset-0 flex h-[50vh] sm:h-auto">
                    <div className="w-1/2 relative">
                        <Image 
                            src="/images/students.jpeg" 
                            alt="Students" 
                            layout="fill" 
                            objectFit="cover" 
                            className="opacity-60"
                        />
                    </div>
                    <div className="w-1/2 relative">
                        <Image 
                            src="/images/teacher.png" 
                            alt="Teacher" 
                            layout="fill" 
                            objectFit="cover" 
                            className="opacity-60"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                {/* Content */}
                <div className="relative text-center z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white animate__animated animate__fadeIn">
                        <span className="block">Transform Your</span>
                        <span className="block text-[#FFD700]">Physics Journey</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 max-w-md sm:max-w-lg mx-auto text-lg sm:text-xl text-gray-200 animate__animated animate__fadeIn animate__delay-1s">
                        Join Kumar Physics Classes to unlock your potential and achieve excellence in competitive exams through expert guidance and proven teaching methodologies.
                    </p>
                    
                    {/* Buttons */}
                    <div className="mt-6 sm:mt-10 flex justify-center gap-x-4 sm:gap-x-6 animate__animated animate__fadeIn animate__delay-2s">
                        <a href="#contact" className="rounded-md bg-[#800000] px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white shadow hover:bg-[#9a0000] transition-all duration-300">
                            Enroll Now
                        </a>
                        <a href="#features" className="rounded-md bg-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-black shadow hover:bg-gray-100 transition-all duration-300">
                            Learn More
                        </a>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-10 sm:mt-16 animate__animated animate__fadeIn animate__delay-3s">
    <dl className="flex flex-wrap justify-center w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl gap-x-6 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 text-center mx-auto">
        <div className="border-l-4 border-[#800000] pl-3 sm:pl-4 md:pl-6">
            <dt className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-gray-200">JEE/NEET Qualified</dt>
            <dd className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">100+</dd>
        </div>
        <div className="border-l-4 border-[#800000] pl-3 sm:pl-4 md:pl-6">
            <dt className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-gray-200">Students Mentored</dt>
            <dd className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">500+</dd>
        </div>
        <div className="border-l-4 border-[#800000] pl-3 sm:pl-4 md:pl-6">
            <dt className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold text-gray-200">Years Experience</dt>
            <dd className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">25+</dd>
        </div>
    </dl>
</div>


                </div>
            </div>
        </div>
    );
};

export default TransformSection;
