import { GetRecoilValue, RecoilState } from "recoil";
import { CoreState } from "../../domain/CoreState";

const CoreGetTheme =
  (atom: RecoilState<CoreState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).theme;
  };

export default CoreGetTheme;
