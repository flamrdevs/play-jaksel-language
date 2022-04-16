import { EditorView } from "@codemirror/view";

import { HighlightStyle, tags } from "@codemirror/highlight";

const cssVar = {
  primary: {
    50: "var(rgb(--color-primary-50))",
    100: "var(rgb(--color-primary-100))",
    200: "var(rgb(--color-primary-200))",
    300: "var(rgb(--color-primary-300))",
    400: "var(rgb(--color-primary-400))",
    500: "var(rgb(--color-primary-500))",
    600: "var(rgb(--color-primary-600))",
    700: "var(rgb(--color-primary-700))",
    800: "var(rgb(--color-primary-800))",
    900: "var(rgb(--color-primary-900))",
  },
  secondary: {
    50: "var(rgb(--color-secondary-50))",
    100: "var(rgb(--color-secondary-100))",
    200: "var(rgb(--color-secondary-200))",
    300: "var(rgb(--color-secondary-300))",
    400: "var(rgb(--color-secondary-400))",
    500: "var(rgb(--color-secondary-500))",
    600: "var(rgb(--color-secondary-600))",
    700: "var(rgb(--color-secondary-700))",
    800: "var(rgb(--color-secondary-800))",
    900: "var(rgb(--color-secondary-900))",
  },
  neutral: {
    50: "var(rgb(--color-neutral-50))",
    100: "var(rgb(--color-neutral-100))",
    200: "var(rgb(--color-neutral-200))",
    300: "var(rgb(--color-neutral-300))",
    400: "var(rgb(--color-neutral-400))",
    500: "var(rgb(--color-neutral-500))",
    600: "var(rgb(--color-neutral-600))",
    700: "var(rgb(--color-neutral-700))",
    800: "var(rgb(--color-neutral-800))",
    900: "var(rgb(--color-neutral-900))",
  },
};

const colors = {
  light: {
    backgroundColorBase: cssVar.neutral[50],
    colorBase: cssVar.neutral[900],
    primary: cssVar.primary[500],

    darkBackground: cssVar.neutral[900],
    highlightBackground: cssVar.neutral[900],
    selection: cssVar.neutral[400],
  },
  dark: {
    backgroundColorBase: cssVar.neutral[900],
    colorBase: cssVar.neutral[50],
    primary: cssVar.primary[400],

    darkBackground: cssVar.neutral[50],
    highlightBackground: cssVar.neutral[50],
    selection: cssVar.neutral[500],
  },
};

const jakselLanguageBaseTheme = {
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

const jakselLanguageLightTheme = (() => {
  const color = colors["light"];

  return {
    "&": {
      color: color.colorBase,
      backgroundColor: color.backgroundColorBase,
      height: "100%",
    },

    ".cm-content": {
      caretColor: color.primary,
    },

    ".cm-cursor, .cm-dropCursor": { borderLeftColor: color.primary },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: color.selection },

    ".cm-panels": { backgroundColor: color.darkBackground, color: color.colorBase },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

    ".cm-activeLine": { backgroundColor: color.highlightBackground },

    ".cm-gutters": {
      backgroundColor: color.backgroundColorBase,
      color: cssVar.neutral[100],
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
  };
})();

const jakselLanguageDarkTheme = (() => {
  const color = colors["dark"];

  return {
    "&": {
      color: color.colorBase,
      backgroundColor: color.backgroundColorBase,
      height: "100%",
    },

    ".cm-content": {
      caretColor: color.primary,
    },

    ".cm-cursor, .cm-dropCursor": { borderLeftColor: color.primary },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: color.selection },

    ".cm-panels": { backgroundColor: color.darkBackground, color: color.colorBase },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },

    ".cm-activeLine": { backgroundColor: color.highlightBackground },

    ".cm-gutters": {
      backgroundColor: color.backgroundColorBase,
      color: cssVar.neutral[100],
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
  };
})();

// theme reference one dark

const chalky = "#e5c07b",
  cyan = "#56b6c2",
  invalid = "#ffffff",
  ivory = "#abb2bf",
  stone = "#7d8799",
  malibu = "#61afef",
  sage = "#98c379",
  whiskey = "#d19a66",
  violet = "#c678dd";

const jakselLanguageTheme = (dark?: boolean) =>
  EditorView.theme(
    {
      ...jakselLanguageBaseTheme,
      ...(dark ? jakselLanguageDarkTheme : jakselLanguageLightTheme),
    },
    { dark: Boolean(dark) }
  );

const jakselLanguageHighlight = HighlightStyle.define([
  { tag: tags.keyword, color: violet },
  { tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName], color: cssVar.neutral[50] },
  { tag: [tags.function(tags.variableName), tags.labelName], color: malibu },
  { tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)], color: whiskey },
  { tag: [tags.definition(tags.name), tags.separator], color: ivory },
  {
    tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
    color: chalky,
  },
  { tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, tags.special(tags.string)], color: cyan },
  { tag: [tags.meta, tags.comment], color: stone },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.link, color: stone, textDecoration: "underline" },
  { tag: tags.heading, fontWeight: "bold", color: cssVar.neutral[50] },
  { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: whiskey },
  { tag: [tags.processingInstruction, tags.string, tags.inserted], color: sage },
  { tag: tags.invalid, color: invalid },
]);

export { jakselLanguageTheme, jakselLanguageHighlight };
