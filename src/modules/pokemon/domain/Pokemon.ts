interface Pokemon {
	id: number;
	name: string;
	sprites: { 
		front_default: string;
	},
	species: {
		id: number;
		name: string;
		color: string;
	},
	height: number;
	weight: number;
	abilities: string[];
	stats: {
		base_stat: number;
		effort: number;
		name: string;
	}[];
	types: string[];
	moves: string[];
}
