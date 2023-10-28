export const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

export async function loader(id) {
  const data = await getPokemon(id);
  return data;
}
