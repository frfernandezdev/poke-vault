"use client";

import {
  SimpleGrid as ChakraSimpleGrid,
  Heading as ChakraHeading,
  TabPanel as ChakraTabPanel,
} from "@chakra-ui/react";
import PokemonTabPanelAboutSpecie from "../PokemonTabPanelAboutSpecie";
import PokemonTabPanelAboutHeight from "../PokemonTabPanelAboutHeight";
import PokemonTabPanelAboutWeight from "../PokemonTabPanelAboutWeight";
import PokemonTabPanelAboutAbilities from "../PokemonTabPanelAboutAbilities";

export type PokemonTabPanelAboutProps = {
	specie?: string;
	height?: number;
	weight?: number;
	abilities?: string[];
};

export default function PokemonTabPanelAbout({
	specie,
	height,
	weight,
	abilities
}: PokemonTabPanelAboutProps) {
	return (
		<ChakraTabPanel>
			<ChakraSimpleGrid
				spacing="4"
				templateColumns="repeat(auto-fill, 30% 65%)"
				mt="3"
			>
				<ChakraHeading as="p" size="xs">
					Species:
				</ChakraHeading>
				<PokemonTabPanelAboutSpecie specie={specie}/>
				<ChakraHeading as="p" size="xs">
					Height:
				</ChakraHeading>
				<PokemonTabPanelAboutHeight height={height}/>
				<ChakraHeading as="p" size="xs">
					Weight:
				</ChakraHeading>
				<PokemonTabPanelAboutWeight weight={weight}/>
				<ChakraHeading as="p" size="xs">
					Abilities:
				</ChakraHeading>
				<PokemonTabPanelAboutAbilities abilities={abilities}/>
			</ChakraSimpleGrid>
		</ChakraTabPanel>
	);
}
