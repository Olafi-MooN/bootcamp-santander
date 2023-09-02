import { PokeApi } from "./poke-api.js";

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('pokemonId');
const contentSelectedElement = document.querySelector('.content-selected');

PokeApi.getPokemonsInfo(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(res => {
  contentSelectedElement.innerHTML = JSON.stringify(res, null, 2)
});
