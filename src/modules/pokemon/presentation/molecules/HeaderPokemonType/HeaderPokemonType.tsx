"use client";

import {
  Tag as ChakraTag,
  TagLabel as ChakraTagLabel,
	SkeletonText as ChakraSkeletonText
} from "@chakra-ui/react";

export type HeaderPokemonTypeProps = {
	name?: string;
	color?: string;
}

export default function HeaderPokemonType({
	name, 
	color
}: HeaderPokemonTypeProps) {
	if (!name) {
		return (
			<ChakraSkeletonText 
				noOfLines={1}
				skeletonHeight="6"
				width="55px"
				rounded="20"
				overflow="hidden"
			/>
		)
	}
	return (
		<ChakraTag
			size="md"
			variant="subtle"
			bgColor="rgba(0,0,0,.40)"
			borderRadius="full"
		>
			<ChakraTagLabel color={color}>{name}</ChakraTagLabel>
		</ChakraTag>
	)
}
