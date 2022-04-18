import { createContext, useContext } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggleDark: () => {
    throw new Error("Unimplemented");
  },
});

function useThemeContext() {
  return useContext(ThemeContext);
}

export type { ThemeContextType };
export { useThemeContext };
export default ThemeContext;
