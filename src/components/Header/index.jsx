import "./style.css";
import logoPokemon from "../../assets/images/background/logo-pokemon.png";
import pokedexPokemon from "../../assets/images/background/pokedex.png";

function Header() {
  return (
    <div className="header-container">
      <img className="logo-pokemon" src={logoPokemon} alt="" />
    </div>
  );
}
export default Header;
