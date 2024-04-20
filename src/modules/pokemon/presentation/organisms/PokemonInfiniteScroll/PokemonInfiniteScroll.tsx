"use client";

import { useRecoilState } from "recoil";
import { SimpleGrid as ChakraSimpleGrid } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import usePokemonInfinity from "@/modules/pokemon/infrastructure/hooks/usePokemonInifinity/usePokemonInifinity";
import CardPokemon from "@/modules/pokemon/presentation/molecules/CardPokemon";
import { Spinner } from "../../molecules/Spinner";
import PokemonSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonSelector";
import PokemonSelectedSelector from "@/modules/pokemon/infrastructure/recoil/selectors/PokemonSelectedSelector";

export default function PokemonInfiniteScroll() {
  const { pokemons, next, hasMore } = usePokemonInfinity();
  const [, setPokemon] = useRecoilState(PokemonSelector);
  const [selectedPokemon, setSelectedPokemon] = useRecoilState(
    PokemonSelectedSelector
  );

  const handleClickCardPokemon = (pokemon: Pokemon) => () => {
    setSelectedPokemon([pokemon.id]);
    setPokemon(pokemon);
  };

  const renderCard = (pokemon: Pokemon) => {
    const {
      id,
      name,
      sprites: { front_default },
      species: { color },
      types,
    } = pokemon;
    return (
      <CardPokemon
        key={id}
        id={id}
        name={name}
        image={front_default}
        color={color}
        types={types}
				isSelected={selectedPokemon.includes(id)}
        onClick={handleClickCardPokemon(pokemon)}
      />
    );
  };

  const renderCardsSkeleton = () => {
    const skeletons = Array(10).fill(null);
    return (
      <ChakraSimpleGrid
        spacing="4"
        templateColumns="repeat(auto-fill, minmax(165px, 1fr))"
        mt="6"
        px="1"
      >
        {skeletons.map((_, index: number) => (
          <CardPokemon key={index} />
        ))}
      </ChakraSimpleGrid>
    );
  };

  const loader = pokemons?.length ? <Spinner /> : renderCardsSkeleton();
  return (
    <InfiniteScroll
      dataLength={pokemons?.length ?? 0}
      next={next}
      hasMore={hasMore}
      loader={loader}
      scrollThreshold="80%"
    >
      <ChakraSimpleGrid
        spacing="4"
        templateColumns="repeat(auto-fill, minmax(165px, 1fr))"
        mt="6"
        px="1"
      >
        {pokemons?.map(renderCard)}
      </ChakraSimpleGrid>
    </InfiniteScroll>
  );
}
