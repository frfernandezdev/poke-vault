import { ReactNode } from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";
import { MotionValue, motion, useTransform } from "framer-motion";

export type TemplatePokemonInfiniteScrollProps = {
	scrollYProgress: MotionValue<number>;
  header: ReactNode;
  infiniteScroll: ReactNode;
};

export default function TemplatePokemonInfiniteScroll({
	scrollYProgress,
  header,
  infiniteScroll,
}: TemplatePokemonInfiniteScrollProps) {
  const paddingTop = useTransform(scrollYProgress, [0, 0.05], [110, 64]);
  return (
    <>
      {header}
      <ChakraContainer
        as={motion.div}
        initial={{ paddingTop: 110 }}
        style={{ paddingTop }}
      >
        {infiniteScroll}
      </ChakraContainer>
    </>
  );
}
