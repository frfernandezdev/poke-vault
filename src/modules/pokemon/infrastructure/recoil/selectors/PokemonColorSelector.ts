"use client";

import { selector } from "recoil";
import { PokemonAtom } from "../atoms/PokemonAtom";
import PokemonGetColorPokemon from "@/modules/pokemon/application/pokemon/PokemonGetColorPokemon";

const PokemonColorSelector = selector({
  key: "PokemonColorSelector",
	get: PokemonGetColorPokemon(PokemonAtom),
});

export default PokemonColorSelector;
