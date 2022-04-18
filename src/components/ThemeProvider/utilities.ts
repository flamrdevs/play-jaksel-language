import { parse } from "cookie";
import jsCookie from "js-cookie";

const setDocumentTheme = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const setDarkCookie = (value: boolean) => {
  try {
    jsCookie.set("dark", JSON.stringify(value));
  } catch (error) {
    console.error("Set Cookie Error");
  }
};

const getDarkCookie = (cookie?: string) => {
  const parsed = typeof cookie === "string" ? parse(cookie) : {};
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

export { setDocumentTheme, setDarkCookie, getDarkCookie };
