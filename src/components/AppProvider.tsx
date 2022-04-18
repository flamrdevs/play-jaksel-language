// import { createContext, useContext, useState } from "react";
// import type { PropsWithChildren } from "react";

// import { useUpdateEffect } from "usehooks-ts";

// import FILES, { createFile, type FileType } from "~/static/files";

// type AppContextType = {
//   files: FileType[];
//   addFile: () => void;
//   updateFileDataById: (id: string, data: string) => void;
//   removeFileById: (id: string) => void;

//   // Unstable
//   active: FileType;
//   setActive: (active: FileType) => void;
//   updateActiveData: (data: string) => void;
// };

// const AppContext = createContext<AppContextType>({
//   files: FILES,
//   addFile: () => {
//     throw new Error("Unimplemented");
//   },
//   updateFileDataById: () => {
//     throw new Error("Unimplemented");
//   },
//   removeFileById: () => {
//     throw new Error("Unimplemented");
//   },

//   // Unstable
//   active: FILES[0],
//   setActive: () => {
//     throw new Error("Unimplemented");
//   },
//   updateActiveData: () => {
//     throw new Error("Unimplemented");
//   },
// });

// function useAppContext() {
//   return useContext(AppContext);
// }

// type AppProviderProps = PropsWithChildren<{}>;

// function AppProvider(props: AppProviderProps) {
//   const [files, setFiles] = useState<FileType[]>(FILES);
//   const [active, setActive] = useState<FileType>(files[0]);

//   const addFile = () => {
//     setFiles(files.concat([createFile()]));
//   };

//   const updateFileDataById = (searchId: string, newData: string) => {
//     setFiles(
//       files.map(({ data, ...file }) => {
//         return file.id === searchId ? { ...file, data: newData } : { ...file, data };
//       })
//     );
//   };

//   const removeFileById = (searchId: string) => {
//     let removedId = "";
//     let removedIndex = -1;

//     const newFiles = files.filter(({ id }, index) => {
//       const shouldRemove = id === searchId;
//       if (shouldRemove) {
//         removedId = id;
//         removedIndex = index;
//       }
//       return !shouldRemove;
//     });

//     if (newFiles.length === 0) {
//       const file = createFile();

//       setFiles([file]);
//       setActive(file);
//     } else {
//       setFiles(newFiles);
//       if (removedIndex >= 0 && removedId == active.id) {
//         if (newFiles.length > removedIndex) {
//           setActive(newFiles[removedIndex]);
//         } else {
//           setActive(newFiles[removedIndex - 1]);
//         }
//       }
//     }
//   };

//   const updateActiveData = (newData: string) => {
//     const { data, ...file } = active;
//     setActive({ ...file, data: newData });
//   };

//   useUpdateEffect(() => {
//     updateFileDataById(active.id, active.data);
//   }, [active.data]);

//   return (
//     <AppContext.Provider
//       value={{
//         files,
//         active,
//         addFile,
//         updateFileDataById,
//         removeFileById,
//         setActive,
//         updateActiveData,
//       }}
//       children={props.children}
//     />
//   );
// }

// export type { AppContextType };
// // export { useAppContext };
// export default AppProvider;
export {};
