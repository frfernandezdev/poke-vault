import { GetRecoilValue, RecoilState } from "recoil";
import { PokemonState } from "../../domain/PokemonState";
import { bgColor, bgColorHover, textColor } from "@/modules/shared/infrastructure/utils";

const PokemonGetColorPokemon =
  (atom: RecoilState<PokemonState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    const pokemon = get(atom).item;
    const color = pokemon?.species?.color as string;

    return { 
			bgColor: bgColor(color), 
			bgColorHover: bgColorHover(color),
			textColor: textColor(color),
			color, 
		};
  };

export default PokemonGetColorPokemon;
