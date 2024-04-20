import { GetRecoilValue, RecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreGetDrawer =
  (atom: RecoilState<CoreState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).drawer;
  };

export default CoreGetDrawer;
