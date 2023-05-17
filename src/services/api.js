import axios from "axios";

export default axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});