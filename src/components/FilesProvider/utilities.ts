import { nanoid } from "nanoid";

import type { FileType } from "~/contexts/FilesContext";

import randomRange from "~/utilities/random-range";

const words = [
  "literally",
  "basically",
  "which is",
  "somehow",
  "normally",
  "you know",
  "that is",
  "ever",
  "better",
  "end up",
  "actually",
  "honestly",
  "surely",
  "prefer",
  "confuse",
];

const pickRandomWord = () => words[randomRange(0, words.length - 1)];

const createFile = (active?: boolean): FileType => {
  return {
    id: nanoid(),
    name: pickRandomWord(),
    ext: ".jaksel",
    data: "",
    active,
  };
};

export { createFile };
