import { useState } from "react";
import type { PropsWithChildren } from "react";

import { useIsomorphicLayoutEffect } from "usehooks-ts";

import ThemeContext from "~/contexts/ThemeContext";

import { setDarkCookie, setDocumentTheme } from "./utilities";

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

export default ThemeProvider;
