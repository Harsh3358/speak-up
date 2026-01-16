/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6EF7",
        bgMain: "#0F172A",
        bgSidebar: "#020617",
        bgCard: "#1E293B",
        borderSoft: "rgba(148,163,184,0.1)",
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "1.5rem",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
