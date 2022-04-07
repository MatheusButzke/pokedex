import axios from 'axios';

const apiEvolution = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
})

export default apiEvolution;