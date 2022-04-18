type FileObject = {
  name: "hello-world.jaksel" | "example.jaksel" | "another.jaksel";
  data: string;
};

const fileHelloWorld: FileObject = {
  name: "hello-world.jaksel",
  data: `spill "Hello, World!"`,
};

const fileExample: FileObject = {
  name: "example.jaksel",
  data: `literally language itu 'javascript'
whichis language itu 'jaksel'
spill language`,
};

const fileAnother: FileObject = {
  name: "another.jaksel",
  data: `trust issue
  spill "Something wrong"
  toxic "Error message"
backstab
  spill "Catch error"
yaudahlahya
  spill "finish finally"
udahan`,
};

const files = {
  fileHelloWorld,
  fileExample,
  fileAnother,
};

export type { FileObject };
export { files };
