<script setup>
import { onMounted, reactive, ref } from "vue"
import api from "@/services/api"
import ListPokemons from "../components/ListPokemons.vue"

let urlBaseSvg = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
)
let pokemons = ref([])
const fetchPokemons = () =>
  api
    .get("/pokemon?limit=100000&offset=0")
    .then((res) => (pokemons.value = res.data.results))
    .catch((err) => console.log(err))
onMounted(fetchPokemons)
</script>

<template>
  <main>
    <div class="container text-center">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <div class="card">
            <div class="card-body row">
              <ListPokemons
                v-for="pokemon in pokemons"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
              />
            </div>
          </div>
        </div>
        <!-- Card Pokemons -->

        <div class="col-sm-12 col-md-6">
          <!-- <div class="card" style="width: 18rem">
            <img
              src="/src/assets/img/Charmander.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Charmander</h5>
              <p class="card-text">Ele lanca fogo</p>
              <a href="#" class="btn btn-primary">Ver Detalhes</a>
            </div>
          </div> -->
        </div>
        <!-- Card Details -->
      </div>
    </div>
  </main>
</template>
