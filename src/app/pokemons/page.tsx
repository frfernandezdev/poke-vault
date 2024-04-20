"use client";

import Header from "@/modules/pokemon/presentation/organisms/Header";
import TemplatePokemonInfiniteScroll from "@/modules/pokemon/presentation/templates/TemplatePokemonInfiniteScroll";
import PokemonInfiniteScroll from "@/modules/pokemon/presentation/organisms/PokemonInfiniteScroll";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Box as ChakraBox } from "@chakra-ui/react";

export default function Page() {
	const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: rootRef });

  return (
    <ChakraBox ref={rootRef}>
      <TemplatePokemonInfiniteScroll
				scrollYProgress={scrollYProgress} 
        header={<Header scrollYProgress={scrollYProgress} />}
        infiniteScroll={<PokemonInfiniteScroll />}
      />
    </ChakraBox>
  );
}
