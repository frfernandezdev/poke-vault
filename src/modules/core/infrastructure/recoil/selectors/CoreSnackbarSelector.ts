"use client";

import { selector } from "recoil";
import { CoreAtom } from "../atoms/CoreAtom";
import CoreGetSnackbar from "@/modules/core/application/snackbar/CoreGetSnackbar";
import CoreSetSnackbar from "@/modules/core/application/snackbar/CoreSetSnackbar";

const CoreSnackbarSelector = selector({
  key: "CoreProfileMenuSelector",
  get: CoreGetSnackbar(CoreAtom),
  set: CoreSetSnackbar(CoreAtom)
});

export default CoreSnackbarSelector; 
