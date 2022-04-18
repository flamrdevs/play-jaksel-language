import { LRParser } from "@lezer/lr";
import { NodeProp } from "@lezer/common";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags } from "@codemirror/highlight";

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_identifier = {
  __proto__: null,
  literally: 6,
  whichis: 8,
  seriously: 10,
  itu: 14,
  true: 22,
  false: 22,
  worth: 22,
  trust: 26,
  backstab: 30,
  yaudahlahya: 34,
};
const parser = (LRParser as any).deserialize({
  version: 13,
  states:
    "#fOYQPOOOOQO'#Cs'#CsOOQO'#Cn'#CnQYQPOOOhQPO'#C^OmQPO'#ChOOQO-E6l-E6lOOQO'#Cb'#CbO!UQPO'#CuOOQO,58x,58xOOQO'#Cj'#CjOOQO'#Cl'#ClOOQO,59S,59SO!jQPO,59SO#OQPO,59aOOQO1G.n1G.nOOQO'#Cf'#CfOOQO'#Cv'#CvOOQO1G.{1G.{",
  stateData: "#^~OeOSfOS~ORSOSSOTSO]TO~OhVO~O_YOaZOR[XS[XT[X][Xc[X~OV^ORiXSiXTiX]iXciX~OaZOR[aS[aT[a][ac[a~OWaOXaOZaOh`O~O",
  goto: "!akPPlPPPpPPPsPlPvPyP!PPPPP!VP!Z!^TPORRWSRa^R]TQ[TR_]QRORURTQORRXSRb^",
  nodeNames:
    "⚠ Script VariableDeclaration literally whichis seriously VariableDefinition Equals Number String VariableName BooleanLiteral TryStatement trust CatchClause backstab FinallyClause yaudahlahya",
  maxTerm: 26,
  nodeProps: [[NodeProp.group, -2, 2, 12, "Statement"]],
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData:
    ",c~RoXY#SYZ#wZ[#S]^#wpq#Srs#|tu$pwx%X!O!P%v!Q!R'S!R!['t!c!}$p#R#S$p#T#o$p$f$g#S$g#BY$p#BY#BZ*]#BZ$IS$p$IS$I_*]$I_$I|$p$I|$I}+x$I}$JO+x$JO$JT$p$JT$JU*]$JU$KV$p$KV$KW*]$KW&FU$p&FU&FV*]&FV?HT$p?HT?HU*]?HU~$p~#XYe~XY#SZ[#Spq#S$f$g#S#BY#BZ#S$IS$I_#S$JT$JU#S$KV$KW#S&FU&FV#S?HT?HU#S~#|Of~~$RUX~OY#|Zr#|rs$es#O#|#O#P$j#P~#|~$jOX~~$mPO~#|~$uUh~tu$p!Q![$p!c!}$p#R#S$p#T#o$p$g~$p~%^UX~OY%XZw%Xwx$ex#O%X#O#P%p#P~%X~%sPO~%X~%yP!Q![%|~&RSW~!Q![%|!g!h&_#R#S%|#X#Y&_~&bS{|&n}!O&n!Q![&w#R#S&w~&qQ!Q![&w#R#S&w~&|QW~!Q![&w#R#S&w~'XXW~!O!P%|!Q!['t!g!h&_#R#S't#U#V(b#X#Y&_#b#c(]#c#d)P#l#m)h~'yUW~!O!P%|!Q!['t!g!h&_#R#S't#X#Y&_#b#c(]~(bOW~~(eR!Q!R(n!R!S(n#R#S(n~(sSW~!Q!R(n!R!S(n#R#S(n#b#c(]~)SQ!Q!Y)Y#R#S)Y~)_RW~!Q!Y)Y#R#S)Y#b#c(]~)kS!Q![)w!c!i)w#R#S)w#T#Z)w~)|TW~!Q![)w!c!i)w#R#S)w#T#Z)w#b#c(]~*dfe~h~XY#SZ[#Spq#Stu$p!Q![$p!c!}$p#R#S$p#T#o$p$f$g#S$g#BY$p#BY#BZ*]#BZ$IS$p$IS$I_*]$I_$JT$p$JT$JU*]$JU$KV$p$KV$KW*]$KW&FU$p&FU&FV*]&FV?HT$p?HT?HU*]?HU~$p~,PUf~h~tu$p!Q![$p!c!}$p#R#S$p#T#o$p$g~$p",
  tokenizers: [0],
  topRules: { Script: [0, 1] },
  dialects: { jaksel: 0 },
  specialized: [{ term: 24, get: (value) => spec_identifier[value] || -1 }],
  tokenPrec: 0,
});

const JakSelLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Number: tags.number,
        String: tags.string,
        BooleanLiteral: tags.bool,
        VariableName: tags.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": tags.function(tags.variableName),
        VariableDefinition: tags.definition(tags.variableName),
        Equals: tags.definitionOperator,
        "fomo endup kalo perhaps kalogak trust issue backstab yaudahlahya udahan": tags.controlKeyword,
        "literally whichis seriously": tags.definitionKeyword,
      }),
    ],
  }),
});
function JakSel() {
  return new LanguageSupport(JakSelLanguage);
}

export { JakSel, JakSelLanguage };
