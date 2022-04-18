import jakselLanguageTheme from "./jaksel-language-theme";

import { JakSel } from "./lang-jaksel-alternative";

import type { SimpleReactCodeMirrorProps } from "../simple-react-codemirror";
import SimpleReactCodeMirrorDynamic from "../simple-react-codemirror-dynamic";

type JakSelCodeMirrorProps = Omit<SimpleReactCodeMirrorProps, "extensions"> & { dark: boolean };

function JakSelCodeMirror(props: JakSelCodeMirrorProps) {
  const { dark, value, forceUpdate, options, onChange, containerProps } = props;

  return (
    <SimpleReactCodeMirrorDynamic
      value={value}
      forceUpdate={forceUpdate}
      extensions={[jakselLanguageTheme(dark), JakSel()]}
      options={options}
      onChange={onChange}
      containerProps={containerProps}
    />
  );
}

export default JakSelCodeMirror;
