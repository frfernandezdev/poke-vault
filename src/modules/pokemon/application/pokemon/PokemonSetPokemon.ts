"use client";

import { RecoilState, SetRecoilState } from "recoil";
import { PokemonState } from "../../domain/PokemonState";

const PokemonSetPokemon =
  (atom: RecoilState<PokemonState>) =>
  ({ set }: { set: SetRecoilState }, newValue: any) => {
    set(atom, (prevState) => ({
      ...prevState,
			item: newValue
    }));
  };

export default PokemonSetPokemon;
