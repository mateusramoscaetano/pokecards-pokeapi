import api from "../services/api";

async function otherInfosPokemon(type) {
  try {
    const response = await api.get(`/type/${type}`);

    const resistencePokemon1 =
      response.data.damage_relations.half_damage_to[0]?.name;
    const resistencePokemon2 =
      response.data.damage_relations.half_damage_to[1]?.name;

    const weaknessPokemon =
      response.data.damage_relations.double_damage_from[0]?.name;

    return {
      resistencePokemon1,
      resistencePokemon2,
      weaknessPokemon,
    };
  } catch (error) {}
}

export default otherInfosPokemon;
