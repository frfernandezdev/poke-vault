import { RecoilState, SetRecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreSetLoader =
  (atom: RecoilState<CoreState>) =>
  ({ set }: { set: SetRecoilState }, newValue: any) => {
    set(atom, (prevState) => ({
      ...prevState,
			loader: newValue
    }));
  };

export default CoreSetLoader;
