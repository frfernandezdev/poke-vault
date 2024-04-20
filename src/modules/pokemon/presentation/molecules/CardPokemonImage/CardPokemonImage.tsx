"use client";

import {
  Flex as ChakraFlex,
  SkeletonCircle as ChakraSkeletonCircle,
} from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/next-js";

export type CardPokemonImageProps = {
  image?: string;
  name?: string;
};

export default function CardPokemonImage({
  name,
  image,
}: CardPokemonImageProps) {
  if (name && image) {
    return (
    <ChakraFlex mt="2" justifyContent="end" alignItems="end" objectFit="fill">
      <ChakraImage src={image} alt={name} ml="10" width={100} height={100} />
    </ChakraFlex>
		);
  }
  return (
		<ChakraFlex mt="2" justifyContent="end" alignItems="end" objectFit="fill">
			<ChakraSkeletonCircle ml="10" width="100px" height="100px" />
		</ChakraFlex>
  );
}
