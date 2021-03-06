import { nanoid } from "nanoid";

type FileType = {
  id: string;
  name: string;
  ext: string;
  data: string;
};

const FILES: FileType[] = [
  {
    id: nanoid(),
    name: "hello-world",
    ext: ".jaksel",
    data: `spill "Hello, World!"`,
  },
  {
    id: nanoid(),
    name: "example",
    ext: ".jaksel",
    data: `literally language itu 'javascript'
whichis language itu 'jaksel'
spill language`,
  },
  {
    id: nanoid(),
    name: "another",
    ext: ".jaksel",
    data: `trust issue
  spill "Something wrong"
  toxic "Error message"
backstab
  spill "Catch error"
yaudahlahya
  spill "finish finally"
udahan`,
  },
];

const createFile = (): FileType => {
  return {
    id: nanoid(),
    name: "new file",
    ext: ".jaksel",
    data: "",
  };
};

export type { FileType };
export { createFile };
export default FILES;
