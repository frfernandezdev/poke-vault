"use client";

import { ReactNode } from "react";
import {
  Box as ChakraBox,
  Container as ChakraContainer,
  useTheme,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import PokemonColorSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonColorSelector";

export type TemplatePokemonDetailProps = {
  header: ReactNode;
  tabs: ReactNode;
};

export default function TemplatePokemonDetail({
  header,
  tabs,
}: TemplatePokemonDetailProps) {
  const theme = useTheme();
  const { bgColor } = useRecoilValue(PokemonColorSelector);

  return (
    <ChakraBox width="100%" minH="100vh" bgColor={bgColor}>
      {header}
      <ChakraContainer
        width="100%"
        minHeight="55vh"
        pt="10"
        bgColor="var(--chakra-colors-chakra-body-bg)"
        borderTopLeftRadius={theme.sizes["12"]}
        borderTopRightRadius={theme.sizes["12"]}
				shadow="0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)"
      >
        {tabs}
      </ChakraContainer>
    </ChakraBox>
  );
}
