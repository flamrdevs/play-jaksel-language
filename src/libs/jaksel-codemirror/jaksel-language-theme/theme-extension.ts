import { darkTheme } from "./theme-extension.dark";
import { lightTheme } from "./theme-extension.light";

const themeExtension = (dark: boolean) => (dark ? darkTheme : lightTheme);

export default themeExtension;
