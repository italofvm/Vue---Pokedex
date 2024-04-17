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

const fetchPokemons = () =>
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
</script>

<template>
  <main>
    <div class="container text-center">
      <div class="row mt-4 mb-5">
        <div class="col-sm-12 col-md-6">
          <div class="card">
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
              />
            </div>
          </div>
        </div>
        <!-- Card Pokemons -->

        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected />
        </div>
        <!-- Card Details -->
      </div>
    </div>
  </main>
</template>
