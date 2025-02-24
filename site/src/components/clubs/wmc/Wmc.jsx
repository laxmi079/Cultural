import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Guitar } from 'lucide-react';
import WmcMedalShowcase from './awardsWmc';
import FloatingWmcIcons from './bgWmc';
import WmcHelm from './wmcHelm';
import WmcCarousel from './eventsWmc';

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function Wmc() {
  return (
    <>
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center"
      >
        <h1 className="mt-8 mb-4 bg-gradient-to-br from-slate-300 to-slate-500 py-6 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Western Music Club
        </h1>

        <h2 className="mb-4 text-slate-400 text-3xl md:text-6xl font-medium">
          "Where Rhythm Meets Innovation"
        </h2>

        <p className="text-slate-100 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Western Music Club is a vibrant community of musicians and music enthusiasts dedicated to exploring and performing contemporary Western music styles, from rock and jazz to modern pop.
        </p>
      </motion.div>
    </LampContainer>
    
    <WmcMedalShowcase />
    <WmcCarousel />
    <WmcHelm />
    <FloatingWmcIcons 
      IconComponent={Guitar}
      iconCount={30}
      minSize={40}
      maxSize={300}
      opacity={0.15}
    />
    </>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      {/* Container content similar to other club components */}
      <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default Wmc; 