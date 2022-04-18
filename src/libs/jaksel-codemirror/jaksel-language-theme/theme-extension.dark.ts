import { EditorView } from "@codemirror/view";

import { baseTheme, dark as color } from "./theme-extension.base";

const darkTheme = EditorView.theme(
  {
    ...baseTheme,

    "&": {
      color: color.colorBase,
      backgroundColor: color.backgroundColorBase,
      height: "100%",
    },

    ".cm-content": {
      caretColor: color.black,
    },

    ".cm-cursor, .cm-dropCursor": { borderLeftColor: color.black },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: color.selection },

    ".cm-panels": { backgroundColor: color.darkBackground, color: color.colorBase },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

    ".cm-activeLine": { backgroundColor: color.highlightBackground },

    ".cm-gutters": {
      backgroundColor: color.backgroundColorBase1,
      color: color.black,
      border: "none",
    },

    ".cm-activeLineGutter": {
      backgroundColor: color.highlightBackground,
    },

    ".cm-tooltip": {
      border: "none",
      backgroundColor: color.backgroundColorBase,
    },

    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: color.backgroundColorBase,
      borderBottomColor: color.backgroundColorBase,
    },

    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: color.highlightBackground,
        color: color.colorBase,
      },
    },
  },
  { dark: true }
);

export { darkTheme };
