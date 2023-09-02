import { PokeApi } from './poke-api.js';

var pokemons = [];
var pokemonsElement = document.querySelector('.pokemons');
var pagination = { offset: 0, limit: 20 }

function pokemonLi(pokemon) {
  return `
  <li class="pokemon" onclick="javascript:window.location.href = window.location.href+'pokemon-details.html?pokemonId=${pokemon.id}'" style="background-color: ${getColorCard(pokemon.types[0]?.type?.name)}">
    <span class="number">#${pokemon.id}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types" >
        ${pokemon.types.map(type => `<li class="type" style="background-color: ${getColorCard(type.type.name)};filter: brightness(1.1) ">${type.type.name}</li >`).join('')}
      </ol >
  <img draggable="false" src="${pokemon.sprites.other.home.front_default}" alt="pokemon-name">
  </div>
  </li >
  `
}

async function getPokemons(options) {
  const pokemonsList = await PokeApi.getPokemonsList(options);

  const pokemons = await Promise.all(pokemonsList.results?.map(async (element) => {
    const infoJson = await PokeApi.getPokemonsInfo(element.url);
    return { ...element, ...infoJson };
  }));

  return pokemons;
}

function getColorCard(color) {
  const colors = {
    "ghost": "#9400D3",
    "steel": "#778899",
    "dragon": "#4B0082",
    "flying": "#6495ED",
    "water": "#007FFF",
    "ice": "#00FFFF",
    "???": "#006666",
    "grass": "#008000",
    "bug": "#808000",
    "normal": "#808080",
    "electric": "#FFFF00",
    "ground": "#C2B280",
    "rock": "#8B4513",
    "fire": "#FFA500",
    "fighting": "#800000",
    "dark": "#251810",
    "psychic": "#FF69B4",
    "fairy": "#FF99CC",
    "poison": "#800080"

  }
  return colors[color];
}

function loadMore() {
  pagination.offset = pagination.offset + 20;

  getPokemons(pagination).then(res => {
    pokemons = res;
    pokemonsElement.innerHTML += pokemons.map(pokemon => pokemonLi(pokemon)).join('')
  });
}

getPokemons(pagination).then(res => {
  pokemons = res;
  pokemonsElement.innerHTML = pokemons.map(pokemon => pokemonLi(pokemon)).join('')
});

var buttonLoadMore = document.getElementById('button-load-more');
buttonLoadMore.onclick = loadMore;
