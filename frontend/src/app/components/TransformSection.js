import React from "react";

const TransformSection = () => {
    return (
        <div className="bg-white text-black text-center py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                    Transform Your Physics Journey
                </h1>
               
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Enroll Now
                    </a>
                    <a href="#features" className="border border-gray-400 hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-lg transition duration-300">
                        Learn More
                    </a>
                </div>
                <div className="mt-10">
                    <dl className="flex flex-wrap justify-center gap-x-12 text-center">
                        <div className="border-l-4 border-yellow-500 pl-4">
                            <dt className="text-lg font-semibold text-gray-700">JEE/NEET Qualified</dt>
                            <dd className="text-3xl font-bold text-black">250+</dd>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-4">
                            <dt className="text-lg font-semibold text-gray-700">Students Educator</dt>
                            <dd className="text-3xl font-bold text-black">1000+</dd>
                        </div>
                        <div className="border-l-4 border-yellow-500 pl-4">
                            <dt className="text-lg font-semibold text-gray-700">Years Experience</dt>
                            <dd className="text-3xl font-bold text-black">25+</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default TransformSection;