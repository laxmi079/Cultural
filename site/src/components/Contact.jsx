import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { 
    href: "https://instagram.com/cultcounciliitbhu", 
    icon: <FaInstagram size={24} />,
    label: "Instagram",
    color: "from-pink-500 to-purple-500"
  },
  { 
    href: "https://youtube.com/@CulturalCouncilIITBHU", 
    icon: <FaYoutube size={24} />,
    label: "YouTube",
    color: "from-red-500 to-pink-500"
  },
  { 
    href: "https://facebook.com/cultcounciliitbhu", 
    icon: <FaFacebookF size={24} />,
    label: "Facebook",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    href: "https://linkedin.com/company/cultural-council-iit-bhu", 
    icon: <FaLinkedinIn size={24} />,
    label: "LinkedIn",
    color: "from-cyan-500 to-blue-500"
  }
];

const Contact = () => {
  useGSAP(() => {
    // Animate all contact cards together with a simpler animation
    gsap.fromTo(".contact-card", 
      {
        y: 30,
        autoAlpha: 0  // Using autoAlpha instead of opacity
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          once: true,  // Ensures animation only happens once
          toggleActions: "play none none none"  // Only plays forward
        }
      }
    );

    // Simplify other animations to prevent conflicts
    gsap.fromTo(".form-element",
      {
        x: -30,
        autoAlpha: 0
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          once: true
        }
      }
    );

    // Ensure thank you message stays visible
    gsap.fromTo(".thank-you",
      {
        y: 30,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".thank-you",
          start: "top 80%",
          once: true
        }
      }
    );
  });

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative px-3 sm:px-4 md:px-8 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto w-full py-12 sm:py-16 md:py-20">
          {/* Contact Info Section - Now full width */}
          <div className="space-y-6 max-w-4xl mx-auto"> {/* Adjusted max-width and centered */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center
              bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed text-center">
              Have questions about our cultural activities? We'd love to hear from you!
            </p>
            
            {/* Contact Details - Now in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"> {/* Changed to 3-column grid */}
              {/* Email Card */}
              <div className="contact-card group p-8 rounded-2xl bg-gray-800/50 border border-cyan-500/20
                hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20 
                transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <FaEnvelope className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Official Contacts</h3>
                <div className="space-y-2">
                  <a href="mailto:cultural.council@iitbhu.ac.in" 
                    className="block text-blue-100/80 hover:text-cyan-400 transition-colors">
                    cultural.council@iitbhu.ac.in
                  </a>
                  <a href="mailto:gensec.cultural@iitbhu.ac.in"
                    className="block text-blue-100/80 hover:text-cyan-400 transition-colors">
                    gensec.cultural@iitbhu.ac.in
                  </a>
                  <p className="text-blue-100/60 text-sm mt-2">
                    General Secretary: +91-9876543210
                  </p>
                </div>
              </div>

              {/* Visit Us Card */}
              <div className="contact-card group p-8 rounded-2xl bg-gray-800/50 border border-purple-500/20
                hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/20 
                transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <FaMapMarkerAlt className="text-4xl text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-purple-400 mb-4">Visit Us</h3>
                <div className="space-y-2">
                  <p className="block text-blue-100/80">
                    Cultural Council Office<br />
                    Gymkhana Building<br />
                    IIT (BHU), Varanasi<br />
                    Uttar Pradesh - 221005
                  </p>
                  <a href="https://goo.gl/maps/yourlink" 
                    className="block text-blue-100/80 hover:text-purple-400 transition-colors">
                    View on Google Maps →
                  </a>
                  <p className="text-blue-100/60 text-sm mt-2">
                    Office Hours: 10 AM - 6 PM
                  </p>
                </div>
              </div>

              {/* Connect With Us Card */}
              <div className="contact-card group p-8 rounded-2xl bg-gray-800/50 border border-blue-500/20
                hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 
                transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <FaPhone className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-blue-400 mb-4">Connect With Us</h3>
                <div className="space-y-2">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-100/80 hover:text-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.label}</span>
                      </div>
                    </a>
                  ))}
                  <p className="text-blue-100/60 text-sm mt-2">
                    Follow us for latest updates and events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
