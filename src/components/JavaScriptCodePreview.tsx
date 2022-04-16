import { useMemo } from "react";

import { useDebounce } from "usehooks-ts";

// import { format } from "prettier/standalone";
// import babelParser from "prettier/parser-babel";

import { useThemeContext } from "~/components/ThemeProvider";
import { useAppContext } from "~/components/AppProvider";

import JavascriptCodemirror from "~/libs/javascript-codemirror";
import { compile } from "~/libs/jaksel-language";
import { useRandomValueEffect } from "~/libs/hooks";

// const formatJavascript = (input: string) => {
//   return format(input, { parser: "babel", plugins: [babelParser] });
// };

type JavaScriptCodePreviewProps = {};

function JavaScriptCodePreview(props: JavaScriptCodePreviewProps) {
  const { dark } = useThemeContext();
  const { value } = useAppContext();

  const debouncedValue = useDebounce<string>(value, 100);

  const compiled = useMemo(() => {
    const js = compile(debouncedValue);
    return js;
    // try {
    //   return js;
    //   // return formatJavascript(js);
    // } catch (error) {
    //   return js;
    // }
  }, [debouncedValue]);

  const forceUpdate = useRandomValueEffect([compiled, dark]);

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
