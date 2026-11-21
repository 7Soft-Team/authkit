/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
      },
      colors: {
        royal: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#1e3a8a',
          600: '#1a357d',
          700: '#172e6f',
          900: '#0f172a',
        },
        tealx: {
          400: '#2dd4bf',
          500: '#0d9488',
          600: '#0f766e',
        },
      },
      borderRadius: {
        xl2: '16px',
      },
      boxShadow: {
        micro: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        'micro-md':
          '0 4px 14px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.04)',
        cta: '0 10px 24px -8px rgba(30, 58, 138, 0.5)',
        ctaHover: '0 14px 32px -8px rgba(30, 58, 138, 0.65)',
        glass:
          '0 24px 60px -16px rgba(0, 0, 0, 0.55), 0 8px 24px -12px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
