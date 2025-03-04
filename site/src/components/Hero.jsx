import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState, Suspense } from "react";
import { Link } from 'react-router-dom';
import VideoPreview from "./VideoPreview";
import LoadingSpinner from "./LoadingSpinner";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  // Preload videos on mount
  useEffect(() => {
    const videoUrls = Array.from({length: totalVideos}, (_, i) => getVideoSrc(i + 1));
    let loadedCount = 0;

    videoUrls.forEach(url => {
      const video = document.createElement('video');
      video.src = url;
      video.preload = 'auto';
      
      video.onloadeddata = () => {
        loadedCount++;
        setLoadedVideos(loadedCount);
        if (loadedCount === totalVideos) {
          setLoading(false);
        }
      };
    });
  }, []);

  const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1);
  };

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <LoadingSpinner />
        </div>
      )}

      <div
        id="video-frame"
        className={`relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 ${loading ? 'invisible' : 'visible'}`}
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <Suspense fallback={null}>
              <VideoPreview>
                <div
                  onClick={handleMiniVdClick}
                  className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                >
                  <video
                    ref={nextVdRef}
                    src={getVideoSrc((currentIndex % totalVideos) + 1)}
                    loop
                    muted
                    id="current-video"
                    className="size-64 origin-center scale-150 object-cover object-center"
                    onLoadedData={handleVideoLoad}
                  />
                </div>
              </VideoPreview>
            </Suspense>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center video-container"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute left-0 top-0 size-full object-cover object-center video-container"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <div className="space-y-6">
              <h1 className="special-font text-7xl md:text-8xl lg:text-9xl font-bold text-blue-100 transition-all duration-500 hover:text-yellow-300">
                Where Tradition
              </h1>
              <h1 className="special-font text-7xl md:text-8xl lg:text-9xl font-bold text-blue-100 transition-all duration-500 hover:text-yellow-300">
                Meets Innovation
              </h1>
              <div className="h-1.5 w-48 bg-yellow-300"></div>
              <p className="font-robert-regular text-2xl md:text-3xl text-blue-100 opacity-90">
                Welcome to the Cultural Hub of IIT BHU!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-6 md:right-10 z-50 flex flex-col gap-4 sm:gap-5 md:gap-6">
        {/* Clubs Circle */}
        <Link 
          to="/clubs" 
          className="group relative flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          {/* Rotating container */}
          <div className="absolute inset-0 animate-rotate-slow">
            {/* Background with minimal overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img 
                src="/img/circleimg.jpg" 
                alt="sparkle background" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
              {/* Lighter overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent"></div>
            </div>

            {/* Subtle glass effect */}
            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[1px]"></div>

            {/* Sparkle effect */}
            <div className="absolute inset-0 animate-sparkle">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_70%)] animate-pulse"></div>
            </div>

            {/* Single solid border */}
            <div className="absolute inset-0 rounded-full border border-white/30"></div>

            {/* Subtle glow */}
            <div className="absolute inset-0 animate-glow rounded-full bg-blue-100/10 blur-sm"></div>
          </div>

          {/* Text (outside rotation container to stay upright) */}
          <span className="z-10 text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Clubs
          </span>
        </Link>

        {/* Team Circle */}
        <Link 
          to="/teams" 
          className="group relative flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          {/* Rotating container */}
          <div className="absolute inset-0 animate-rotate-slow">
            {/* Background with minimal overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img 
                src="/img/circleimg.jpg" 
                alt="sparkle background" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
              {/* Lighter overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent"></div>
            </div>

            {/* Subtle glass effect */}
            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-[1px]"></div>

            {/* Sparkle effect */}
            <div className="absolute inset-0 animate-sparkle">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_70%)] animate-pulse"></div>
            </div>

            {/* Single solid border */}
            <div className="absolute inset-0 rounded-full border border-white/30"></div>

            {/* Subtle glow */}
            <div className="absolute inset-0 animate-glow rounded-full bg-blue-100/10 blur-sm"></div>
          </div>

          {/* Text (outside rotation container to stay upright) */}
          <span className="z-10 text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Team
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
