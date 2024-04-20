"use client";

import { 
	Tag as ChakraTag, 
	TagLabel as ChakraTagLabel,
	SkeletonText as ChakraSkeletonText
} from "@chakra-ui/react";

export type CardPokemonTagProps = {
  name?: string;
  color?: string;
};

export default function CardPokemonTag({ name, color }: CardPokemonTagProps) {
	if (!name) {
		return (
			<ChakraSkeletonText 
				noOfLines={1}
				skeletonHeight="4"
				width="45px"
				rounded="20"
				overflow="hidden"
			/>
		)
	}
  return (
    <ChakraTag
      size="sm"
      variant="subtle"
      bgColor="rgba(0,0,0,.40)"
      borderRadius="full"
    >
      <ChakraTagLabel color={color}>{name}</ChakraTagLabel>
    </ChakraTag>
  );
}
