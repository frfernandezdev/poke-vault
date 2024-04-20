"use client";

import { selector } from "recoil";
import { PokemonAtom } from "../atoms/PokemonAtom";
import PokemonGetSelectedPokemon from "@/modules/pokemon/application/pokemon/PokemonGetSelectedPokemon";
import PokemonSetSelectedPokemon from "@/modules/pokemon/application/pokemon/PokemonSetSelectedPokemon";

const PokemonSelectedSelector = selector({
  key: "PokemonSelectedSelector",
	get: PokemonGetSelectedPokemon(PokemonAtom),
	set: PokemonSetSelectedPokemon(PokemonAtom)
});

export default PokemonSelectedSelector;
