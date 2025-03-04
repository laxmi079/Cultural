import React from 'react';
import { Music, Guitar } from 'lucide-react';
import { GiAmpleDress } from "react-icons/gi";

const FloatingMusicIcons = ({ 
  IconComponent = GiAmpleDress, 
  iconCount = 50, 
  minSize = 10, 
  maxSize = 20, 
  opacity = 0.1 
}) => {
 
  const floatingIcons = [...Array(iconCount)].map((_, i) => ({
    id: i,
    size: Math.random() * (maxSize - minSize),
    delay: Math.random()*2, 
    duration: Math.random() *15, 
    left: Math.random() * 400 , 
    rotate: Math.random() * 360
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-10 flex items-center justify-center"
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            left: `${icon.left}%`,
            bottom: 0, 
            animation: `floatUp ${icon.duration}s linear infinite`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <IconComponent 
            size={icon.size * 0.8} 
            className="text-white/50 rotate-[var(--rotate)]" 
            style={{
              '--rotate': `${icon.rotate}deg`
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% { 
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          10% {
            opacity: ${opacity};
            transform: scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-100vh) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingMusicIcons;