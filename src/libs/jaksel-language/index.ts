import { getCommands, type Command } from "./logics";

function flexing(input: string) {
  return getCommands(input.split("\n").filter((v) => !!v));
}

function compile(input: string) {
  const commands: Command[] = flexing(input);

  let result = "";

  let isOpenGroup = false;
  for (const command of commands) {
    let tempRes = command.exp;
    if (command.closeGroup) {
      tempRes = "} " + tempRes;
      isOpenGroup = false;
    }
    if (command.openGroup) {
      tempRes = tempRes + " {";
      isOpenGroup = true;
    }
    result += tempRes + "\n";
  }
  if (isOpenGroup) {
    result += " }";
  }

  return result;
}

export { flexing, compile };
