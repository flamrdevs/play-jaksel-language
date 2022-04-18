import { HighlightStyle, tags } from "@codemirror/highlight";

import { dark as color } from "./highlight-extension.base";

const darkHighlight = HighlightStyle.define([
  { tag: tags.keyword, color: color.fuchsia400 },
  { tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName], color: color.black },
  { tag: [tags.function(tags.variableName), tags.labelName], color: color.sky400 },
  { tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)], color: color.orange300 },
  { tag: [tags.definition(tags.name), tags.separator], color: color.gray300 },
  {
    tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
    color: color.orange300,
  },
  {
    tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, tags.special(tags.string)],
    color: color.cyan400,
  },
  { tag: [tags.meta, tags.comment], color: color.gray400 },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.link, color: color.gray400, textDecoration: "underline" },
  { tag: tags.heading, fontWeight: "bold", color: color.black },
  { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: color.orange300 },
  { tag: [tags.processingInstruction, tags.string, tags.inserted], color: color.lime300 },
  { tag: tags.invalid, color: color.neutral50 },
]);

export { darkHighlight };
