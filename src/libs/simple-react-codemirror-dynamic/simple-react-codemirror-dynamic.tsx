import dynamic from "next/dynamic";

const SimpleReactCodeMirrorDynamic = dynamic(
  async () => {
    return import("~/libs/simple-react-codemirror");
  },
  { ssr: false }
);

export default SimpleReactCodeMirrorDynamic;
