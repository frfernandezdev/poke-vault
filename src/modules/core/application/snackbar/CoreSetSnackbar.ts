import { RecoilState, SetRecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreSetSnackbar =
  (atom: RecoilState<CoreState>) =>
  ({ set }: { set: SetRecoilState }, newValue: any) => {
    set(atom, (prevState) => ({
      ...prevState,
			snackbar: newValue
    }));
  };

export default CoreSetSnackbar;
