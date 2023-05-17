import "./style.css";
import api from "../services/api";
import React, { useState, useEffect } from "react";
import { capitalize } from "lodash";
import Home from "../components/Home";
import Header from "../components/Header";
import Ash from "../components/Ash";
import PokemonSection from "../components/PokemonSection";
import selectColor from "../utils/selectColor";
import nameTypePokemon from "../utils/nameTypePokemon";
import otherInfosPokemon from "../utils/otherInfosPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFind, setPokemonFind] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  useEffect(() => {
    allPokemons();
  }, []);

  async function allPokemons() {
    try {
      const response = await api.get("/pokemon/?limit=60");
      const pokemons = response.data.results;
      const objectPokemons = [];
      for (let i of pokemons) {
        const {
          damageParameter,
          hpPokemon,
          backgroundPokemon,
          weightPokemon,
          heightPokemon,
          id,
        } = await nameTypePokemon(i.name);
        const { resistencePokemon1, resistencePokemon2, weaknessPokemon } =
          await otherInfosPokemon(damageParameter);
        const back_color = selectColor(damageParameter);

        const allDataPokemons = {
          id,
          name: capitalize(i.name),
          weight: weightPokemon,
          cp: heightPokemon,
          type: capitalize(damageParameter),
          resistence1: capitalize(resistencePokemon1),
          resistence2: capitalize(resistencePokemon2),
          img: backgroundPokemon,
          weakness: capitalize(weaknessPokemon),
          hp: hpPokemon,
          back_color,
        };
        objectPokemons.push(allDataPokemons);
      }
      setPokemonFind(objectPokemons);
      setPokemon(objectPokemons);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function searchPokemon(namePokemon) {
    try {
      const localPokemon = [...pokemon];
      const pokemonFounded = localPokemon.filter((poke) => {
        const lowerCaseName = poke.name.toLowerCase();
        const lowerCaseType = poke.type.toLowerCase();
        const lowerCaseSearch = namePokemon.toLowerCase();

        return (
          lowerCaseName.startsWith(lowerCaseSearch) ||
          lowerCaseType.startsWith(lowerCaseSearch)
        );
      });
      pokemonFounded.sort((a, b) => a.name.localeCompare(b.name));

      console.log(pokemonFounded);
      setPokemonFind(pokemonFounded);
      console.log(pokemon);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleInput(e) {
    if (e.key !== "Enter") {
      return;
    }
    if (e.target.value.trim() === "" || !e.target.value) {
      allPokemons();
      return;
    }

    searchPokemon(e.target.value);
    e.target.value = "";
  }

  function goToNextPage() {
    if (currentPage < pokemonFind.length / 10) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(1);
    }
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage(Math.ceil(pokemonFind.length / 10));
    }
  }

  return (
    <>
      <div id="home" className="container bg-pan-right">
        <Header />
        <main className="main-app">
          <Home />
          <Ash />
        </main>
      </div>
      <PokemonSection
        handleInput={handleInput}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        pokemonFind={pokemonFind}
      />
    </>
  );
}

export default App;
