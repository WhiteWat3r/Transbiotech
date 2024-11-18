/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "275px",
        desktop: "1040px",
        "400px": "400px",
      },
      letterSpacing: {
        tighter: "-0.36px",
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

        // shrinkHeader: {
        //   "0%": { width: "100%" },
        //   "100%": { width: "max-content" },
        // },
        // expandHeader: {
        //   "0%": { width: "74.5%" },
        //   "100%": { width: "100%" },
        // },

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
        glow: "glow 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        // shrinkHeader: "shrinkHeader 0.5s ease-out forwards",
        // expandHeader: "expandHeader 0.5s ease-out forwards",

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
