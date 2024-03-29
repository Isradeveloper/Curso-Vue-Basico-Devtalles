<template>
  <h1 v-if="!pokemon && !errorMsg">Buscando...</h1>
  <h1 v-else-if="errorMsg">{{ errorMsg }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>

</template>

<script>
import usePokemon from '@/composables/usePokemon';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { watch } from 'vue';

export default {

  setup() {

    const route = useRoute()
    
    const { errorMsg, isLoading, pokemon, SearchPokemon } = usePokemon(route.params.id)

    watch(
      () => route.params.id,
      ( value, oldValue ) => {
        SearchPokemon(value)
      }
    )

    onBeforeRouteLeave(() => {
      const answer = window.confirm('¿Está seguro que desea salir?')

      if ( !answer ) return false // false, bloquea la salida
    })

    return {
      errorMsg,
      isLoading,
      pokemon,

      SearchPokemon
    }

  }

}
</script>

<style>

</style>