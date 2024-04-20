import {
  Box as ChakraBox,
  Flex as ChakraFlex,
  Heading as ChakraHeading,
  Container as ChakraContainer,
  IconButton as ChakraIconButton,
  useTheme,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { CoreDrawerSelector } from "@/modules/core/infrastructure/recoil";
import { motion, useTransform, useMotionTemplate, MotionValue } from "framer-motion";

export type HeaderProps = {
	scrollYProgress: MotionValue<number>;
};

export default function Header({ scrollYProgress }: HeaderProps) {
  const theme = useTheme();
  const [drawer, setDrawer] = useRecoilState(CoreDrawerSelector);
  const transformScaleHeading = useTransform(
    scrollYProgress,
    [0, 0.05],
    [1.3, 1],
  );
  const transformPositionYHeading = useTransform(
    scrollYProgress,
    [0, 0.05],
    [46, 0],
  );
  const transformHeight = useTransform(
    scrollYProgress,
    [0, 0.05],
    [110, 64],
  );
  const firstLayerShadowTransparent = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 0.15],
  );
  const secondLayerShadowTransparent = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 0.08],
  );

	const shadow = useMotionTemplate`0 4px 6px -1px rgba(0, 0, 0, ${firstLayerShadowTransparent}), 0 2px 4px -1px rgba(0, 0, 0, ${secondLayerShadowTransparent})`;

  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };

  return (
    <ChakraBox
			as={motion.div}
      position="fixed"
      width="100%"
      zIndex={theme.zIndices.sticky}
      bgColor="var(--chakra-colors-chakra-body-bg)"
			initial={{
				height: 110,
				boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0), 0 2px 4px -1px rgba(0, 0, 0, 0)"
			}}
			style={{
				height: transformHeight,
				boxShadow: shadow
			}}
    >
      <ChakraContainer p={3}>
        <motion.div>
          <ChakraFlex alignItems="center">
            <ChakraIconButton
              aria-label="menu"
              icon={<HamburgerIcon />}
              onClick={handleDrawerToggle}
              bg="transparent"
            />
            <ChakraBox flex="1">
              <ChakraHeading
                as={motion.h6}
                size="md"
								width="fit-content"
                ml="4"
                style={{
									scale: transformScaleHeading,
                  translateY: transformPositionYHeading,
                }}
              >
                PokeVault
              </ChakraHeading>
            </ChakraBox>
            <ChakraIconButton
              aria-label="menu"
              icon={<SearchIcon />}
              bg="transparent"
            />
          </ChakraFlex>
        </motion.div>
      </ChakraContainer>
    </ChakraBox>
  );
}
