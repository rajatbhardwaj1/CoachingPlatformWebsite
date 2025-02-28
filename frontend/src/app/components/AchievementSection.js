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
    BitSatScore: 346,
    selection: 'IIT Delhi',
  },
  {
    name: 'Abhinav Setia',
    image: '/students/abhinavsetia.png',
    physicsMarks: '94/100',
    jeeMainsPercentile: '97.5%',
    jeeAdvancedRank: '8046',
    BitSatScore: 335,
    selection: 'BITS Pilani',
  },
];

const otherAchievers = [
  { name: 'Anil Yadav', image: '/students/anilyadav.jpeg', physicsMarks: '96/100', selection: 'NIT Jalandhar' },
  { name: 'Kriti Mahajan', image: '/students/kritimahajan.jpeg', physicsMarks: '92/100', percentile: '97.5', selection: 'DAVIET Jalandhar' },
  { name: 'Rahul', image: '/students/rahul.jpeg', physicsMarks: '95/100', selection: 'NIT Jalandhar' },
];

// Teacher's Pictures
const teacherImages = [
  { name: 'Er. Kumar Bharti', image: '/images/kumarbharti-1.png', description: 'Our Esteemed Mentor' },
  { name: 'With Students', image: '/images/withstudents.jpeg', description: 'Guiding Future Achievers' },
];

const AchievementSection = () => {
  return (
    <section id="achievements" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl font-bold text-white mb-4" animate={{ opacity: 1 }}>
            Our Achievements
          </motion.h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
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
              <p className="text-gray-400">BitSat Score: {achiever.BitSatScore || 'N/A'}</p>
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
                {achiever.percentile && <p className="text-gray-400">Percentile (MAINS): {achiever.percentile}</p>}
                {achiever.selection && <p className="text-yellow-400 font-semibold">{achiever.selection}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teacher's Images Section */}
        <div className="mt-16 text-center">
          <motion.h3 className="text-3xl font-bold text-white mb-12" animate={{ opacity: 1 }}>
            Meet Our Mentor
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teacherImages.map((teacher, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg p-6"
                animate={{ opacity: 1 }}
              >
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={300}
                  height={300}
                  className="w-60 h-60 object-cover mx-auto rounded-lg mb-4"
                />
                <h4 className="text-white text-xl font-semibold mb-2">{teacher.name}</h4>
                <p className="text-gray-400">{teacher.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-block bg-yellow-500 text-white px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:bg-yellow-600 transition-all duration-300"
            animate={{ opacity: 1 }}
          >
            Be Part of Our Legacy
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
