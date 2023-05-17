function selectColor(type) {
  switch (type) {
    case "normal":
      return "#9a9da1";
    case "fire":
      return "#f8a54f";
    case "water":
      return "#559edf";
    case "grass":
      return "#5dbe62";
    case "electric":
      return "#edd53f";
    case "ice":
      return "#7ed4c9";
    case "fighting":
      return "#d94256";
    case "poison":
      return "#b563ce";
    case "ground":
      return "#d78555";
    case "flying":
      return "#9bb4e8";
    case "psychic":
      return "#f87c7a";
    case "bug":
      return "#9dc130";
    case "rock":
      return "#cec18c";
    case "ghost":
      return "#6970c5";
    case "dragon":
      return "#0773c7";
    case "dark":
      return "#5f606d";
    case "steel":
      return "#5596a4";
    case "fairy":
      return "#ef97e6";
    default:
      return "gray";
  }
}

export default selectColor;
