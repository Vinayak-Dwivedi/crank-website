/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        black: '#0a0a0a',
        dark: '#111111',
        darker: '#0d0d0d',
        card: '#161616',
        border: '#2a2a2a',
        cream: '#f0ede8',
        grey: '#888888',
        overlay: '#1c1c1c',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        wave: 'wave 1.4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease both',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.77,0,0.175,1) both',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
