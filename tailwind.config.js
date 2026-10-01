/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#050b16', 900: '#0a1424' },
        brand: { 900: '#021C8B', 800: '#03145E', 700: '#1B52D7', 600: '#3B6FE6', 500: '#6A93ED', 100: '#C0C7D3', 50: '#E3E7ED' },
        energy: { 500: '#1B52D7', 600: '#021C8B' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
