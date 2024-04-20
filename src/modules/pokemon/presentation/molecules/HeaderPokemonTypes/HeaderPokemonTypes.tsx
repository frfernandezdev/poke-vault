import HeaderPokemonType from "../HeaderPokemonType/HeaderPokemonType";

export type HeaderPokemonTypesProps = {
  types?: string[];
  color?: string;
};

export default function HeaderPokemonTypes({
  types,
  color,
}: HeaderPokemonTypesProps) {
  const renderType = (name: string, index: number) => (
    <HeaderPokemonType key={index} name={name} color={color} />
  );

	const skeletons = Array(2).fill(null);
  return (
		<>
			{types?.map(renderType)}
			{!types && skeletons.map(renderType)}
		</>
	);
}
