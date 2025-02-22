import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { RiSparklingFill } from 'react-icons/ri';

function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin"/>
        <p className="text-blue-100 mt-4">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
}

function GalleryApp() {
  const [started, setStarted] = useState(false);
  const [cameraPosition] = useState(
    window.innerWidth > 800 ? [-0.5, 1, 4] : [-0.5, 1, 9]
  );

  useEffect(() => {
    // Start immediately when component mounts
    setStarted(true);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects - Matching About.jsx */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="animate-float-slow absolute -top-10 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"/>
        <div className="animate-float absolute -bottom-10 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"/>
        {/* Add new glowing orbs */}
        <div className="animate-pulse-slow absolute top-1/4 right-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"/>
        <div className="animate-float-slow absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl"/>
        
        {/* Add sparkle effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-twinkle">
            <RiSparklingFill className="text-cyan-400/40 text-2xl" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-twinkle delay-300">
            <RiSparklingFill className="text-purple-400/40 text-xl" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-twinkle delay-700">
            <RiSparklingFill className="text-blue-400/40 text-2xl" />
          </div>
        </div>

        {/* Add glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 
          blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 scale-110"></div>
      </div>

      <div className="relative w-full h-screen">
        {started && <UI />}
        <Canvas
          shadows
          camera={{
            position: cameraPosition,
            fov: 45,
          }}
          className="w-full h-full"
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default GalleryApp;
