export interface PokemonState {
	item: Pokemon | null;
	selecteds: number[];
}

export const initialPokemonState: PokemonState = {
	item: null,
	selecteds: []
};
