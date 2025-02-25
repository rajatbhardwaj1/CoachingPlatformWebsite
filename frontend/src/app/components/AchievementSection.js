'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const topAchievers = [
  {
    name: 'Rajat Bhardwaj',
    image: '/students/rajatbhardwaj.png',
    physicsMarks: '98/100',
    jeeMainsPercentile: '99.73%',
    jeeMainsRank: '3098',
    jeeAdvancedRank: '4096',
    selection: 'IIT Delhi',
  },
  {
    name: 'Abhinav Setia',
    image: '/students/abhinavsetia.png',
    physicsMarks: '94/100',
    jeeMainsPercentile: '97.5%',
    jeeAdvancedRank: '8046',
    selection: 'BITS Pilani',
  },
];

const otherAchievers = [
  { name: 'Anil Yadav', image: '/students/anilyadav.jpeg', physicsMarks: '96/100', selection: 'NIT Jalandhar' },
  { name: 'Kriti Mahajan', image: '/students/kritimahajan.jpeg', physicsMarks: '92/100' },
  { name: 'Rahul', image: '/students/rahul.jpeg', physicsMarks: '95/100', selection: 'NIT Jalandhar' },
];

const AchievementSection = () => {
  return (
    <section id="achievements" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl font-bold text-white mb-4" animate={{ opacity: 1 }}>
            Our Achievements
          </motion.h2>
          <div className="h-1 w-20 bg-[#ffc107] mx-auto"></div>
        </div>

        {/* Highlighted Top Achievers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topAchievers.map((achiever, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg p-8 text-center shadow-lg"
              animate={{ opacity: 1 }}
            >
              <Image
                src={achiever.image}
                alt={achiever.name}
                width={150}
                height={150}
                className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
                />
              <h3 className="text-white text-2xl font-semibold mb-2">{achiever.name}</h3>
              <p className="text-gray-400">Physics: {achiever.physicsMarks}</p>
              <p className="text-gray-400">JEE Mains Percentile: {achiever.jeeMainsPercentile || 'N/A'}</p>
              <p className="text-gray-400">JEE Mains Rank: {achiever.jeeMainsRank || 'N/A'}</p>
              <p className="text-gray-400">JEE Advanced Rank: {achiever.jeeAdvancedRank || 'N/A'}</p>
              <p className="text-yellow-400 font-semibold">{achiever.selection}</p>
            </motion.div>
          ))}
        </div>

        {/* Other Achievers */}
        <div className="mt-16 text-center">
          <motion.h3 className="text-3xl font-bold text-white mb-12" animate={{ opacity: 1 }}>
            Other High Achievers
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherAchievers.map((achiever, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg p-6"
                animate={{ opacity: 1 }}
              >
                <Image
                  src={achiever.image}
                  alt={achiever.name}
                  width={100}
                  height={100}
                  className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
                  />
                <h4 className="text-white text-xl font-semibold mb-2">{achiever.name}</h4>
                <p className="text-gray-400">Physics: {achiever.physicsMarks}</p>
                {achiever.selection && <p className="text-yellow-400 font-semibold">{achiever.selection}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-block bg-[#ffc107] text-neutral-900 px-8 py-3 rounded-md font-semibold hover:bg-[#ffcd38] transition-all duration-300"
            animate={{ opacity: 1 }}
          >
            Join Our Success Story
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;