"use client";

import { selector } from "recoil";
import { CoreAtom } from "../atoms/CoreAtom";
import CoreGetDrawer from "@/modules/core/application/drawer/CoreGetDrawer";
import CoreSetDrawer from "@/modules/core/application/drawer/CoreSetDrawer";

const CoreDrawerSelector = selector({
  key: "CoreDrawerSelector",
	get: CoreGetDrawer(CoreAtom),
	set: CoreSetDrawer(CoreAtom)
});

export default CoreDrawerSelector;
