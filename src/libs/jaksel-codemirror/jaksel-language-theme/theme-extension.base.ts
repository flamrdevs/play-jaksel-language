import { cssVar } from "./const";

const light = {
  backgroundColorBase: cssVar.neutral[50],
  backgroundColorBase1: cssVar.neutral[100],
  colorBase: cssVar.neutral[900],
  colorBase1: cssVar.neutral[800],

  white: cssVar.neutral[50],
  black: cssVar.neutral[900],

  darkBackground: cssVar.neutral[100],
  highlightBackground: cssVar.neutral[150],
  selection: cssVar.neutral[200],
};

const dark = {
  backgroundColorBase: cssVar.neutral[900],
  backgroundColorBase1: cssVar.neutral[800],
  colorBase: cssVar.neutral[50],
  colorBase1: cssVar.neutral[100],

  white: cssVar.neutral[900],
  black: cssVar.neutral[50],

  darkBackground: cssVar.neutral[800],
  highlightBackground: cssVar.neutral[750],
  selection: cssVar.neutral[700],
};

const baseTheme = {
  ".cm-scroller": {
    overflow: "auto",
  },

  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff",
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f",
  },

  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847",
    outline: "1px solid #515a6b",
  },

  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },

  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd",
  },

  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
};

export { light, dark };
export { baseTheme };
