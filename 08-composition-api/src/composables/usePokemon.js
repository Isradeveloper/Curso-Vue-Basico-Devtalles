import { ref } from "vue";
import axios from 'axios';

const usePokemon = ( pokemonId = '1' ) => {

  const pokemon = ref()
  const isLoading = ref(false)
  const errorMsg = ref()

  const SearchPokemon = async( id ) => {

    if ( !id ) return

    isLoading.value = true
    pokemon.value = null
    pokemon.errorMsg = null

    try {
      debugger
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      pokemon.value = data

    } catch (error) {
      errorMsg.value = 'No se pudo cargar ese pokemon'
    } finally {
      isLoading.value = false
    }

  }

  SearchPokemon(pokemonId)

  return {
    pokemon,
    isLoading,
    errorMsg,

    SearchPokemon
  }

}

export default usePokemon