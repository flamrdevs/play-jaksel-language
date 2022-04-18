import { LRParser } from "@lezer/lr";
import { NodeProp } from "@lezer/common";

import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent } from "@codemirror/language";
import { styleTags, tags } from "@codemirror/highlight";

const parser = (LRParser as any).deserialize({
  version: 13,
  states: "!WQYQPOOOhQPO'#CdOOQO'#Ci'#CiOOQO'#Ce'#CeQYQPOOOOQO,59O,59OOyQPO,59OOOQO-E6c-E6cOOQO1G.j1G.j",
  stateData: "![~O[OSPOS~ORQOSQOTQOVPO~ORQOSQOTQOUTOVPO~ORQOSQOTQOUWOVPO~O",
  goto: "u^PPPPPPPP_ePPPoXQOPSUQSOQUPTVSUXROPSU",
  nodeNames: "⚠ LineComment Program Identifier String Boolean ) ( Application",
  maxTerm: 13,
  nodeProps: [
    [NodeProp.openedBy, 6, "("],
    [NodeProp.closedBy, 7, ")"],
  ],
  skippedNodes: [0, 1],
  repeatNodeCount: 1,
  tokenData:
    "$W~R^XY}YZ}]^}pq}rs!`st!}xy#]yz#b}!O#g!Q![#g!]!^#{!c!}#g#R#S#g#T#o#g~!SS[~XY}YZ}]^}pq}~!cTOr!`rs!rs#O!`#O#P!w#P~!`~!wOS~~!zPO~!`~#QQ#Y#Z#W#h#i#W~#]OT~~#bOV~~#gOU~~#lTR~}!O#g!Q![#g!c!}#g#R#S#g#T#o#g~$QQP~OY#{Z~#{",
  tokenizers: [0],
  topRules: { Program: [0, 2] },
  tokenPrec: 0,
});

export const JakSelLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false }),
      }),
      foldNodeProp.add({
        Application: foldInside,
      }),
      styleTags({
        Identifier: tags.variableName,
        Boolean: tags.bool,
        String: tags.string,
        LineComment: tags.lineComment,
        "( )": tags.paren,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: ";" },
  },
});

export function JakSel() {
  return new LanguageSupport(JakSelLanguage);
}
