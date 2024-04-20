"use client";

import HeaderPokemon from "@/modules/pokemon/presentation/organisms/HeaderPokemon";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import PokemonSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonSelector";
import { useEffect } from "react";
import TemplatePokemonDetail from "@/modules/pokemon/presentation/templates/TemplatePokemonDetail";
import PokemonTabs from "@/modules/pokemon/presentation/organisms/PokemonTabs";
import PokemonSelectedSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonSelectedSelector";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [pokemon, setPokemon] = useRecoilState(PokemonSelector);
  const [, setSelectedPokemon] = useRecoilState(
    PokemonSelectedSelector
  );
	const { data } = useSWR(pokemon ? null :`/api/pokemons/${slug}`);

  useEffect(() => {
    if (!data) return;

    setPokemon(data);
    setSelectedPokemon([data.id]);
  }, [data, setPokemon, setSelectedPokemon]);

  return (
    <TemplatePokemonDetail
      header={<HeaderPokemon />}
      tabs={
        <PokemonTabs
          species={pokemon?.species}
          height={pokemon?.height}
          weight={pokemon?.weight}
          abilities={pokemon?.abilities}
          stats={pokemon?.stats}
          moves={pokemon?.moves}
        />
      }
    />
  );
}
