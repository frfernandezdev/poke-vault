"use client";

import {
  Heading as ChakraHeading,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type HeaderPokemonTitleProps = {
  name?: string;
  color?: string;
};

export default function HeaderPokemonTitle({
  name,
  color,
}: HeaderPokemonTitleProps) {
  if (!name) {
    return (
      <ChakraSkeletonText
        noOfLines={1}
        skeletonHeight="10"
        width="60%"
        rounded="15"
        overflow="hidden"
      />
    );
  }
  return (
    <ChakraHeading size="xl" ml="4" color={color} textTransform="capitalize">
      {name}
    </ChakraHeading>
  );
}
