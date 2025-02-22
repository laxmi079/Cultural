import { FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { 
    href: "https://instagram.com", 
    icon: <FaInstagram size={24} />,
    color: "hover:text-white",
    glow: "white"
  },
  { 
    href: "https://youtube.com", 
    icon: <FaYoutube size={24} />,
    color: "hover:text-white",
    glow: "white"
  }
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-6">
      <div className="container mx-auto flex justify-center gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group transition-all duration-300 text-black ${link.color}`}
          >
            {/* Glow effect */}
            <div 
              className={`absolute inset-0 rounded-full blur-xl opacity-0 
                group-hover:opacity-70 transition-opacity duration-300
                bg-white/50`}
            />
            
            {/* Icon */}
            <div className="relative transform transition-transform duration-300 hover:scale-110">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
