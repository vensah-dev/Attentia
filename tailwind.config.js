/** @type {import('tailwindcss').Config} */

import {colors} from "./constants/colors"
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: colors.primary,
          primaryLight: colors.primaryLight,
          secondary: colors.secondary,
          tertiary: colors.tertiary,
          accentPrimary: colors.accentPrimary,
          accentSecondary: colors.accentSecondary,
          white100: colors.white100,
          white90: colors.white90,
          white75: colors.white75,
          white50: colors.white50,
          white25: colors.white25,
          white10: colors.white10,
          white5: colors.white5,

          red: colors.red,
          orange: colors.orange,
          yellow: colors.yellow,
          green: colors.green,
          cyan: colors.cyan,
          blue: colors.blue,
          purple: colors.purple,
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
        fontSize: {
          "kitmin": '0.694rem',
          "sm": '0.833rem',
          base: '1rem',
          "h1": '2.986rem',
          'h2': '2.488rem',
          'h3': '2.074rem',
          'h4': '1.728rem',
          'h5': '1.44rem',
          'h6': '1.2rem',

        },
      },
    },
    plugins: [],
  };
