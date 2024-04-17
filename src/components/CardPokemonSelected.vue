<template>
  <div
    class="card card-pokemon-selected"
    :class="loading ? '' : 'animate__animated animate__flipInY'"
  >
    <img
      v-if="pokemon.name"
      :src="image"
      height="500px"
      class="card-img-top pt-2"
      :alt="pokemon.name"
    />
    <img
      v-else
      src="../assets/img/egg_pokemon.svg"
      height="500px"
      class="card-img-top pt-2"
      alt="???"
    />
    <div class="card-body">
      <h5 class="card-title text-center text-uppercase">
        {{ pokemon.name || "???" }}
      </h5>
      <hr />
      <div class="row">
        <section class="col">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>Altura:</strong>
          <span>{{ pokemon.height }}</span>
        </section>
        <section class="col">
          <strong>Ataque:</strong>
          <span class="ability">{{ pokemon.abilitiesOne }}</span>
          <span class="ability">{{ pokemon.abilitiesTwo }}</span>
        </section>
        <section class="col">
          <strong>Games:</strong>
          <span>{{ pokemon.games }}</span>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
const pokemon = defineProps([
  "name",
  "xp",
  "height",
  "image",
  "loading",
  "abilitiesOne",
  "abilitiesTwo",
])
</script>
<style scoped>
.card-pokemon-selected {
  height: 85vh;
  background: rgb(184, 238, 174);
  background: radial-gradient(
    circle,
    rgba(184, 238, 174, 0.8) 0%,
    rgba(148, 187, 233, 0.8) 100%
  );
}
</style>
