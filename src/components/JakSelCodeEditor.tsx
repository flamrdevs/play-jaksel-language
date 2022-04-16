import { useThemeContext } from "~/components/ThemeProvider";
import { useAppContext } from "~/components/AppProvider";

import JakselCodemirror from "~/libs/jaksel-codemirror";
import { useRandomValueEffect } from "~/libs/hooks";

type JakSelCodeEditorProps = {};

function JakSelCodeEditor(props: JakSelCodeEditorProps) {
  const { dark } = useThemeContext();
  const { value, setValue } = useAppContext();

  const forceUpdate = useRandomValueEffect([dark]);

  return (
    <JakselCodemirror
      dark={dark}
      value={value}
      forceUpdate={forceUpdate}
      onChange={setValue}
      containerProps={{ className: "w-full h-full" }}
    />
  );
}

export default JakSelCodeEditor;
