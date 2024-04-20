"use client";

import {
  Text as ChakraText,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type PokemonTabPanelAboutHeightProps = {
  height?: number;
};

export default function PokemonTabPanelAboutHeight({
  height,
}: PokemonTabPanelAboutHeightProps) {
  if (!height) {
    return <ChakraSkeletonText noOfLines={1} />;
  }
  return (
    <ChakraText as="h6" fontSize="sm">
      {height}&quot;
    </ChakraText>
  );
}
