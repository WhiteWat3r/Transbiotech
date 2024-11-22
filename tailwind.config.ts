/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "tech-shadow": "0px -10px 35px 0px #C6C6C6",
      },
      screens: {
        mobile: "275px",
        "400px": "400px",
        tablet: "640px",
        desktop: "1040px",
      },

      colors: {
        "black-default": "#212121",
        "grey-1": "#565656",
        "grey-2": "#808080",
        gainsboro: "#DDDDDD",
        platinum: "#E9E9E9",
        white: "#FFFFFF",
        "purplish-pink": "#EA7A92",
        "light-purplish-pink": "#FFA3B7",
        indigo: "#6A78C1",
        "light-indigo": "#9DAAEB",
        "greenish-yellow": "#90882B",
        "light-greenish-yellow": "#CCC471",
        titian: "#E04918",
        "light-titian": "#FA9270",
      },
      letterSpacing: {
        tighter: "-0.36px",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-50px)" },
        },
        glow: {
          "0%, 50%, 100%": { backgroundColor: "white", color: "#212121" },
          "25%": { backgroundColor: "var(--btn-color)", color: "#FFFFFF" },
        },
        "glow-desc": {
          "0%, 50%, 100%": { backgroundColor: "white", color: "#212121",  transform: "translatey(0)" },
          "25%": { backgroundColor: "var(--btn-color)", color: "#FFFFFF",  transform: "translatey(-10px)"},
        },
        appearBorder: {
          "0%": {
            backgroundColor: "transparent",
            border: "2px solid transparent",

            backdropFilter: "blur(0px)",
          },
          "60%": {
            backgroundColor: "transparent",
            border: "2px solid transparent",

            backdropFilter: "blur(0px)",
          },
          "80%": {
            backgroundColor: "#F8F8F8D9",
            border: "2px solid white",
            backdropFilter: "blur(10px)",
          },
          "100%": {
            backgroundColor: "#F8F8F8D9",
            border: "2px solid white",
            backdropFilter: "blur(10px)",
          },
        },
        disappearBorder: {
          "0%": {
            backgroundColor: "#F8F8F8D9",
            border: "2px solid white",
            backdropFilter: "blur(10px)",
          },
          "10%": {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            border: "2px solid transparent",
          },
          "90%": {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            border: "2px solid transparent",
          },
          "100%": {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            border: "2px solid transparent",
          },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
        slideOut: "slideOut 0.5s forwards",
        glow: "glow 3s ease-in-out infinite",
        "glow-desc": "glow-desc 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        appearBorder: "appearBorder 0.5s ease-out forwards",
        disappearBorder: "disappearBorder 0.5s ease-out forwards",
      },

      backgroundImage: {
        "one-task-bg": "url('/tailwindBackgrounds/bg-second.png')",
        "main-sec-bg": "url('/tailwindBackgrounds/bg-main.png')",
        "main-desk": "url('/tailwindBackgrounds/main-desktop.png')",
        "second-desktop-bg": "url('/tailwindBackgrounds/second-desktop.png')",
      },
      backgroundPosition: {
        "top-2": "center top -90px",
        "top-3": "center top -50px",
      },
    },
  },
  plugins: [],
};
