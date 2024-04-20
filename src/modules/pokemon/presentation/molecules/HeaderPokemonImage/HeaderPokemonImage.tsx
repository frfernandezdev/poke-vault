"use client";

import { SkeletonCircle as ChakraSkeletonCircle } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/next-js";

export type HeaderPokemonImageProps = {
  name?: string;
  image?: string;
};

export default function HeaderPokemonImage({
  name,
  image,
}: HeaderPokemonImageProps) {
  if (name && image) {
    return (
      <ChakraImage
        src={image}
        alt={name}
        position="absolute"
        width={260}
        height={260}
      />
    );
  }
  return <ChakraSkeletonCircle width="260px" height="260px" />;
}
