"use client";

import {
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  TabPanels as ChakraTabPanels,
  Tab as ChakraTab,
} from "@chakra-ui/react";
import PokemonTabPanelAbout from "../../molecules/PokemonTabPanelAbout";
import PokemonTabPanelBaseStats from "../../molecules/PokemonTabPanelBaseStats";
import PokemonTabPanelMoves from "../../molecules/PokemonTabPanelMoves";

export type PokemonTabsProps = {
  species?: {
    name: string;
  };
  height?: number;
  weight?: number;
  abilities?: string[];
  stats?: {
    base_stat: number;
    effort: number;
    name: string;
  }[];
  moves?: string[];
};

export default function PokemonTabs({
  species,
  height,
  weight,
  abilities,
  stats,
  moves,
}: PokemonTabsProps) {
  return (
    <ChakraTabs isFitted>
      <ChakraTabList>
        <ChakraTab>About</ChakraTab>
        <ChakraTab>Base Stats</ChakraTab>
        <ChakraTab>Moves</ChakraTab>
      </ChakraTabList>
      <ChakraTabPanels>
        <PokemonTabPanelAbout
          specie={species?.name}
          height={height}
          weight={weight}
          abilities={abilities}
        />
        <PokemonTabPanelBaseStats stats={stats} />
        <PokemonTabPanelMoves moves={moves} />
      </ChakraTabPanels>
    </ChakraTabs>
  );
}
