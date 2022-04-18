import { useState } from "react";
import type { PropsWithChildren } from "react";

import FilesContext, { type FileType } from "~/contexts/FilesContext";

import { FILES } from "./const";
import { createFile } from "./utilities";

type AppProviderProps = PropsWithChildren<{}>;

function FilesProvider(props: AppProviderProps) {
  const [files, setFiles] = useState<FileType[]>(FILES);

  const active = files.find((file) => file.active);

  const addFile = () => {
    setFiles(files.concat([createFile()]));
  };

  const updateActiveFileDataById = (searchId: string, newData: string) => {
    setFiles(
      files.map(({ data, ...file }) => {
        return file.id === searchId ? { ...file, data: newData } : { ...file, data };
      })
    );
  };

  const removeFileById = (searchId: string) => {
    let fileWillRemove = {
      index: -1,
      id: "",
      active: false,
    };

    const newFiles = files.filter(({ id, active }, index) => {
      const willRemove = id === searchId;
      if (willRemove) {
        fileWillRemove = { index, id, active };
      }
      return !willRemove;
    });

    if (newFiles.length === 0) {
      setFiles([createFile(true)]);
    } else {
      setFiles(
        newFiles.map(({ active, ...file }, index) => {
          if (fileWillRemove.active) {
            const selectIndex = fileWillRemove.index - (newFiles.length > fileWillRemove.index ? 0 : 1);

            return {
              ...file,
              active: selectIndex === index,
            };
          } else {
            return {
              ...file,
              active,
            };
          }
        })
      );
    }
  };

  const setActiveFileById = (id: string) => {
    setFiles(
      files.map(({ active, ...file }) => {
        return {
          ...file,
          active: file.id === id,
        };
      })
    );
  };

  return (
    <FilesContext.Provider
      value={{ files, active, addFile, removeFileById, setActiveFileById, updateActiveFileDataById }}
      children={props.children}
    />
  );
}

export default FilesProvider;
