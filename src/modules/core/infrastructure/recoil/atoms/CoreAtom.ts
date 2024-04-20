"use client";

import { CoreState, initialCoreState } from "@/modules/core/domain/CoreState";
import { atom } from "recoil";

export const CoreAtom = atom<CoreState>({
  key: "CoreState",
  default: initialCoreState,
});
