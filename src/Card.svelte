<script>
  export let name;
  export let description;
</script>

<style>
  p.name {
    color: hotpink;
  }
</style>

<article>
  <p class="name" data-testid="banana">Name: {name}</p>
  <p class="name" data-testid="card-description">Description: {description}</p>
</article>
