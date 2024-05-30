/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins','san-serif'],
        'inter':['Inter','sans-serif']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        contrast: 'var(--contrast)',
        accent: 'var(--accent)',
      },
      screens: {
        mobile: '0px',
        xs: '300px',
        tablet: '1024px',
        desktop: '1280px',        
      },
    },

  },
  plugins: [],
}

