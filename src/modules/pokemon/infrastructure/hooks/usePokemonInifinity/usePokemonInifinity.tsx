import { useCallback } from "react";
import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

const getKey = (pageIndex: number, previousPageData: any) => {
	if (previousPageData && !previousPageData?.results?.length) return null 

  return `/api/pokemons?offset=${pageIndex * 20}&limit=20`;
};

export default function usePokemonInfinity(): SWRInfiniteResponse & {
  hasMore: boolean;
  next: () => any;
	pokemons: any[];
} {
	const returnHooks = useSWRInfinite(getKey, { revalidateFirstPage: false });
	const { data, isLoading, error, size, setSize } = returnHooks; 
	const pokemons: any[] = [];
  let count = 0;

  if (!isLoading && !error) {
    data?.forEach(({ count, results }) => {
      count = count;
      pokemons.push(...results);
    });
  }

  const hasMore = (size * 20) >= count;

  const next = useCallback(() => {
    setSize(size + 1);
  }, [ size, setSize ]);

  return { ...returnHooks, pokemons, next, hasMore };
}
