/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        contrast: 'var(--contrast)',
        accent: 'var(--accent)',
      },
      screens: {
        mobile: '0px',
        // => @media () { ... }

        tablet: '1024px',
        // => @media (min-width: 768px, max:1023px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1024px and max:1279px) { ... }
      },
    },

  },
  plugins: [],
}

