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
        accent: "#6366f1",

        /* Lobby */
        "bg-main": "#0F172A",
        "bg-card": "#1E293B",
        "bg-sidebar": "#020617",

        /* Active Room */
        "bg-dark": "#0a0f16",
        "card-dark": "#161d27",
        "border-dark": "#1e293b",
        "text-muted": "#94a3b8",
        "raised-hand": "#fbbf24",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
