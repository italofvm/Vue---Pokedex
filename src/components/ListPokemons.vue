<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"])
</script>

<template>
  <div class="col-4">
    <div
      class="card w-100 h-100 d-flex align-items-center justify-content-center p-1 mb-2 md-3 cardListPokemon"
    >
      <p class="text-center">{{ pokemon.name }}</p>
      <img :src="urlBaseSvg" class="card-img-top" alt="..." height="90" />
    </div>
  </div>
</template>

<style>
.cardListPokemon {
  background: rgb(63, 251, 210);
  background: radial-gradient(
    circle,
    rgba(92, 232, 87, 0.6) 0%,
    rgba(252, 243, 70, 0.2) 100%
  );
  cursor: pointer;
}
.cardListPokemon:hover {
  background: rgb(63, 251, 238);
  background: radial-gradient(
    circle,
    rgba(63, 251, 188, 0.6) 0%,
    rgba(70, 252, 188, 0.4) 100%
  );
}
.cardListPokemon img:hover {
  padding: 0.1rem;
}
</style>
