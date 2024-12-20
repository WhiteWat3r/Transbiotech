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
        1200: "1200px",
        1440: "1440px",
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
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-50px)" },
        },
        glow: {
          "0%, 50%, 100%": { backgroundColor: "white", color: "#212121" },
          "25%": { backgroundColor: "var(--btn-color)", color: "#FFFFFF" },
        },
        "glow-desc": {
          "0%, 50%, 100%": {
            backgroundColor: "white",
            color: "#212121",
            transform: "translatey(0)",
          },
          "25%": {
            backgroundColor: "var(--btn-color)",
            color: "#FFFFFF",
            transform: "translatey(-10px)",
          },
        },
        "circle-slideIn": {
          "0%": { opacity: 0, left: 0 },
          "100%": { opacity: 1, left: "var(--init-left)" },
        },
        "circle-slideOut": {
          "0%": { opacity: 1, left: "var(--init-left)" },
          "20%": { left: "calc(var(--init-left) + 5%)" },
          "100%": { opacity: 1, left: 0 },
        },
        "technologies-slide-in": {
          "0%": { transform: "translateY(120px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
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
        "advantages-show": {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "70%": {
            opacity: 1,
            transform: "translateY(-8px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        // "perfusion-main" : {
        //   "0%": { transform: "translateY(0)" },
        //   "30%": { transform: "translateY(20px) translatex(30px)" },
        //   "60%": { transform: "translateY(0) translatex(40px)" },
        //   "100%": { transform: "translateY(0)" },
        // },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "flashing-border": {
          "0%": {
            opacity: 0,
          },
          "20%": {
            opacity: 1,
          },
          "40%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "60%": {
            opacity: 0,
          },
          "80%": {
            opacity: 1,
          },
          "90%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.8s forwards",
        slideOut: "slideOut 0.8s forwards",
        glow: "glow 3s ease-in-out",
        "glow-desc": "glow-desc 3s ease-in-out",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        appearBorder: "appearBorder 0.5s ease-out forwards",
        disappearBorder: "disappearBorder 0.5s ease-out forwards",
        "circle-slideIn": "circle-slideIn 0.8s forwards",
        "circle-slideOut": "circle-slideOut 0.8s forwards",
        "technologies-slide-in": "technologies-slide-in 1.2s ease-out forwards",
        "perfusion-main": "perfusion-main 10s ease-out infinite",
        "advantages-show": "advantages-show 0.5s ease-out forwards",
        "flashing-border": "flashing-border 0.5s ease-out forwards",
      },

      backgroundImage: {
        "one-task-bg": "url('/tailwindBackgrounds/bg-second.png')",
        "main-sec-bg": "url('/tailwindBackgrounds/bg-main.png')",
        "main-desk": "url('/tailwindBackgrounds/main-desktop.png')",
        "second-desktop-bg": "url('/tailwindBackgrounds/second-desktop.png')",
        "ecmo-gradient":
          "linear-gradient(270deg, #FFFFFF 29.37%, rgba(255, 255, 255, 0) 140%)",
      },
      backgroundPosition: {
        "top-2": "center top -90px",
        "top-3": "center top -50px",
      },
    },
  },
  plugins: [],
};
