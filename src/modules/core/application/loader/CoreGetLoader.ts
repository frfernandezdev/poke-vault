import { GetRecoilValue, RecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreGetLoader =
  (atom: RecoilState<CoreState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).loader;
  };

export default CoreGetLoader;
