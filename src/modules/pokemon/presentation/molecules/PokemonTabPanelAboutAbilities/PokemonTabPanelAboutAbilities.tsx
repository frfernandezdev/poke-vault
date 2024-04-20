"use client";

import { HStack as ChakraHStack,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";
import PokemonTabPanelAboutAbility from "../PokemonTabPanelAboutAbility";
export type PokemonTabPanelAboutAbilitiesProps = {
  abilities?: string[];
};

export default function PokemonTabPanelAboutAbilities({
  abilities,
}: PokemonTabPanelAboutAbilitiesProps) {
  const renderAbilities = (ability: string, index: number) => {
    const isLatest = index < (abilities?.length ?? 0) - 1;
    return (
      <PokemonTabPanelAboutAbility
				key={index}
        ability={ability}
        divider={!isLatest ? <span></span> : <span>,</span>}
      />
    );
  };
	if (!abilities?.length) {
		return (
      <ChakraHStack>
        <ChakraSkeletonText noOfLines={1} width="12"/>
        <ChakraSkeletonText noOfLines={1} width="12"/>
      </ChakraHStack>
		)	
	}

  return <ChakraHStack>{abilities?.map(renderAbilities)}</ChakraHStack>;
}
