"use client";

import PokemonGetPokemon from "@/modules/pokemon/application/pokemon/PokemonGetPokemon";
import PokemonSetPokemon from "@/modules/pokemon/application/pokemon/PokemonSetPokemon";
import { selector } from "recoil";
import { PokemonAtom } from "../atoms/PokemonAtom";

const PokemonSelector = selector({
  key: "PokemonSelector",
	get: PokemonGetPokemon(PokemonAtom),
	set: PokemonSetPokemon(PokemonAtom)
});

export default PokemonSelector;
