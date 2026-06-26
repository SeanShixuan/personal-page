/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#F8FAFC',
        primary: '#475569',
        accent: '#3B82F6',
        heading: '#1E293B',
        muted: '#64748B',
        card: '#FFFFFF',
        border: '#E2E8F0',
        dark: {
          DEFAULT: '#0F172A',
          surface: '#1E293B',
          card: '#334155',
          border: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
