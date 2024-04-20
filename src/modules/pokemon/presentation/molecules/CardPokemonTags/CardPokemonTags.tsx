"use client";

import { Box as ChakraBox, VStack as ChakraVStack } from "@chakra-ui/react";
import CardPokemonTag from "../CardPokemonTag";

export type CardPokemonTagsProps = {
  types?: string[];
  color?: string;
};

export default function CardPokemonTags({
  types,
  color,
}: CardPokemonTagsProps) {
  const renderTag = (name: string, index: number) => (
    <CardPokemonTag key={index} name={name} color={color} />
  );

	const skeletons = Array(2).fill(null);
  return (
    <ChakraBox position="absolute" left={5} bottom={5}>
      <ChakraVStack alignItems="start">
				{types?.map(renderTag)}
				{!types && skeletons?.map(renderTag)}
			</ChakraVStack>
    </ChakraBox>
  );
}
