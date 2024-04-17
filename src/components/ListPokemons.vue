<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"])
</script>

<template>
  <div class="col-sm-4">
    <div class="card p-2 mb-2 md-3 cardListPokemon">
      <p class="text-center">{{ pokemon.name }}</p>
      <img :src="urlBaseSvg" class="card-img-top" alt="..." height="90" />
    </div>
  </div>
</template>

<style>
.cardListPokemon {
  background: rgb(184, 238, 174);
  background: radial-gradient(
    circle,
    rgba(184, 238, 174, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  cursor: pointer;
}
.cardListPokemon:hover {
  background: rgb(130, 145, 66);
  background: radial-gradient(
    circle,
    rgb(130, 145, 66) 0%,
    rgb(120, 169, 226) 100%
  );
}
.cardListPokemon img:hover {
  padding: 0.1rem;
}
</style>
