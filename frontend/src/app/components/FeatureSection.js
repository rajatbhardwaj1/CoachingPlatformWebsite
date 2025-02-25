'use client';

import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaClipboardList, FaBookOpen, FaComments, FaHeadset, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: FaChalkboardTeacher, title: 'Expert Faculty', description: 'Experienced teachers with proven track record in producing top rankers' },
  { icon: FaClipboardList, title: 'Regular Tests', description: 'Weekly assessments and mock exams to track your progress' },
  { icon: FaBookOpen, title: 'Study Material', description: 'Comprehensive study notes and practice sheets provided' },
  { icon: FaComments, title: 'Doubt Sessions', description: 'Regular doubt clearing sessions for personalized attention' },
  { icon: FaHeadset, title: 'Online Support', description: '24/7 online support for continuous learning' },
  { icon: FaChartLine, title: 'Performance Tracking', description: 'Detailed analysis and progress reports for each student' }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Features</h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-neutral-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-14 w-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <a href="#contact" className="inline-block bg-yellow-400 text-neutral-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300">
            Explore Our Features
          </a>
        </div>
      </div>
    </section>
  );
}