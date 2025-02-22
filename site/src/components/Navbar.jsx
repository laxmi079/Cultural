import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

import Button from "./Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className={clsx(
        "absolute top-1/2 w-full -translate-y-1/2 transition-colors duration-300",
        {
          "bg-gray-900/10 backdrop-blur-sm rounded-lg": isAboutPage
        }
      )}>
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                <li><Link to="/" className={`nav-hover-btn ${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>Home</Link></li>
                <li><Link to="/about" className={`nav-hover-btn ${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>About</Link></li>
                <li><Link to="/gallery" className={`nav-hover-btn ${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>Gallery</Link></li>
                <li><Link to="/events" className={`nav-hover-btn ${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>Events</Link></li>
                <li><Link to="/contact" className={`nav-hover-btn ${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900`}>Contact</Link></li>
              </ul>
            </div>

            {/* Audio Button */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-6 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 md:hidden"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={clsx(
          "fixed top-[3rem] left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden",
          {
            "translate-y-0 opacity-100 visible": isMenuOpen,
            "-translate-y-full opacity-0 invisible": !isMenuOpen
          }
        )}>
          <div className="py-6">
            <ul className="flex flex-col items-center space-y-6 text-lg">
              <li><Link 
                to="/" 
                className={`${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >Home</Link></li>
              <li><Link 
                to="/about" 
                className={`${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >About</Link></li>
              <li><Link 
                to="/gallery" 
                className={`${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >Gallery</Link></li>
              <li><Link 
                to="/events" 
                className={`${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >Events</Link></li>
              <li><Link 
                to="/contact" 
                className={`${isAboutPage ? 'text-gray-900' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
