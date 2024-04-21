<template>
  <div
    class="card card-pokemon-selected"
    :class="loading ? '' : 'animate__animated animate__flipInY'"
  >
    <img
      v-if="pokemon.name"
      :src="image"
      height="350px"
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
      <h5 class="card-title text-center text-capitalize pb-2">
        {{ pokemon.name || "???" }}
      </h5>
      <span
        :class="`p-2 m-1 text-center rounded-pill text-white ${ref}`"
        v-for="ref in types"
      >
        {{ ref }}</span
      >
      <hr />

      <div class="row">
        <section class="col">
          <div class="row">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item bg-transparent border-0 text-start">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button bg-transparent border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    XP
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ pokemon.xp }}
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-transparent border-0 text-start">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed bg-transparent border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Altura
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ pokemon.height }}
                  </div>
                </div>
              </div>
            </div>
            <!-- testes -->
          </div>
        </section>
        <section class="col">
          <div class="accordion" id="accordion">
            <div class="accordion-item bg-transparent border-0 text-start">
              <h2 class="accordion-header">
                <button
                  class="accordion-button bg-transparent border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Habilidades
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordion"
              >
                <div
                  class="accordion-body"
                  v-for="ability in pokemon.abilities"
                >
                  {{ ability }}
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-0 text-start">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed bg-transparent border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Games
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse games"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body" v-for="game in games">
                  {{ game }}
                </div>
              </div>
            </div>
          </div>
          <!-- testes -->
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
  "abilities",
  "games",
  "types",
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

.games {
  max-height: 30vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 5%;
}

.normal {
  background-color: #a6a877;
}

.grass {
  background-color: #77c850;
}

.fire {
  background-color: #ee7f30;
}

.water {
  background-color: #678fee;
}

.electric {
  background-color: #f7cf2e;
}

.ice {
  background-color: #98d5d7;
}

.ground {
  background-color: #dfbf69;
}

.flying {
  background-color: #a98ff0;
}

.poison {
  background-color: #a040a0;
}

.fighting {
  background-color: #bf3029;
}

.psychic {
  background-color: #f65687;
}

.dark {
  background-color: #725847;
}

.rock {
  background-color: #b8a137;
}

.bug {
  background-color: #a8b720;
}

.ghost {
  background-color: #6e5896;
}

.steel {
  background-color: #b9b7cf;
}

.dragon {
  background-color: #6f38f6;
}

.fairy {
  background-color: #f9aec7;
}
</style>
