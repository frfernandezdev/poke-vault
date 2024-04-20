"use client";

import {
  VStack as ChakraVStack,
  TabPanel as ChakraTabPanel,
  Divider as ChakraDivider,
} from "@chakra-ui/react";
import PokemonTabPanelMove from "../PokemonTabPanelMove";

export type PokemonTabPanelMovesProps = {
  moves?: string[];
};

export default function PokemonTabPanelMoves({
  moves,
}: PokemonTabPanelMovesProps) {
  const renderMoves = (name: string, index: number) => {
    const isLatest = index < (moves?.length ?? 0) - 1;
    return (
      <PokemonTabPanelMove
        key={index}
        name={name}
        divider={!isLatest ? <span></span> : <ChakraDivider />}
      />
    );
  };
		
	const skeletons = Array(8).fill(null);
  return (
    <ChakraTabPanel>
      <ChakraVStack spacing="4" mt="3">
        {moves?.map(renderMoves)}
				{!moves && skeletons.map(renderMoves)}
      </ChakraVStack>
    </ChakraTabPanel>
  );
}
