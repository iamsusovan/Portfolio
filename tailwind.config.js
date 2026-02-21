/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./*.html", "./src/**/*.{js,ts,scss,css}"],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0A0A0F',
        'bg-surface': '#12121A',
        'bg-card': '#1A1A26',
        'accent': '#7C3AED',
        'accent-2': '#EC4899',
        'accent-3': '#F59E0B',
        'text-primary': '#F5F5F5',
        'text-muted': '#6B7280',
        'border-subtle': 'rgba(255,255,255,0.08)',
        /* legacy compat */
        'primary-purple': '#7C3AED',
        'text-coral': '#EC4899',
        'bg-dark': '#0A0A0F',
        'bg-darker': '#12121A',
      },
      fontFamily: {
        'display': ['Syne', 'system-ui', 'sans-serif'],
        'primary': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(12%,9%)' },
          '70%': { transform: 'translate(9%,4%)' },
          '90%': { transform: 'translate(-1%,7%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.5rem', lg: '2rem' },
      },
    }
  }
}