import themeExtension from "./theme-extension";
import highlightExtension from "./highlight-extension";

const jakselLanguageTheme = (dark: boolean) => {
  return [themeExtension(dark), highlightExtension(dark)];
};

export default jakselLanguageTheme;
