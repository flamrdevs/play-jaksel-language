const colors = require("tailwindcss/colors");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      //
      white: withOpacityValue("--color-neutral-50"),
      black: withOpacityValue("--color-neutral-900"),
      //
      primary: {
        50: withOpacityValue("--color-primary-50"),
        100: withOpacityValue("--color-primary-100"),
        200: withOpacityValue("--color-primary-200"),
        300: withOpacityValue("--color-primary-300"),
        400: withOpacityValue("--color-primary-400"),
        500: withOpacityValue("--color-primary-500"),
        600: withOpacityValue("--color-primary-600"),
        700: withOpacityValue("--color-primary-700"),
        800: withOpacityValue("--color-primary-800"),
        900: withOpacityValue("--color-primary-900"),
      },
      secondary: {
        50: withOpacityValue("--color-secondary-50"),
        100: withOpacityValue("--color-secondary-100"),
        200: withOpacityValue("--color-secondary-200"),
        300: withOpacityValue("--color-secondary-300"),
        400: withOpacityValue("--color-secondary-400"),
        500: withOpacityValue("--color-secondary-500"),
        600: withOpacityValue("--color-secondary-600"),
        700: withOpacityValue("--color-secondary-700"),
        800: withOpacityValue("--color-secondary-800"),
        900: withOpacityValue("--color-secondary-900"),
      },
      neutral: {
        50: withOpacityValue("--color-neutral-50"),
        100: withOpacityValue("--color-neutral-100"),
        200: withOpacityValue("--color-neutral-200"),
        300: withOpacityValue("--color-neutral-300"),
        400: withOpacityValue("--color-neutral-400"),
        500: withOpacityValue("--color-neutral-500"),
        600: withOpacityValue("--color-neutral-600"),
        700: withOpacityValue("--color-neutral-700"),
        800: withOpacityValue("--color-neutral-800"),
        900: withOpacityValue("--color-neutral-900"),
      },
    },
    extend: {},
  },
  plugins: [],
};
