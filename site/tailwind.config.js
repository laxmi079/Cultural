/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 12s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 4s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'cyber': 'cyber 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'slide-right': 'slide-right 3s linear infinite',
        'float-diagonal': 'float-diagonal 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 }
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.5 }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        cyber: {
          '0%': { backgroundPosition: '200% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'float-diagonal': {
          '0%, 100%': { 
            transform: 'translate(0, 0)' 
          },
          '50%': { 
            transform: 'translate(20px, -20px)' 
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px var(--glow-color)',
            opacity: 0.6
          },
          '50%': {
            boxShadow: '0 0 40px var(--glow-color)',
            opacity: 1
          },
        },
      },
      spacing: {
        18: '4.5rem', // 72px - for medium size circles
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
};
