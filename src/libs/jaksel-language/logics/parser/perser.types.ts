export type Command = {
  exp: string;
  closeGroup?: boolean;
  openGroup?: boolean;
};

export type Matcher = {
  regexp: RegExp;
  callback: (match: RegExpMatchArray) => Command;
};
