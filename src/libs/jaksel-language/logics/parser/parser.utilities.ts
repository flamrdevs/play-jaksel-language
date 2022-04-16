export const mapCompare = {
  itu: " == ",
  gak: " != ",
  "lebih gede": " > ",
  "lebih kecil": " < ",
  "lebih gede sama dengan": " >= ",
  "lebih kecil sama dengan": " <= ",
} as const;

export const booleanValue = (msg: string) => {
  if (msg.match(/positive vibes$/) || msg.match(/worth it$/)) {
    return "true";
  } else if (msg.match(/negative vibes$/)) {
    return "false";
  }

  return null;
};

export const valueTransform = (msg: string) => {
  const transforms = [booleanValue];

  for (const transform of transforms) {
    const res = transform(msg);
    if (res) return res;
  }

  return msg;
};
