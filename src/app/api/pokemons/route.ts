import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = searchParams.get("limit") ?? 10;
  const offset = searchParams.get("offset") ?? 0;

  const pokemons = await fetch(
    `${process.env.API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  const payload = await pokemons.json();
  const { results } = payload;

  const promisesDetail = results.map(
    ({ url }: { name: string; url: string }) => {
      return fetch(url);
    }
  );

  const resolvePromisesDetail = await Promise.allSettled(promisesDetail);

  payload["results"] = [];
  for (const result of resolvePromisesDetail) {
    if (result.status === "rejected") {
      return;
    }

    const {
      id,
      name,
      base_experience,
      order,
      species,
      sprites,
      stats,
      types,
      abilities,
      weight,
      height,
      moves,
    } = await result.value.json();

    sprites["front_default"] = sprites["other"]["dream_world"]["front_default"];

    abilities.forEach(({ ability: { name } }: any, index: number) => {
      abilities[index] = name;
    });

    stats.forEach(
      ({ base_stat, effort, stat: { name } }: any, index: number) => {
        stats[index] = {
          base_stat,
          effort,
          name,
        };
      }
    );

    types.forEach(({ type: { name } }: any, index: number) => {
      types[index] = name;
    });

    moves.forEach(({ move: { name } }: any, index: number) => {
      moves[index] = name;
    });

    payload["results"].push({
      id,
      name,
      base_experience,
      order,
      species,
      sprites,
      stats,
      types,
      abilities,
      weight,
      height,
      moves,
    });
  }

  const promiseSpecies = payload["results"].map(({ species: { url } }: any) => {
    return fetch(url);
  });

  const resolvePromisesSpecies = await Promise.allSettled(promiseSpecies);

  for (const result of resolvePromisesSpecies) {
    if (result.status === "rejected") {
      return;
    }

    const { id, name, color } = await result.value.json();

    const pokemons = payload["results"] as any[];
    const pokemonIndex = pokemons.findIndex(
      ({ species }) => species.name === name
    );

    const pokemon = pokemons[pokemonIndex];

    pokemon["species"] = {
      id,
      name,
      color: color.name,
    };
  }

  return Response.json(payload);
}
