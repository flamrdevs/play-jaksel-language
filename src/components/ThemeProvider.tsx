import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

import { parse } from "cookie";
import jsCookie from "js-cookie";

import { useIsomorphicLayoutEffect } from "usehooks-ts";

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

const setDocumentTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const getDarkCookie = (cookie?: string) => {
  const parsed = parse(cookie);
  if (typeof cookie === "string") {
    try {
      const dark = parsed["dark"];
      if (typeof dark !== "undefined") {
        return Boolean(JSON.parse(dark));
      }
    } catch (error) {
      console.error("Get Cookie Error");
    }
  }

  return false;
};

const setDarkCookie = (value: boolean) => {
  try {
    jsCookie.set("dark", JSON.stringify(value));
  } catch (error) {
    console.error("Set Cookie Error");
  }
};

type ThemeProviderProps = PropsWithChildren<{
  dark?: boolean;
}>;

function ThemeProvider(props: ThemeProviderProps) {
  const [dark, setDark] = useState<boolean>(Boolean(props.dark));

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    setDarkCookie(next);
  };

  useIsomorphicLayoutEffect(() => {
    setDocumentTheme(dark);
  }, [dark]);

  return <ThemeContext.Provider value={{ dark, toggleDark }} children={props.children} />;
}

export type { ThemeContextType };
export { useThemeContext };
export { getDarkCookie, setDarkCookie };
export default ThemeProvider;
