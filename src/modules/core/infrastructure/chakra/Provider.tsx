"use client";

import { ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
			<ColorModeScript 
				initialColorMode={theme.config.initialColorMode}
				type={'localStorage'} 
			/>
      {children}
    </ChakraProvider>
  );
}
