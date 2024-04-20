"use client";

import { selector } from "recoil";
import { CoreAtom } from "../atoms/CoreAtom";
import CoreGetTheme from "@/modules/core/application/theme/CoreGetTheme";
import CoreSetTheme from "@/modules/core/application/theme/CoreSetTheme";

const CoreThemeSelector = selector({
  key: "CoreThemeSelector",
  get: CoreGetTheme(CoreAtom),
  set: CoreSetTheme(CoreAtom),
});

export default CoreThemeSelector;
