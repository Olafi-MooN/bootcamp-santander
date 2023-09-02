export class PokeApi {
  static url = 'http://pokeapi.co/api/v2/';

  static async getPokemonsList(options) {
    const { offset, limit } = options;
    const response = await fetch(`${this.url}pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data;
  }

  static async getPokemonsInfo(url) {
    const detailsResponse = await fetch(url);
    const detailsJson = await detailsResponse.json();
    return detailsJson;
  }
}