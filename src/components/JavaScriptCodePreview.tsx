import { useMemo } from "react";

// import { format } from "prettier/standalone";
// import babelParser from "prettier/parser-babel";

import JavascriptCodemirror from "~/libs/javascript-codemirror";
import { compile } from "~/libs/jaksel-language";
import { useRandomValueEffect } from "~/libs/hooks";

import { useThemeContext } from "~/contexts/ThemeContext";
import { useFilesContext } from "~/contexts/FilesContext";

// const formatJavascript = (input: string) => format(input, { parser: "babel", plugins: [babelParser] });

function JavaScriptCodePreview() {
  const { dark } = useThemeContext();
  const { active } = useFilesContext();

  const compiled = useMemo(() => {
    const js = compile(active.data);
    return js;
    // try {
    //   return formatJavascript(js);
    // } catch (error) {
    //   return js;
    // }
  }, [active]);

  const forceUpdate = useRandomValueEffect([dark, active, compiled]);

  return (
    <JavascriptCodemirror
      dark={dark}
      value={compiled}
      forceUpdate={forceUpdate}
      options={{ editable: false }}
      containerProps={{ className: "w-full h-full" }}
    />
  );
}

export default JavaScriptCodePreview;
