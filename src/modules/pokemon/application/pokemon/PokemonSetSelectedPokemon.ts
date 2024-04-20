"use client";

import { GetRecoilValue, RecoilState, SetRecoilState } from "recoil";
import { PokemonState } from "../../domain/PokemonState";

const PokemonSetSelectedPokemon =
  (atom: RecoilState<PokemonState>) =>
  ({ get, set }: { get: GetRecoilValue,  set: SetRecoilState }, newValue: any) => {
		const selecteds = get(atom).selecteds;

		if (selecteds.includes(newValue)) {
			return;
		}

    set(atom, (prevState) => ({
      ...prevState,
			selecteds: [
				...prevState.selecteds,
				...newValue
			]
    }));
  };

export default PokemonSetSelectedPokemon;

