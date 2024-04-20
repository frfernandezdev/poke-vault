"use client";

import {
  Text as ChakraText,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type PokemonTabPanelAboutWeightProps = {
	weight?: number;
}

export default function PokemonTabPanelAboutWeight({ weight }: PokemonTabPanelAboutWeightProps) {
	if (!weight) {
		return (
			<ChakraSkeletonText noOfLines={1}/>
		)
	}
	return (
		<ChakraText as="h6" fontSize="sm">
			{weight} lbs
		</ChakraText>
	);
}
