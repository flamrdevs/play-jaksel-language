import { nanoid } from "nanoid";

import type { FileType } from "~/contexts/FilesContext";

const FILES: FileType[] = [
  {
    id: nanoid(),
    name: "hello-world",
    ext: ".jaksel",
    active: true,
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
    name: "more",
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

export { FILES };
