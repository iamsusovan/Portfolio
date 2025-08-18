/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#3D3A4B',
        'primary-purple': '#A855F7',
        'accent-coral': '#FF7B6B',
        'accent-yellow': '#FBBF24',
        'text-coral': '#FF6B5A',
        'bg-dark': '#2D2B3A',
        'bg-darker': '#252332'
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        }
      },
      container: {
        center: true,
      },
    }
  }
}