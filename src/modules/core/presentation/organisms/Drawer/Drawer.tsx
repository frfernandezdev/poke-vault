"use client";

import { CoreDrawerSelector } from "@/modules/core/infrastructure/recoil";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Drawer as ChakraDrawer,
  DrawerOverlay as ChakraDrawerOverlay,
  DrawerContent as ChakraDrawerContent,
  DrawerHeader as ChakraDrawerHeader,
  DrawerBody as ChakraDrawerBody,
  DrawerFooter as ChakraDrawerFooter,
  IconButton as ChakraIconButton,
	List as ChakraList,
	ListItem as ChakraListItem,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

export default function Drawer() {
  const [drawer, setDrawer] = useRecoilState(CoreDrawerSelector);

  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };
  return (
    <ChakraDrawer isOpen={drawer} placement="left" onClose={handleDrawerToggle}>
      <ChakraDrawerOverlay />
      <ChakraDrawerContent>
        <ChakraDrawerHeader pt={12}>PokeVault</ChakraDrawerHeader>
        <ChakraDrawerBody>
					<ChakraList spacing={4}>
						<ChakraListItem p={2}>
							<Link href="/pokemons">
								Pokemons
							</Link>
						</ChakraListItem>
						<ChakraListItem p={2}>
							<Link href="/pokemons">
								Abilities
							</Link>
						</ChakraListItem>
						<ChakraListItem p={2}>
							<Link href="/pokemons">
								Genders
							</Link>
						</ChakraListItem>
						<ChakraListItem p={2}>
							<Link href="/pokemons">
								Types
							</Link>
						</ChakraListItem>
					</ChakraList>
				</ChakraDrawerBody>
        <ChakraDrawerFooter>
          <ChakraIconButton
            aria-label="close"
            icon={<ArrowBackIcon />}
            onClick={handleDrawerToggle}
						bg="transparent"
          />
        </ChakraDrawerFooter>
      </ChakraDrawerContent>
    </ChakraDrawer>
  );
}
