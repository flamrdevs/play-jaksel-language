import { useEffect, useRef } from "react";

import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { Extension } from "@codemirror/state";

type SimpleReactCodeMirrorProps = {
  value: string;
  forceUpdate?: any;
  extensions?: Extension[];
  options?: {
    editable?: boolean;
  };
  onChange?: (value: string) => void;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

function SimpleReactCodeMirror(props: SimpleReactCodeMirrorProps) {
  const { value, forceUpdate, extensions, options, onChange, containerProps } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);

  const view = useRef<EditorView | null>(null);

  const createState = () => {
    const listenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        onChange?.(update.state.doc.toString());
      }
    });

    const editableExtension = EditorView.editable.of(Boolean(typeof options?.editable === "undefined" ? true : options?.editable));

    const state = EditorState.create({
      doc: value,
      extensions: [basicSetup, keymap.of([indentWithTab]), listenerExtension, editableExtension, ...extensions],
    });

    return new EditorView({
      state: state,
      parent: rootRef.current,
    });
  };

  useEffect(() => {
    if (rootRef.current === null) {
      return;
    }

    view.current = createState();

    return () => {
      view.current.destroy();
    };
  }, [forceUpdate]);

  return <div ref={rootRef} {...containerProps} />;
}

export type { SimpleReactCodeMirrorProps };
export default SimpleReactCodeMirror;
