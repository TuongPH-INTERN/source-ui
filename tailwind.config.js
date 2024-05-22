/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        60: "60px",
        "30px": "30px",
        "7px": "7px",
        "14px": "14px",
        "34px": "34px",
      },
      backgroundColor: {
        custom: "#2273D1",
      },
      inset: {
        "-102px": "-102px",
        "-108px": "108px",
      },
      lineHeight: {
        "62px": "62px",
        "21px": "21px",
      },
      py: {
        "30px": "30px",
      },
      px: {
        "7px": "7px",
      },
      width: {
        285: "285px",
        33: "33px",
        "32%": "32%",
        "66%": "66%",
        "89%": "89%",
        800: "800px",
      },
      height: {
        161: "161px",
        400: "400px",
        33: "33px",
        631: "631px",
        550: "550px",
      },
      borderRadius: {
        23: "23px",
        18: "18px",
        30: "30px",
      },
      colors: {
        "light-gray": "#1B1B1B99",
        primary: "#3DCBB1",
        "lear-more-bg": "#1B283F",
        "login-input": "#F9F9F9",
        facebook: "#4267B2",
        "hero-2": "#FFD130",
      },
      fontSize: {
        title: ["32px", "42px"],
        smCaption: ["14px", "18px"],
      },
      minHeight: {
        302: "302px",
      },
      maxWidth: {
        1281: "1281px",
        1228: "1228px",
      },
    },
  },
  plugins: [],
};
