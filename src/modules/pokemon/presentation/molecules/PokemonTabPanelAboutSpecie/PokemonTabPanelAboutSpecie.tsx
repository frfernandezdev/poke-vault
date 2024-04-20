"use client";

import {
  Text as ChakraText,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type PokemonTabPanelAboutSpecieProps = {
	specie?: string;
}

export default function PokemonTabPanelAboutSpecie({ specie }: PokemonTabPanelAboutSpecieProps) {
	if (!specie) {
		return (
			<ChakraSkeletonText noOfLines={1}/>
		)
	}
	return (
		<ChakraText as="h6" fontSize="sm">
			{specie}
		</ChakraText>
	);
}
