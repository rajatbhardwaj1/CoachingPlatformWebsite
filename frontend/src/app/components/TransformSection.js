import React from "react";
import Image from 'next/image';

const TransformSection = () => {
    return (
        <div className="bg-gradient-to-r from-black to-[#000]">

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="absolute inset-0 flex">
                    <div className="w-[50%] relative scale-100">
                        <Image src="/images/students.jpeg" alt="Students" layout="fill" objectFit="cover" className="opacity-60" />
                        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-l from-transparent to-black"></div>
                        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-black"></div>


                    </div>
                    <div className="w-[50%] relative scale-100 ">
                        <Image src="/images/teacher.png" alt="Teacher" layout="fill" objectFit="cover" className="opacity-60" />
                        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-black"></div>
                        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-l from-transparent to-black"></div>


                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                <div className="relative text-center z-10">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl animate__animated animate__fadeIn">
                        <span className="block">Transform Your</span>
                        <span className="block text-[#FFD700]">Physics Journey</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl animate__animated animate__fadeIn animate__delay-1s">
                        Join Kumar Physics Classes to unlock your potential and achieve excellence in competitive exams through expert guidance and proven teaching methodologies.
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6 animate__animated animate__fadeIn animate__delay-2s">
                        <a href="#contact" className="rounded-md bg-[#800000] px-8 py-3 text-lg font-semibold text-white shadow hover:bg-[#9a0000] transition-all duration-300">
                            Enroll Now
                        </a>
                        <a href="#features" className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-black shadow hover:bg-gray-100 transition-all duration-300">
                            Learn More
                        </a>
                    </div>
                    <div className="mt-16 animate__animated animate__fadeIn animate__delay-3s">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 lg:px-16">
                            <div className="border-l-4 border-[#800000] pl-4">
                                <dt className="text-base font-semibold leading-7 text-gray-200">JEE/NEET qualified</dt>
                                <dd className="text-3xl font-bold leading-9 text-white">100+</dd>
                            </div>
                            <div className="border-l-4 border-[#800000] pl-4">
                                <dt className="text-base font-semibold leading-7 text-gray-200">Students Mentored</dt>
                                <dd className="text-3xl font-bold leading-9 text-white">1000+</dd>
                            </div>
                            <div className="border-l-4 border-[#800000] pl-4">
                                <dt className="text-base font-semibold leading-7 text-gray-200">Years Experience</dt>
                                <dd className="text-3xl font-bold leading-9 text-white">25+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransformSection;
