"use client";

import { PokemonState, initialPokemonState } from "@/modules/pokemon/domain/PokemonState";
import { atom } from "recoil";

export const PokemonAtom = atom<PokemonState>({
  key: "PokemonAtom",
  default: initialPokemonState,
});
