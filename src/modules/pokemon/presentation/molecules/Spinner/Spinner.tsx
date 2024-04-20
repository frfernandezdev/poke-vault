"use client";

import {
  Flex as ChakraFlex,
  Spinner as ChakraSpinner,
} from "@chakra-ui/react";

export default function Spinner() {
	return (
    <ChakraFlex height="25px" my="6" overflow="hidden" justifyContent="center">
      <ChakraSpinner />
    </ChakraFlex>
	);
}
