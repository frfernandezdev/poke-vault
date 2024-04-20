type ContextParams = {
	params: {
		slug: string;
	}
}

export async function GET(_, { params: { slug }}: ContextParams) {
	const pokemons = await fetch(`${process.env.API_BASE_URL}/pokemon/${slug}`);
	const payload = await pokemons.json(); 
		
	const { sprites, abilities, stats, moves, types } = payload;
	
	sprites['front_default'] = sprites['other']['dream_world']['front_default'];

	const species = await fetch(payload['species']['url']).then(res => res.json());

	payload['species'] = {
		name: species['name'],
		color: species['color']['name']
	};

	abilities.forEach(({ ability }: any, index: number) => {
		abilities[index] = ability['name'];
	});

	stats.forEach(({ base_stat, effort, stat: { name } }: any, index: number) => {
		stats[index] = {
			base_stat,
			effort,
			name
		}
	});

	types.forEach(({ type: { name } }: any, index: number) => {
		types[index] = name;
	});

	moves.forEach(({ move: { name } }: any, index: number) => {
		moves[index] = name;
	})

	delete payload['game_indices'];

	return Response.json(payload);	
}

