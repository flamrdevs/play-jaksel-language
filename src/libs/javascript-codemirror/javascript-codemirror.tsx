import { javascript } from "@codemirror/lang-javascript";

import { jakselLanguageHighlight, jakselLanguageTheme } from "../jaksel-codemirror/jaksel-language-extensions";

import type { SimpleReactCodeMirrorProps } from "../simple-react-codemirror";
import SimpleReactCodeMirrorDynamic from "../simple-react-codemirror-dynamic";

type JavaScriptCodeMirrorProps = Omit<SimpleReactCodeMirrorProps, "extensions"> & { dark: boolean };

function JavaScriptCodeMirror(props: JavaScriptCodeMirrorProps) {
  const { dark, value, forceUpdate, options, onChange, containerProps } = props;

  return (
    <SimpleReactCodeMirrorDynamic
      value={value}
      forceUpdate={forceUpdate}
      extensions={[jakselLanguageTheme(dark), jakselLanguageHighlight, javascript()]}
      options={options}
      onChange={onChange}
      containerProps={containerProps}
    />
  );
}

export default JavaScriptCodeMirror;
