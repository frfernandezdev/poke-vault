"use client";

import { GetRecoilValue, RecoilState } from "recoil";
import { PokemonState } from "../../domain/PokemonState";

const PokemonGetSelectedPokemon =
  (atom: RecoilState<PokemonState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).selecteds;
  };

export default PokemonGetSelectedPokemon;
