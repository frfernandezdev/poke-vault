"use client";

import { selector } from "recoil";
import { CoreAtom } from "../atoms/CoreAtom";
import CoreGetLoader from "@/modules/core/application/loader/CoreGetLoader";
import CoreSetLoader from "@/modules/core/application/loader/CoreSetLoader";

const CoreLoaderSelector = selector({
  key: "CoreLoaderSelector",
	get: CoreGetLoader(CoreAtom),
	set: CoreSetLoader(CoreAtom)
});

export default CoreLoaderSelector;
