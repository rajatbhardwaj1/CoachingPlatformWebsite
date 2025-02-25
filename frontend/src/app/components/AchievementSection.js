'use client';

import { motion } from 'framer-motion';

const achievements = [
  { number: '500+', title: 'IIT-JEE Selections', description: 'Students qualified for premier institutions' },
  { number: '95%', title: 'Success Rate', description: 'Consistent performance over the years' },
  { number: '1000+', title: 'NEET Qualifiers', description: 'Students achieving their medical dreams' },
];

const topRankers = [
  { rank: 'AIR 1', name: 'Rahul Kumar', exam: 'JEE Advanced 2023', percentile: '99.99 percentile' },
  { rank: 'AIR 5', name: 'Priya Singh', exam: 'NEET 2023', percentile: '99.95 percentile' },
  { rank: 'AIR 8', name: 'Amit Sharma', exam: 'JEE Mains 2023', percentile: '99.92 percentile' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              animate={{ opacity: 1 }}
            >
              <div className="text-[#ffc107] text-5xl font-bold mb-4">{ach.number}</div>
              <h3 className="text-white text-xl font-semibold mb-2">{ach.title}</h3>
              <p className="text-gray-400">{ach.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.h3 className="text-3xl font-bold text-white mb-12" animate={{ opacity: 1 }}>
            Our Top Rankers
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRankers.map((ranker, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg p-6"
                animate={{ opacity: 1 }}
              >
                <div className="text-[#ffc107] font-bold mb-2">{ranker.rank}</div>
                <h4 className="text-white text-xl font-semibold mb-2">{ranker.name}</h4>
                <p className="text-gray-400">{ranker.exam}</p>
                <div className="mt-4">
                  <span className="inline-block bg-[#ffc107] text-neutral-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {ranker.percentile}
                  </span>
                </div>
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
