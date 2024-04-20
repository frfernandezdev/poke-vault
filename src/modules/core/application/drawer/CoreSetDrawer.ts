"use client";

import { RecoilState, SetRecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreSetDrawer =
  (atom: RecoilState<CoreState>) =>
  ({ set }: { set: SetRecoilState }, newValue: any) => {
    set(atom, (prevState) => ({
      ...prevState,
			drawer: newValue
    }));
  };

export default CoreSetDrawer;
