function getPokemons() {
  return fetch("http://localhost:3000/articles").then(e => e.json());
}

module.exports = { getPokemons };
