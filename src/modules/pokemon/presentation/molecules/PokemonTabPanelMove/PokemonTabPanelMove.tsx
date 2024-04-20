"use client";

import {
  Flex as ChakraFlex,
  Heading as ChakraHeading,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export type PokemonTabPanelMoveProps = {
  name?: string;
  divider?: ReactNode;
};

export default function PokemonTabPanelMove({
  name,
  divider,
}: PokemonTabPanelMoveProps) {
  if (!name) {
    return (
      <ChakraFlex width="100%" p="4">
        <ChakraSkeletonText noOfLines={1} width="100%" height="4" />
      </ChakraFlex>
    );
  }
  return (
		<>
			<ChakraFlex width="100%" p="3">
				<ChakraHeading as="h6" size="xs" width="100%" textTransform="capitalize">
					{name}
				</ChakraHeading>
			</ChakraFlex>
			{divider}
		</>
  );
}
