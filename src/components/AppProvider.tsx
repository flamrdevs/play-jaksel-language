import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

import { useUpdateEffect } from "usehooks-ts";

import { files, type FileObject } from "~/static/files";

type AppContextType = {
  file: FileObject;
  setFile: (file: FileObject) => void;
  setFileByName: (name: FileObject["name"]) => void;

  // Unstable
  fileDataSync: string;
  setFileDataSync: (data: string) => void;
};

const initialFile = files.fileHelloWorld;

const AppContext = createContext<AppContextType>({
  file: initialFile,
  setFile: () => {
    throw new Error("Unimplemented");
  },
  setFileByName: () => {
    throw new Error("Unimplemented");
  },

  // Unstable
  fileDataSync: "",
  setFileDataSync: () => {
    throw new Error("Unimplemented");
  },
});

function useAppContext() {
  return useContext(AppContext);
}

type AppProviderProps = PropsWithChildren<{}>;

function AppProvider(props: AppProviderProps) {
  const [file, setFile] = useState<FileObject>(initialFile);
  const [fileDataSync, setFileDataSync] = useState<string>(file.data);

  const setFileByName = (name: FileObject["name"]) => {
    const found = Object.values(files).find((file) => file.name === name);
    if (found) {
      setFile(found);
    }
  };

  useUpdateEffect(() => {
    setFileDataSync(file.data);
  }, [file]);

  return (
    <AppContext.Provider
      value={{
        file,
        fileDataSync,
        setFile,
        setFileByName,
        setFileDataSync,
      }}
      children={props.children}
    />
  );
}

export type { AppContextType };
export { useAppContext };
export default AppProvider;
