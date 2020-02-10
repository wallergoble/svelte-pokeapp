<script>
  import { onMount, log } from "svelte";
  import Card from "./Card.svelte";
  import { getPokemons } from "./api.js";

  let pokemons = [];

  onMount(async function() {
    pokemons = await getPokemons();
  });
</script>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<main>
  <h1>Pokemon</h1>
  {#each pokemons as pokemon}
    {log(pokemon)}
    <Card {...pokemon} />
  {/each}
</main>
