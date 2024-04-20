"use client";

import { ReactNode } from "react";
import {
  Text as ChakraText,
  SkeletonText as ChakraSkeletonText,
} from "@chakra-ui/react";

export type PokemonTabPanelAboutAbilityProps = {
  ability?: string;
  divider?: ReactNode;
};

export default function PokemonTabPanelAboutAbility({
  ability,
  divider,
}: PokemonTabPanelAboutAbilityProps) {
  if (!ability) {
    return <ChakraSkeletonText noOfLines={1} />;
  }
  return (
    <ChakraText as="h6" fontSize="sm">
      {ability}
      {divider}
    </ChakraText>
  );
}
