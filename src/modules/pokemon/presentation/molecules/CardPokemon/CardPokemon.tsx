"use client";

import {
  Flex as ChakraFlex,
  Heading as ChakraHeading,
  Card as ChakraCard,
  CardBody as ChakraCardBody,
} from "@chakra-ui/react";
import CardPokemonTags from "../CardPokemonTags";
import { Link, Image as ChakraImage } from "@chakra-ui/next-js";
import { MouseEventHandler } from "react";
import useColors from "@/modules/shared/infrastructure/hooks/useColors";
import CardPokemonTitle from "../CardPokemonTitle";
import CardPokemonImage from "../CardPokemonImage";

export type CardPokemonProps = {
	id?: number;
  name?: string;
  image?: string;
  color?: string;
  types?: string[];
	isSelected?: boolean;
	onClick?: MouseEventHandler | undefined;
};

export default function CardPokemon({
	id,
  name,
  image,
  color,
  types,
	isSelected,
	onClick,
}: CardPokemonProps) {
	const { bgColor, bgColorHover, textColor } = useColors(color ?? 'white');

  return (
    <ChakraCard
      as={Link}
      rounded="15px"
      bgColor={isSelected ? bgColorHover : bgColor}
      _hover={{ bg: bgColorHover }}
      _active={{
        borderColor: bgColor,
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
			href={`/pokemons/${id}`}
			onClick={onClick}
    >
      <ChakraCardBody>
				<CardPokemonTitle name={name} color={textColor}/>
				<CardPokemonImage name={name} image={image} />
        <CardPokemonTags types={types} color={textColor} />
      </ChakraCardBody>
    </ChakraCard>
  );
}
