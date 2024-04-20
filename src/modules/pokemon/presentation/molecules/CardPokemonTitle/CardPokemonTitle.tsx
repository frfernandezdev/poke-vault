"use client";

import { 
	Heading as ChakraHeading, 
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type CardPokemonTitleProps = {
  name?: string;
  color?: string;
};

export default function CardPokemonTitle({
  name,
  color,
}: CardPokemonTitleProps) {
	if (!name) {
		return (
      <ChakraSkeletonText
        noOfLines={1}
        skeletonHeight="4"
        width="110px"
        rounded="15"
        overflow="hidden"
      />
		)
	}
  return (
    <ChakraHeading as="h3" size="sm" color={color}>
      {name}
    </ChakraHeading>
  );
}
