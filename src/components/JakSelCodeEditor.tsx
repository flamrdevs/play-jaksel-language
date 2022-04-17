import { useThemeContext } from "~/components/ThemeProvider";
import { useAppContext } from "~/components/AppProvider";

import JakselCodemirror from "~/libs/jaksel-codemirror";
import { useRandomValueEffect } from "~/libs/hooks";

type JakSelCodeEditorProps = {};

function JakSelCodeEditor(props: JakSelCodeEditorProps) {
  const { dark } = useThemeContext();
  const { file, setFileDataSync } = useAppContext();

  const forceUpdate = useRandomValueEffect([dark, file]);

  return (
    <JakselCodemirror
      dark={dark}
      value={file.data}
      forceUpdate={forceUpdate}
      onChange={setFileDataSync}
      containerProps={{ className: "w-full h-full" }}
    />
  );
}

export default JakSelCodeEditor;
