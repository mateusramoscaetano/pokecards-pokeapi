import "./style.css";
import Card from "../Card";
import prevIcon from "../../assets/images/icons/prev-icon.png";
import nextIcon from "../../assets/images/icons/next-icon.png";
import topPoke from "../../assets/images/icons/top-pokeball.png";
import botPoke from "../../assets/images/icons/bottom-pokeball.png";

function PokemonSection({
  handleInput,
  goToNextPage,
  goToPreviousPage,
  cardsPerPage,
  pokemonFind,
  currentPage,
}) {
  function renderCards() {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = pokemonFind.slice(indexOfFirstCard, indexOfLastCard);

    return currentCards.map((poke) => (
      <Card
        key={poke.id}
        name={poke.name}
        number={poke.id.toString().padStart(3, "0")}
        type={poke.type}
        resistence1={poke.resistence1}
        resistence2={poke.resistence2}
        w={poke.weight}
        cp={poke.cp}
        img={poke.img}
        weakness={poke.weakness}
        hp={poke.hp}
        back_color={poke.back_color}
      />
    ));
  }
  return (
    <div id="all" className="pokemons-group">
      <div className="pokeball-group">
        <input onKeyDown={handleInput}></input>
        <img className="top-poke" src={topPoke} alt="top-pokeball" />
        <img className="bot-poke" src={botPoke} alt="bottom pokeball" />
      </div>
      <div className="pokemons-container">{renderCards()}</div>
      <div>
        <img
          className="left-icon"
          onClick={goToPreviousPage}
          src={prevIcon}
          alt="prev-icon"
        />
        <img
          className="right-icon"
          onClick={goToNextPage}
          src={nextIcon}
          alt="next-icon"
        />
      </div>
    </div>
  );
}

export default PokemonSection;
