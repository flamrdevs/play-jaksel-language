import {
  catchFn,
  conditionClose,
  conditionElIf,
  conditionElse,
  conditionIf,
  consoleLog,
  constAssign,
  finallyFn,
  functionCall,
  functionDeclarationBegin,
  functionDeclarationEnd,
  loopFor,
  throwError,
  tryFn,
  varAssign,
  varReassign,
  enter,
  fallback,
} from "./parser.group";

//	====================================================================================
//	Parsers Array
//	====================================================================================

export const parsers = [
  varAssign,
  varReassign,
  constAssign,
  consoleLog,
  conditionIf,
  conditionElIf,
  conditionElse,
  conditionClose,
  loopFor,
  functionDeclarationBegin,
  functionDeclarationEnd,
  functionCall,
  throwError,
  tryFn,
  catchFn,
  finallyFn,
  enter,
  fallback,
];
