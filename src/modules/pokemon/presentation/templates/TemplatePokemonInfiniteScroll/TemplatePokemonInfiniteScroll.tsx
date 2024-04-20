import { ReactNode } from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import MotionContainer from "@/modules/shared/presentation/atoms/MotionContainer/MotionContainer";

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
      <MotionContainer
        initial={{ paddingTop: 110 }}
        style={{ paddingTop }}
      >
        {infiniteScroll}
      </MotionContainer>
    </>
  );
}
