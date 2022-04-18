import JakselCodemirror from "~/libs/jaksel-codemirror";
import { useRandomValueEffect } from "~/libs/hooks";

import { useThemeContext } from "~/contexts/ThemeContext";
import { useFilesContext } from "~/contexts/FilesContext";

function JakSelCodeEditor() {
  const { dark } = useThemeContext();
  const { active, updateActiveFileDataById } = useFilesContext();

  const forceUpdate = useRandomValueEffect([dark, active.id]);

  const handleChange = (data: string) => {
    updateActiveFileDataById(active.id, data);
  };

  return (
    <JakselCodemirror
      dark={dark}
      value={active.data}
      forceUpdate={forceUpdate}
      onChange={handleChange}
      containerProps={{ className: "w-full h-full" }}
    />
  );
}

export default JakSelCodeEditor;
