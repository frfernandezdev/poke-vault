import { GetRecoilValue, RecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreGetSnackbar =
  (atom: RecoilState<CoreState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).snackbar;
  };

export default CoreGetSnackbar;
