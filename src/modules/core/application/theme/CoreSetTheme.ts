import { RecoilState, SetRecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreSetTheme =
  (atom: RecoilState<CoreState>) =>
  ({ set }: { set: SetRecoilState }, newValue: any) => {
    set(atom, (prevState) => ({
      ...prevState,
			theme: newValue
    }));
  };

export default CoreSetTheme;
