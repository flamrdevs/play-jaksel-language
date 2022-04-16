import { mapCompare, valueTransform } from "./parser.utilities";
import type { Command, Matcher } from "./perser.types";

//	====================================================================================
//	Catch Function
//	====================================================================================

export const catchFn = (msg: string): Command => {
  const format = /backstab/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Condition Close
//	====================================================================================

export const conditionClose = (msg: string): Command => {
  const format = /udahan$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  } as const;
};

//	====================================================================================
//	Condition Else If
//	====================================================================================

export const conditionElIf = (msg: string): Command => {
  const format = /perhaps ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  const match = msg.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2]];
  }

  return {
    exp: `else if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    closeGroup: true,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Condition Else
//	====================================================================================

export const conditionElse = (msg: string): Command => {
  const format = /kalogak$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Condition If
//	====================================================================================

export const conditionIf = (msg: string): Command => {
  const format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  const match = msg.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2]];
  }

  return {
    exp: `if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Console Log
//	====================================================================================

export const consoleLog = (msg: string): Command => {
  const format = /spill (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`,
  } as const;
};

//	====================================================================================
//	Const Assign
//	====================================================================================

export const constAssign = (msg: string): Command => {
  const format = /seriously ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`,
  } as const;
};

//	====================================================================================
//	Finally Function
//	====================================================================================

export const finallyFn = (msg: string): Command => {
  const format = /yaudahlahya/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Function Call
//	====================================================================================

export const functionCall = (msg: string): Command => {
  const format = /call (\w+)((\s\w+)*)?/;
  const match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramValues] = match;

  const params = paramValues?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();

  return {
    exp: `${funcName}(${paramsStringified});`,
  } as const;
};

//	====================================================================================
//	Function Declaration Begin
//	====================================================================================

export const functionDeclarationBegin = (msg: string): Command => {
  const format = /so about (\w+)((\s\w+)*)?/;
  const match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramNames] = match;
  const params = paramNames?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Function Declaration End
//	====================================================================================

export const functionDeclarationEnd = (msg: string): Command => {
  const format = /thats it sih/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: "",
    closeGroup: true,
  } as const;
};

//	====================================================================================
//	Loop For
//	====================================================================================

export const loopFor = (msg: string): Command => {
  const format = /fomo ([a-zA-Z0-9]+) endup ([a-zA-Z0-9]+)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Throw Error
//	====================================================================================

export const throwError = (msg: string): Command => {
  const format = /toxic (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`,
  } as const;
};

//	====================================================================================
//	Try Function
//	====================================================================================

export const tryFn = (msg: string): Command => {
  const format = /trust issue/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  } as const;
};

//	====================================================================================
//	Var Assign
//	====================================================================================

const VarAssignMatcher: Matcher[] = [
  {
    regexp: /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/,
    callback: (match) => {
      return {
        exp: `let ${match[1]} = ${valueTransform(match[2])};`,
      };
    },
  },
  {
    regexp: /literally ([a-zA-Z0-9]+) itu/,
    callback: (match) => {
      return {
        exp: `let ${match[1]} = `,
      };
    },
  },
  {
    regexp: /literally ([a-zA-Z0-9]+) (.*)/,
    callback: (match) => {
      return {
        exp: `let ${match[1]} ${match[2]}`,
      };
    },
  },
  {
    regexp: /literally ([a-zA-Z0-9]+)/,
    callback: (match) => {
      return {
        exp: `let ${match[1]}`,
      };
    },
  },
  {
    regexp: /literally/,
    callback: (match) => {
      return {
        exp: `let`,
      };
    },
  },
];

export const varAssign = (msg: string): Command => {
  for (const { regexp, callback } of VarAssignMatcher) {
    const match = msg.match(regexp);
    if (match) return callback(match);
  }
  return null;
};

//	====================================================================================
//	Var Re-Assign
//	====================================================================================

const TOKENS = {
  $VARIABLE_NAME: "([a-zA-Z0-9]+)",
  $VARIABLE_VALUE: "([^[]()\n]+)",
  $CATCH: "(.*)",
  EQUAL: "=",
  ITU: "itu",
  WHICHIS: "whichis",
};

const join = {
  space: (...args: string[]) => args.join(" "),
};

const VarReassignMatcher: Matcher[] = [
  {
    regexp: new RegExp(join.space(TOKENS.WHICHIS, TOKENS.$VARIABLE_NAME, TOKENS.ITU, TOKENS.$CATCH)),
    callback: (match) => {
      return {
        exp: join.space(match[1], TOKENS.EQUAL, valueTransform(match[2])),
      };
    },
  },
  {
    regexp: new RegExp(join.space(TOKENS.WHICHIS, TOKENS.$VARIABLE_NAME, TOKENS.ITU)),
    callback: (match) => {
      return {
        exp: join.space(match[1], TOKENS.EQUAL),
      };
    },
  },
  {
    regexp: new RegExp(join.space(TOKENS.WHICHIS, TOKENS.$VARIABLE_NAME, TOKENS.$CATCH)),
    callback: (match) => {
      return {
        exp: join.space(match[1], match[2]),
      };
    },
  },
];

export const varReassign = (msg: string): Command => {
  for (const { regexp, callback } of VarReassignMatcher) {
    const match = msg.match(regexp);
    if (match) return callback(match);
  }
  return null;
};

//	====================================================================================
//	Enter
//	====================================================================================

// const EnterMatcher: Matcher[] = [
//   {
//     regexp: /(\r\n|\r|\n)/,
//     callback: (match) => {
//       return {
//         exp: `${match[0]}`,
//       };
//     },
//   },
// ];

export const enter = (msg: string): Command => {
  return {
    exp: msg,
  };

  // for (const { regexp, callback } of EnterMatcher) {
  //   const match = msg.match(regexp);
  //   if (match) return callback(match);
  // }
  // return null;
};

//	====================================================================================
//	Fallback
//	====================================================================================

export const fallback = (msg: string): Command => {
  return {
    exp: msg,
  };
};
