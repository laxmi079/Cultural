import React, { useState } from 'react';
import { motion } from 'framer-motion';

const medals = [
  { id: 1, src: '/silver.png', title: 'Group Singing', year: '2017', location: 'Kashiyatra' },
  { id: 2, src: '/bronze.png', title: 'Solo Instrumental', year: '2017', location: 'Waves, BITS Goa' },
  { id: 3, src: '/gold.png', title: 'Solo Singing', year: '2017', location: 'IIT Kanpur' },
];

const ImcMedalShowcase = () => {
  const [hoveredMedal, setHoveredMedal] = useState(null);

  return (
    <div className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Centered glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[70%] rounded-full bg-cyan-500/20 blur-3xl opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {medals.map((medal, index) => (
            <motion.div
              key={medal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setHoveredMedal(medal.id)}
              onMouseLeave={() => setHoveredMedal(null)}
            >
              <div className="relative rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-cyan-500/10 transition-all duration-300 group-hover:border-cyan-500/30">
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <img 
                      src={medal.src} 
                      alt={medal.title} 
                      className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">{medal.title}</h3>
                    <p className="text-slate-400">{medal.year}</p>
                    <p className="text-slate-500">{medal.location}</p>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImcMedalShowcase;
