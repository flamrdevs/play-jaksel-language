import { darkHighlight } from "./highlight-extension.dark";
import { lightHighlight } from "./highlight-extension.light";

const highlightExtension = (dark: boolean) => (dark ? darkHighlight : lightHighlight);

export default highlightExtension;
