"use client";

import {
  Box as ChakraBox,
  Flex as ChakraFlex,
  Spacer as ChakraSpacer,
  Container as ChakraContainer,
  IconButton as ChakraIconButton,
  HStack as ChakraHStack,
} from "@chakra-ui/react";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import PokemonColorSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonColorSelector";
import PokemonSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonSelector";
import HeaderPokemonImage from "../../molecules/HeaderPokemonImage";
import HeaderPokemonTitle from "../../molecules/HeaderPokemonTitle";
import HeaderPokemonTypes from "../../molecules/HeaderPokemonTypes";

export type HeaderPokemonProps = {};

export default function HeaderPokemon({}: HeaderPokemonProps) {
  const router = useRouter();
  const { textColor } = useRecoilValue(PokemonColorSelector);
  const pokemon = useRecoilValue(PokemonSelector);

  return (
    <ChakraBox width="100%" height="45vh">
      <ChakraContainer position="relative" height="100%" pt={12} pb={4}>
        <ChakraFlex>
          <ChakraIconButton
            aria-label="back"
            icon={<ArrowBackIcon />}
            bg="transparent"
            onClick={router.back}
            color={textColor}
          />
          <ChakraSpacer />
          <ChakraIconButton
            aria-label="like"
            icon={<StarIcon />}
            bg="transparent"
            color={textColor}
          />
        </ChakraFlex>
        <ChakraFlex mt="6">
					<HeaderPokemonTitle name={pokemon?.name} color={textColor}/>
        </ChakraFlex>
        <ChakraHStack mt="2" ml="4" spacing="2">
					<HeaderPokemonTypes types={pokemon?.types} color={textColor}/>
        </ChakraHStack>
        <ChakraFlex
					position="relative"
					width="100%"
					height="26vh"
          justifyContent="center"
          alignItems="end"
					mt="4"
        >
					<HeaderPokemonImage name={pokemon?.name} image={pokemon?.sprites?.front_default} />
        </ChakraFlex>
      </ChakraContainer>
    </ChakraBox>
  );
}
