import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { FaMusic, FaPalette, FaTheaterMasks, FaQuoteLeft, FaQuoteRight, FaGuitar, FaStar } from 'react-icons/fa';
import { motion } from "framer-motion";
import { RiSparklingFill } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Futuristic text animation
    gsap.to(".cyber-text", {
      backgroundPosition: '-200% center',
      duration: 10,
      ease: "none",
      repeat: -1
    });

    // Parallax and reveal animations
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Animated text reveal with glitch effect
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".glitch-effect", {
          opacity: 0.5,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
      }
    });

    // Paragraph reveal animations
    gsap.from(".content-section", {
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3
    });

    // Highlight words animation
    gsap.to(".highlight", {
      backgroundSize: "100% 100%",
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%"
      }
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section - Remove top margin */}
      <div className="relative px-2 sm:px-4 md:px-8 min-h-[calc(100vh-4rem)] flex items-center">
        {/* Add floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float-slow absolute -top-10 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-cyan-500/10 rounded-full blur-3xl"/>
          <div className="animate-float absolute -bottom-10 right-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-purple-500/10 rounded-full blur-3xl"/>
          {/* Add new glowing orbs */}
          <div className="animate-pulse-slow absolute top-1/4 right-1/3 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-blue-500/20 rounded-full blur-2xl"/>
          <div className="animate-float-slow absolute bottom-1/3 left-1/3 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-purple-500/15 rounded-full blur-2xl"/>
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
        </div>

        <div className="hero-content max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 w-full px-2 sm:px-4">
          <div className="relative group">
            {/* Add glow effect behind the heading */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 
              blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110"></div>
            
            <h1 className="cyber-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 
              pt-4 sm:pt-8 md:pt-12 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
              bg-[length:200%_auto] bg-clip-text text-transparent 
              animate-cyber relative z-10
              hover:scale-105 transition-transform duration-500">
              Cultural Council
            </h1>
            
            {/* Enhanced glitch effect */}
            <div className="glitch-effect absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 
              blur-xl -z-10 animate-pulse"></div>
            
            {/* Add shimmering border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 
              rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-xy"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed font-light
            max-w-3xl mx-auto relative backdrop-blur-sm py-4 sm:py-6 px-3 sm:px-4 rounded-lg
            bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
            <span className="absolute -left-2 top-0 text-2xl sm:text-3xl md:text-4xl text-cyan-400 opacity-50">"</span>
            The Cultural Council at IIT BHU is the heart of creativity and expression, 
            uniting students through music, art, drama, literature, and dance.
            <span className="absolute -right-2 bottom-0 text-2xl sm:text-3xl md:text-4xl text-cyan-400 opacity-50">"</span>
          </p>
        </div>
      </div>

      {/* Image Section with Cyberpunk Effect */}
      <div className="h-[60vh] md:h-[80vh] w-screen overflow-hidden relative group" id="clip">
        <div className="mask-clip-path about-image">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-purple-900/50 to-transparent z-10
            group-hover:opacity-75 transition-opacity duration-500"/>
          <div className="absolute inset-0 bg-[url('/img/grid.png')] opacity-30 z-20 mix-blend-overlay
            group-hover:opacity-50 transition-opacity duration-500"></div>
          <img
            src="img/about.webp"
            alt="Cultural Activities"
            className="absolute left-0 top-0 size-full object-cover transform scale-110 saturate-150
              group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24">
          {/* Introduction Section */}
          <div className="content-section relative hover:transform hover:scale-[1.02] transition-all duration-500">
            <div className="absolute -left-8 top-0 text-6xl text-cyan-500/20">
              <FaQuoteLeft />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Where Tradition Meets Innovation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 leading-relaxed mb-4 sm:mb-6 backdrop-blur-sm">
              The Cultural Council at IIT BHU is the 
              <span className="highlight bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:0%_3px] bg-no-repeat bg-bottom">
                vibrant heart of creativity
              </span> 
              and expression on campus. It serves as a platform where tradition meets modernity, bringing together students from diverse backgrounds to celebrate the rich cultural heritage of India while embracing contemporary art forms.
            </p>
          </div>

          {/* Clubs Section */}
          <div className="content-section relative bg-gray-800/30 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <div className="absolute -right-4 top-4 text-8xl text-purple-500/10 transform rotate-12">
              <FaGuitar />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              A Universe of Creative Expression
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-6">
              Home to a wide array of clubs, the Cultural Council spans various domains including 
              <span className="highlight bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:0%_3px] bg-no-repeat bg-bottom">
                music, dance, drama, literature, art
              </span>, 
              and more. Whether it's the soulful melodies of the Indian Music Club (IMC), the rhythmic beats of the Dance Club (DFZ), the poetic expressions of the Literary Club, or the artistic brilliance of Aavran, each club provides a unique space for creative exploration.
            </p>
          </div>

          {/* Mission Section */}
          <div className="content-section relative">
            <div className="absolute -left-4 bottom-4 text-8xl text-blue-500/10 transform -rotate-12">
              <FaStar />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Cultivating Cultural Excellence
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed mb-6">
              At the core of its mission, the Cultural Council strives to 
              <span className="highlight bg-gradient-to-r from-blue-500 to-indigo-500 bg-[length:0%_3px] bg-no-repeat bg-bottom">
                unite students through shared passions
              </span>, 
              fostering a spirit of collaboration and camaraderie. It plays a pivotal role in organizing iconic events like Kashiyatra, the largest cultural festival of northern India, helping students build confidence, leadership skills, and lifelong memories.
            </p>
          </div>

          {/* Impact Section */}
          <div className="py-16 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/img/grid.png')] opacity-5"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 relative">
              {/* Leadership & Community Section */}
              <div className="content-section space-y-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 
                      bg-clip-text text-transparent">
                      Building Tomorrow's Leaders
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
                      Beyond events and clubs, the Cultural Council plays a significant role in building a supportive 
                      and inclusive community. It empowers students to take up leadership roles, organize events, and 
                      collaborate across disciplines, thereby enhancing their organizational and interpersonal skills.
                    </p>
                    <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed">
                      The council is a testament to the power of creativity and collaboration, where each member 
                      contributes to creating memories that last a lifetime.
                    </p>
                  </div>

                  {/* Impact Points */}
                  <div className="space-y-8">
                    {/* Leadership Development */}
                    <div className="group p-6 rounded-xl bg-gray-800/30 border border-purple-500/20 
                      hover:border-purple-500/40 transition-all duration-500 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center
                          group-hover:bg-purple-500/20 transition-all duration-300">
                          <FaStar className="text-2xl text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-purple-400">Leadership Development</h3>
                      </div>
                      <p className="text-blue-100/70 leading-relaxed">
                        Students gain hands-on experience in event management, team coordination, and decision-making.
                      </p>
                    </div>

                    {/* Cultural Integration */}
                    <div className="group p-6 rounded-xl bg-gray-800/30 border border-cyan-500/20 
                      hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center
                          group-hover:bg-cyan-500/20 transition-all duration-300">
                          <FaTheaterMasks className="text-2xl text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-cyan-400">Cultural Integration</h3>
                      </div>
                      <p className="text-blue-100/70 leading-relaxed">
                        Creating a platform where diverse cultural expressions blend seamlessly with modern interpretations.
                      </p>
                    </div>

                    {/* Creative Growth */}
                    <div className="group p-6 rounded-xl bg-gray-800/30 border border-blue-500/20 
                      hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center
                          group-hover:bg-blue-500/20 transition-all duration-300">
                          <FaPalette className="text-2xl text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-blue-400">Creative Growth</h3>
                      </div>
                      <p className="text-blue-100/70 leading-relaxed">
                        Fostering an environment where artistic talents flourish and innovative ideas come to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="text-center max-w-4xl mx-auto pt-8 border-t border-white/10">
                <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed">
                  It is this sense of community, creativity, and cultural celebration that makes the Cultural Council 
                  at IIT BHU an integral part of 
                  <span className="relative mx-2 inline-block group">
                    <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur"></span>
                    <span className="relative bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      student life
                    </span>
                  </span>
                  and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-16 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 text-blue-100/60">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></span>
              <RiSparklingFill className="text-blue-400/80 animate-pulse" />
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></span>
            </div>
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-blue-100/90 leading-relaxed max-w-4xl mx-auto">
            Join us in crafting the future of cultural expression at IIT BHU, where every 
            <span className="relative mx-2 inline-block group">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur"></span>
              <span className="relative bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                artistic journey
              </span>
            </span>
            becomes a cherished memory.
          </p>

          <div className="mt-8">
            <div className="flex items-center justify-center gap-3 text-blue-100/60">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></span>
              <RiSparklingFill className="text-purple-400/80 animate-pulse" />
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
