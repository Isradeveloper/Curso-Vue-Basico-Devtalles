import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((element, index) => index + 1);
};

const getPokemonsOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));

  return pokemons;
};

const getPokemonsNames = async ([a, b, c, d] = []) => {
  const promiseArr = [a, b, c, d].map((id) => pokemonApi.get(`/${id}`));

  const responses = await Promise.all(promiseArr);

  return responses.map((response, index) => {
    const { data, status } = response;

    return {
      name: data.name,
      id: data.id,
    };
  });
};

export default getPokemonsOptions;
