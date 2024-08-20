/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#18161D",
          secondary: "#2B2735",
          tertiary: "#484158",
          accentPrimary: "#9370DB",
          accentSecondary: "#D8B2FF",
          white100: "#F2F2F2",
        //   white75: rgb(242, 242, 242, 0.75),
        //   white50: rgb(242, 242, 242, 0.5),
        //   white25: rgb(242, 242, 242, 0.25),
        //   white5: rgb(242, 242, 242, 0.05),
        },
        fontFamily: {
          pthin: ["Poppins-Thin", "sans-serif"],
          pextralight: ["Poppins-ExtraLight", "sans-serif"],
          plight: ["Poppins-Light", "sans-serif"],
          pregular: ["Poppins-Regular", "sans-serif"],
          pmedium: ["Poppins-Medium", "sans-serif"],
          psemibold: ["Poppins-SemiBold", "sans-serif"],
          pbold: ["Poppins-Bold", "sans-serif"],
          pextrabold: ["Poppins-ExtraBold", "sans-serif"],
          pblack: ["Poppins-Black", "sans-serif"],
        },
      },
    },
    plugins: [],
  };