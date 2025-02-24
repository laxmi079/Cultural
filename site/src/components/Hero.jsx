import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/img/circleimg.jpg',
    '/img/cultural.jpg',
    '/img/dance.jpg',
    '/img/music.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Image Carousel */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={img}
              alt="Cultural background"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Cultural Council
              </span>
              <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                IIT BHU
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Where tradition meets innovation, creating a vibrant tapestry of art, music, and dance.
            </motion.p>

            {/* Navigation Buttons */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <Link 
                to="/clubs"
                className="group relative overflow-hidden rounded-full bg-white/10 px-8 py-3 backdrop-blur-sm
                  transition-all duration-300 hover:bg-white/20"
              >
                <span className="relative z-10 text-lg font-medium text-white">
                  Explore Clubs
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-300/0 via-yellow-300/30 to-yellow-300/0 
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link 
                to="/teams"
                className="group relative overflow-hidden rounded-full bg-white/10 px-8 py-3 backdrop-blur-sm
                  transition-all duration-300 hover:bg-white/20"
              >
                <span className="relative z-10 text-lg font-medium text-white">
                  Meet the Team
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-300/0 via-yellow-300/30 to-yellow-300/0 
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-slate-950 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <motion.div
            className="h-12 w-0.5 bg-gradient-to-b from-yellow-300 to-transparent"
            animate={{ 
              scaleY: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
