import { javascript } from "@codemirror/lang-javascript";

import jakselLanguageTheme from "../jaksel-codemirror/jaksel-language-theme";

import type { SimpleReactCodeMirrorProps } from "../simple-react-codemirror";
import SimpleReactCodeMirrorDynamic from "../simple-react-codemirror-dynamic";

type JavaScriptCodeMirrorProps = Omit<SimpleReactCodeMirrorProps, "extensions"> & { dark: boolean };

function JavaScriptCodeMirror(props: JavaScriptCodeMirrorProps) {
  const { dark, value, forceUpdate, options, onChange, containerProps } = props;

  return (
    <SimpleReactCodeMirrorDynamic
      value={value}
      forceUpdate={forceUpdate}
      extensions={[jakselLanguageTheme(dark), javascript()]}
      options={options}
      onChange={onChange}
      containerProps={containerProps}
    />
  );
}

export default JavaScriptCodeMirror;
