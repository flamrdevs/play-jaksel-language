import { cssVar } from "./const";

const light = {
  white: cssVar.neutral[50],
  black: cssVar.neutral[900],
  cyan400: "#06b6d4", // tw cyan 500
  neutral50: "#171717", // tw neutral 900
  gray300: "#57534e", // tw gray 600
  gray400: "#78716c", // tw gray 500
  sky400: "#06b6d4", // tw sky 500
  lime300: "#65a30d", // tw lime 600
  orange300: "#ea580c", // tw orange 600
  fuchsia400: "#d946ef", // tw fuchsia 500
};

// unpicked
const dark = {
  white: cssVar.neutral[900],
  black: cssVar.neutral[50],
  cyan400: "#22d3ee", // tw cyan 400
  neutral50: "#fafafa", // tw neutral 50
  gray300: "#d1d5db", // tw gray 300
  gray400: "#9ca3af", // tw gray 400
  sky400: "#38bdf8", // tw sky 400
  lime300: "#bef264", // tw lime 300
  orange300: "#fdba74", // tw orange 300
  fuchsia400: "#e879f9", // tw fuchsia 400
};

export { light, dark };
