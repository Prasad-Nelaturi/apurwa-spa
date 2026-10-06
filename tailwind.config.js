/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc',
          400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf',
          800: '#86198f', 900: '#701a75',
        },
        sand: {
          50: '#fdfbf7', 100: '#f9f3ea', 200: '#f1e6d3', 300: '#e6d3b3',
          400: '#d8ba8b', 500: '#cba26a', 600: '#b98a52', 700: '#9a6e42',
          800: '#7d593a', 900: '#674a32',
        },
        mint: {
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Neomorphic shadows — light mode
        'neo': '8px 8px 16px rgba(163, 177, 198, 0.35), -8px -8px 16px rgba(255, 255, 255, 0.9)',
        'neo-inset': 'inset 6px 6px 12px rgba(163, 177, 198, 0.35), inset -6px -6px 12px rgba(255, 255, 255, 0.9)',
        'neo-sm': '4px 4px 8px rgba(163, 177, 198, 0.3), -4px -4px 8px rgba(255, 255, 255, 0.9)',
        'neo-hover': '12px 12px 24px rgba(163, 177, 198, 0.45), -12px -12px 24px rgba(255, 255, 255, 1)',
        // Neomorphic shadows — dark mode
        'neo-dark': '8px 8px 16px rgba(0, 0, 0, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.03)',
        'neo-dark-inset': 'inset 6px 6px 12px rgba(0, 0, 0, 0.5), inset -6px -6px 12px rgba(255, 255, 255, 0.03)',
        'neo-dark-hover': '12px 12px 24px rgba(0, 0, 0, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.05)',
        // Glow
        'glow': '0 0 30px rgba(217, 70, 239, 0.4)',
        'glow-lg': '0 0 60px rgba(217, 70, 239, 0.5)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.15)',
      },
     backgroundImage: {
  'gradient-brand': 'linear-gradient(135deg, #d946ef 0%, #a21caf 50%, #701a75 100%)',
  'gradient-sunset': 'linear-gradient(135deg, #f0abfc 0%, #d946ef 50%, #c026d3 100%)',
  'gradient-sand': 'linear-gradient(135deg, #fdfbf7 0%, #f1e6d3 100%)',
  'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4a044e 100%)',
  'gradient-mesh': 'radial-gradient(at 40% 20%, #f0abfc 0px, transparent 50%), radial-gradient(at 80% 0%, #fae8ff 0px, transparent 50%), radial-gradient(at 0% 50%, #fdf4ff 0px, transparent 50%), radial-gradient(at 80% 50%, #f5d0fe 0px, transparent 50%), radial-gradient(at 0% 100%, #fae8ff 0px, transparent 50%)',
},
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(217, 70, 239, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}