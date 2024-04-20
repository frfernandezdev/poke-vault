"use client";

import {
  VStack as ChakraVStack,
  TabPanel as ChakraTabPanel,
} from "@chakra-ui/react";
import PokemonTabPanelBaseStat from "../PokemonTabPanelBaseStat/PokemonTabPanelBaseStat";

export type PokemonTabPanelBaseStatsProps = {
  stats?: {
    base_stat: number;
    effort: number;
    name: string;
  }[];
};

export default function PokemonTabPanelBaseStats({
  stats,
}: PokemonTabPanelBaseStatsProps) {
  const renderStats = (
    { base_stat, name }: { base_stat: number; name: string },
    index: number
  ) => (
    <PokemonTabPanelBaseStat key={index} name={name} base_stat={base_stat} />
  );
	
	const skeletons = Array(8).fill({});
  return (
    <ChakraTabPanel>
      <ChakraVStack spacing="4" mt="3">
        {stats?.map(renderStats)}
				{!stats && skeletons.map(renderStats)}
      </ChakraVStack>
    </ChakraTabPanel>
  );
}
