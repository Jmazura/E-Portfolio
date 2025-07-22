/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',        // Your actual source files
    './app/**/*.{js,ts,jsx,tsx}',        // App directory (App Router)
    './pages/**/*.{js,ts,jsx,tsx}',      // Pages directory (if used)
    './components/**/*.{js,ts,jsx,tsx}', // Components
    './public/index.html',               // Optional (only needed for static templates)
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
      },
       colors: {
        azura: {
          bg: '#0a0a0a',           // Main black background
          soft: '#1a1a1a',         // Section/card bg
          surface: '#111111',      // Navbar/footer
          border: '#2a2a2a',       // Subtle border color
          text: '#e5e5e5',         // Primary text
          muted: '#a1a1aa',        // Muted secondary text
          accent: '#4c1d95',       // Deep violet
          green: '#16a34a',        // Emerald 600
          yellow: '#eab308',       // Yellow 500
          trans: '#0e0e0e',        // transition gradient
        }
      }
    },
  },
  plugins: [],
}
