import axios from "axios"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=250&offset=0/",
})


export default api
