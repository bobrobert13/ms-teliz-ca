/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        mustard: {
          DEFAULT: '#F6AA1C',
          50: '#FEF3DB',
          100: '#FDE7B5',
          200: '#FCD68E',
          300: '#FBBF5A',
          400: '#F9A832',
          500: '#F6AA1C',
          600: '#D48F0F',
          700: '#A8710B',
          800: '#7D5508',
          900: '#5C4006'
        },
        navy: {
          DEFAULT: '#0B2B46',
          50: '#E8EDF2',
          100: '#C5D1DD',
          200: '#9FB2C5',
          300: '#7993AD',
          400: '#5A7A9A',
          500: '#0B2B46',
          600: '#092338',
          700: '#071A2A',
          800: '#05121D',
          900: '#030910'
        },
        slate: {
          DEFAULT: '#54565B',
          50: '#EAEBEC',
          100: '#C9CACB',
          200: '#A8A9AB',
          300: '#87888A',
          400: '#6B6C70',
          500: '#54565B',
          600: '#46474B',
          700: '#38383B',
          800: '#2A2A2C',
          900: '#1C1C1D'
        }
      }
    }
  },
  plugins: []
};