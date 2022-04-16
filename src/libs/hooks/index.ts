import { useState } from "react";
import type { DependencyList } from "react";

import { useUpdateEffect } from "usehooks-ts";

import { nanoid } from "nanoid";

export function useRandomValueEffect(deps?: DependencyList) {
  const [value, setValue] = useState(nanoid());

  useUpdateEffect(() => {
    setValue(nanoid());
  }, deps);

  return value;
}
