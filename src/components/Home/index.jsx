import "./style.css";
import pokeball from "../../assets/images/icons/pokeball.png";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="home-section">
      <span className="text-description typing-animation">Pokemon Cards</span>
      <span className="text2 tracking-in-contract-bck-bottom">
        Um projeto que consome uma das apis de pokemon mais famosas entre os
        desenvolvedores web.
      </span>
      <img
        className="pokeball tracking-in-contract-bck-bottom"
        src={pokeball}
        alt="pokeball"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="all"
          smooth={true}
          duration={800}
          className="go-to-cards tracking-in-contract-bck-bottom"
        >
          Explorar
        </Link>
      </div>
    </div>
  );
}

export default Home;
