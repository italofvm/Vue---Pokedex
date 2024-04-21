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
let pokemonSelectedAbilities = ref([])
let pokemonSelectedGames = ref([])
let pokemonSelectedTypes = ref([])

const fetchPokemons = async (pokemon) =>
  await api.get(`${pokemon}`).then((res) => {
    pokemons.value = res.data.results
  })

onMounted(fetchPokemons)

const pokemonFiltered = computed(() => {
  if (pokemons.value && searchPokemon) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase())
    )
  }
})

const selectPokemon = async (pokemon) => {
  loading.value = true
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => {
      pokemonSelected.value = res
      pokemonSelectedAbilities.value = res.abilities.map(
        (ability) => ability.ability.name
      )
      pokemonSelectedGames.value = res.game_indices.map(
        (gameIndex) => gameIndex.version.name
      )

      pokemonSelectedTypes.value = res.types.map((type) => type.type.name)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      loading.value = false
    })
}

</script>

<template>
  <main>
    <div class="container text-center text-body-secondary">
      <div class="row mt-4 mb-5">
        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected
            :name="pokemonSelected?.name"
            :xp="pokemonSelected?.base_experience"
            :height="pokemonSelected?.height"
            :abilities="pokemonSelectedAbilities"
            :games="pokemonSelectedGames"
            :types="pokemonSelectedTypes"
            :image="pokemonSelected?.sprites.other.dream_world.front_default"
            :loading="loading"
          />
        </div>
        <!-- Card Details -->

        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label for="filterName" class="form-label">Nome</label>
                <input
                  v-model="searchPokemon"
                  type="text"
                  class="form-control"
                  id="filterName"
                  placeholder="Filtrar por nome..."
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
