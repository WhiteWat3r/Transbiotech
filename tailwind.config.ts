/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "275px",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glow: {
          "0%, 50%, 100%": { backgroundColor: "white", color: "#212121" },
          "25%": { backgroundColor: "var(--btn-color)", color: "#FFFFFF" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
        glow: "glow 3s ease-in-out infinite",
      },

      // backgroundImage: {
      //   "main-bg": "url('src/assets/bg/bg-main.png')",
      // },
    },
  },
  plugins: [],
};
