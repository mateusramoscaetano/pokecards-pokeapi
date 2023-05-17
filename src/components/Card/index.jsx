import "./style.css";
import shield from "../../assets/images/icons/shield-solid.svg";
import trendingDown from "../../assets/images/icons/arrow-trend-down-solid.svg";
import { useState } from "react";

function Card({
  name,
  number,
  type,
  hp,
  cp,
  w,
  resistence1,
  resistence2,
  weakness,
  img,
  back_color,
  locale,
}) {
  const [vibrate, setVibrate] = useState(false);

  function mouseOver() {
    setVibrate(true);
  }
  function mouseLeave() {
    setVibrate(false);
  }

  return (
    <div style={{ backgroundColor: back_color }} className={`container-card`}>
      <div
        className={`pokemon-img ${vibrate && "vibrate-1"}`}
        style={{ backgroundImage: `url(${img})` }}
        onMouseLeave={mouseLeave}
        onMouseOver={mouseOver}
      >
        <div className="number-pokemon">{number}</div>
      </div>
      <div className="info">
        <div className="name-type-info">
          <div className="name-pokemon font-800">
            {name}
            <div className="type font-700">{type}</div>
          </div>
          <div className="name-type font-500">{locale}</div>
        </div>
        <div className="stats">
          <div className="hp-cp-w">
            <div className="hp">
              <span style={{ marginRight: "4px" }} className="font-400">
                HP
              </span>
              <span className="font-700">{hp}</span>
            </div>
            <div className="cp">
              <span style={{ marginRight: "4px" }} className="font-400">
                H
              </span>
              <span className="font-700">{cp}</span>
            </div>
            <div className="w">
              <span style={{ marginRight: "4px" }} className="font-400">
                W
              </span>
              <span className="font-700">{w}</span>
            </div>
          </div>
          <div className="resistence-weakness">
            <div className="resistence1 font-700">
              <img className="icon-resistence" src={shield} alt="" />
              {resistence1}
            </div>
            <div className="resistence2 font-700">
              <img className="icon-resistence" src={shield} alt="" />
              {resistence2}
            </div>
            <div className="weakness font-700">
              <img className="icon-weakness" src={trendingDown} alt="" />{" "}
              {weakness}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
