import { useMemo } from "react";

// import { format } from "prettier/standalone";
// import babelParser from "prettier/parser-babel";

import { useThemeContext } from "~/components/ThemeProvider";
import { useAppContext } from "~/components/AppProvider";

import JavascriptCodemirror from "~/libs/javascript-codemirror";
import { compile } from "~/libs/jaksel-language";
import { useRandomValueEffect } from "~/libs/hooks";

// const formatJavascript = (input: string) => format(input, { parser: "babel", plugins: [babelParser] });

type JavaScriptCodePreviewProps = {};

function JavaScriptCodePreview(props: JavaScriptCodePreviewProps) {
  const { dark } = useThemeContext();
  const { file, fileDataSync } = useAppContext();

  const compiled = useMemo(() => {
    const js = compile(fileDataSync);
    return js;
    // try {
    //   return formatJavascript(js);
    // } catch (error) {
    //   return js;
    // }
  }, [fileDataSync]);

  const forceUpdate = useRandomValueEffect([dark, file, compiled]);

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
