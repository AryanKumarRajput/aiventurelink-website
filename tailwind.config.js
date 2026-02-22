/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        aivl: {
          base:     '#050810',
          surface:  '#0A0F1E',
          elevated: '#0F1629',
          card:     '#111827',
          blue:     '#2563EB',
          'blue-light': '#3B82F6',
          'blue-glow':  '#60A5FA',
          cyan:     '#06B6D4',
          'text-primary':   '#F1F5F9',
          'text-secondary': '#94A3B8',
          'text-muted':     '#475569',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.25) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 3s ease-in-out infinite',
        'spin-slow':   'spin-slow 20s linear infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'orb-drift':   'orb-drift 12s ease-in-out infinite',
        'gradient':    'gradient-shift 8s ease infinite',
        'fade-in-up':  'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37,99,235,0.2)' },
          '50%':       { boxShadow: '0 0 40px rgba(37,99,235,0.5)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':       { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':       { transform: 'translate(-20px, 15px) scale(0.97)' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-blue':  '0 0 40px rgba(37,99,235,0.2)',
        'glow-blue-lg': '0 0 80px rgba(37,99,235,0.3)',
        'card':       '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};