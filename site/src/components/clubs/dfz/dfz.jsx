import React from 'react';
import { motion } from 'framer-motion';
// import { FloatingBackground, musicNotePath } from './musicBg';
// import { Music, Star, Heart } from 'lucide-react';
import { Headphones, Guitar } from 'lucide-react';
import DfzHelm from './dfzHelm';
import DfzCarousel from './eventsDfz';
import { IoWalk } from "react-icons/io5";
import FloatingMusicIcons from './bgDfz';
import DfzMedalShowcase from './awardsDfz';

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export function Dfz() {
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
          <motion.h1 
            className="mt-8 mb-4 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 py-6 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Dance Club
          </motion.h1>

          <motion.h2 
            className="mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-3xl md:text-6xl lg:text-7xl font-semibold text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            "Grace in Motion, DFZ, IIT BHU"
          </motion.h2>

          <motion.p 
            className="text-slate-300 font-normal text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Dance Freakz IIT BHU fosters a love for dance through street battles, duets, group dance, 
            and various Western and Indian dance forms. We teach beginners, helping them develop skills 
            and passion for the art.
          </motion.p>
        </motion.div>
      </LampContainer>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20"
      >
        <DfzMedalShowcase />
        <DfzCarousel />
        <DfzHelm />
        <FloatingMusicIcons 
          IconComponent={IoWalk}
          iconCount={30}
          minSize={20}
          maxSize={150}
          opacity={0.15}
        />
      </motion.div>
    </>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div className={cn(
      "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 w-full rounded-md z-0",
      className
    )}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-amber-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-amber-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-amber-500 opacity-50 blur-3xl" />
      </div>

      <motion.div 
        className="relative z-50 flex -translate-y-72 flex-col items-center px-5 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Dfz;