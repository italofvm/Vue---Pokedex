<script setup>
import { onMounted, reactive, ref, computed } from "vue"
import api from "@/services/api"
import ListPokemons from "../components/ListPokemons.vue"
import CardPokemonSelected from "../components/CardPokemonSelected.vue"

let urlBaseSvg = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
)
let pokemons = ref([])
let searchPokemon = ref("")
let pokemonSelected = reactive(ref())
let loading = ref(false)

const fetchPokemons = (pokemon) =>
  api
    .get("/pokemon?limit=250&offset=0")
    .then((res) => (pokemons.value = res.data.results))
    .catch((err) => console.log(err))
onMounted(fetchPokemons)

const pokemonFiltered = computed(() => {
  if (pokemons.value && searchPokemon) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(searchPokemon.value.toLocaleLowerCase())
    )
  }
})

const selectPokemon = async (pokemon) => {
  loading.value = true
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (pokemonSelected.value = res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.value = false
    })

  console.log(pokemonSelected.value)
}
</script>

<template>
  <main>
    <div class="container text-center text-body-secondary">
      <div class="row mt-4 mb-5">
        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label hidden for="searchPokemon" class="form-label"
                  >Pesquisar</label
                >
                <input
                  v-model="searchPokemon"
                  type="text"
                  class="form-control"
                  id="searchPokemon"
                  placeholder="Pesquisar..."
                />
              </div>
              <!-- Search -->

              <ListPokemons
                v-for="pokemon in pokemonFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
        <!-- Card Pokemons -->

        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected
            :name="pokemonSelected?.name"
            :xp="pokemonSelected?.base_experience"
            :height="pokemonSelected?.height"
            :abilitiesOne="pokemonSelected?.abilities[0].ability.name"
            :abilitiesTwo="pokemonSelected?.abilities[1].ability.name"
            :image="pokemonSelected?.sprites.other.dream_world.front_default"
            :loading="loading"
          />
        </div>
        <!-- Card Details -->
      </div>
    </div>
  </main>
</template>

<style>
.card-list {
  max-height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
