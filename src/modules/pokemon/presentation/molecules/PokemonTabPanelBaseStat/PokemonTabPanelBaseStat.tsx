"use client";

import {
  SimpleGrid as ChakraSimpleGrid,
  Progress as ChakraProgress,
  VStack as ChakraVStack,
  Text as ChakraText,
  Heading as ChakraHeading,
  TabPanel as ChakraTabPanel,
	SkeletonText as ChakraSkeletonText,
	Skeleton as ChakraSkeleton
} from "@chakra-ui/react";

export type PokemonTabPanelBaseStatProps = {
  name?: string;
  base_stat?: number;
};

export default function PokemonTabPanelBaseStat({
  name,
  base_stat,
}: PokemonTabPanelBaseStatProps) {

	if (!name && !base_stat) {
		return (
			<ChakraSimpleGrid
				width="100%"
				spacing="2"
				py="2"
				templateColumns="repeat(auto-fill, 20% 20% 55%)"
			>
				<ChakraSkeletonText noOfLines={1} height="4"/>
				<ChakraSkeletonText noOfLines={1} height="4"/>
				<ChakraSkeleton height="2"/>
			</ChakraSimpleGrid>
		);
	}

  return (
    <ChakraSimpleGrid
      width="100%"
      spacing="2"
			p="2"
      templateColumns="repeat(auto-fill, 20% 10% 65%)"
    >
      <ChakraHeading as="h6" size="xs" textTransform="uppercase">
        {name}:
      </ChakraHeading>
      <ChakraText as="p" fontSize="sm">
        {base_stat}
      </ChakraText>
      <ChakraProgress value={base_stat} size="xs" />
    </ChakraSimpleGrid>
  );
}
