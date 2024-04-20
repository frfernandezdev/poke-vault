"use client";

import { GetRecoilValue, RecoilState } from "recoil";
import { PokemonState } from "../../domain/PokemonState";

const PokemonGetPokemon =
  (atom: RecoilState<PokemonState>) =>
  ({ get }: { get: GetRecoilValue }) => {
    return get(atom).item;
  };

export default PokemonGetPokemon;
