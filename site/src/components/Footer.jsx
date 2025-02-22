import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { 
    href: "https://instagram.com", 
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    color: "from-pink-500 to-purple-500"
  },
  { 
    href: "https://youtube.com", 
    icon: <FaYoutube size={20} />,
    label: "YouTube",
    color: "from-red-500 to-pink-500"
  },
  { 
    href: "https://facebook.com", 
    icon: <FaFacebookF size={20} />,
    label: "Facebook",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    href: "https://linkedin.com", 
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    color: "from-cyan-500 to-blue-500"
  }
];

const Footer = () => {
  useGSAP(() => {
    // Animate footer elements
    gsap.from(".footer-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer-wrapper",
        start: "top bottom-=100",
      }
    });

    // Animate social icons
    gsap.from(".social-icon", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".social-links",
        start: "top bottom-=50",
      }
    });
  });

  return (
    <footer className="footer-wrapper relative w-screen bg-gradient-to-b from-gray-900 to-black py-8 sm:py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/grid.png')] opacity-10"></div>
        <div className="absolute -top-1/2 left-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] 
          bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute -bottom-1/2 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] 
          bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -right-1/4 top-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] 
          bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* Footer Content */}
      <div className="footer-content relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r 
              from-cyan-400 via-blue-500 to-purple-600 
              bg-clip-text text-transparent mb-3 sm:mb-4
              px-4 sm:px-0">
              Cultural Council IIT BHU
            </h2>
            <p className="text-blue-100/60 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-6">
              Fostering creativity, celebrating culture, and building lasting connections through artistic expression.
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
                aria-label={link.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} 
                  opacity-0 group-hover:opacity-100 blur-lg sm:blur-xl transition-opacity duration-500`}>
                </div>
                
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg 
                  bg-gray-800/50 border border-white/10 backdrop-blur-sm
                  group-hover:border-white/20 transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-[360deg]">
                  <div className="text-blue-100/80 group-hover:text-white transition-colors duration-300 
                    transform scale-90 sm:scale-100">
                    {link.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/10 pt-6 sm:pt-8">
            <p className="text-blue-100/60 text-sm sm:text-base px-4">
              © {new Date().getFullYear()} Cultural Council IIT BHU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
