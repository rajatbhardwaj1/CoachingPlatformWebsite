'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Deepak Verma',
    text: 'The practice sessions and doubt clearing classes were extremely helpful.',
    rank: 'AIR 156'
  },
  {
    name: 'Sneha Patel',
    text: 'Kumar Physics Classes helped me build a strong foundation in physics.',
    rank: 'AIR 203'
  },
  {
    name: 'Rajesh Kumar',
    text: 'The faculty\'s guidance was instrumental in my success.',
    rank: 'AIR 189'
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="success-stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">What Our Students Say</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-20 bg-neutral-100 rounded-xl p-8">
          
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ translateX: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-neutral-700 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900">{testimonial.name}</span>
                      <span className="text-yellow-400 font-medium">rank</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-lg"
            >
              &#8592;
            </button>
            
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-lg"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
