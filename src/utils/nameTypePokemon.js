import api from "../services/api";

async function nameTypePokemon(pokemonName) {
  try {
    const response = await api.get(`/pokemon/${pokemonName}`);
    const id = response.data.id;
    const damageParameter = response.data.types[0].type.name;
    const hpPokemon = response.data.stats[0].base_stat;
    const backgroundPokemon = response.data.sprites.front_default;
    const weightPokemon = `${response.data.weight / 10}kg`;
    const heightPokemon = `${response.data.height / 10}m`;

    return {
      id,
      damageParameter,
      hpPokemon,
      backgroundPokemon,
      weightPokemon,
      heightPokemon,
    };
  } catch (error) {}
}

export default nameTypePokemon;
