import { createContext, useContext } from "react";

type FileType = {
  id: string;
  name: string;
  ext: string;
  active?: boolean;
  data: string;
};

type FilesContextType = {
  files: FileType[];
  active?: FileType;
  addFile: () => void;
  removeFileById: (id: string) => void;
  setActiveFileById: (id: string) => void;
  updateActiveFileDataById: (id: string, data: string) => void;
};

const FilesContext = createContext<FilesContextType>({
  files: [],
  addFile: () => {
    throw new Error("Unimplemented");
  },
  setActiveFileById: () => {
    throw new Error("Unimplemented");
  },
  updateActiveFileDataById: () => {
    throw new Error("Unimplemented");
  },
  removeFileById: () => {
    throw new Error("Unimplemented");
  },
});

function useFilesContext() {
  return useContext(FilesContext);
}

export type { FileType, FilesContextType };
export { useFilesContext };
export default FilesContext;
