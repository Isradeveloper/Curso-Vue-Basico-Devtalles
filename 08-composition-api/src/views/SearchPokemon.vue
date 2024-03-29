<template>
  <h1>Buscar pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Número del pokemón"
      v-model="pokemonId"
      ref="inputId"
    >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { onActivated, ref } from 'vue'
import { useRouter, rout } from 'vue-router';
export default {

  setup() {

    const router = useRouter()

    const pokemonId = ref(1)
    const inputId = ref()

    onActivated(() => {
      inputId.value.select()
    })

    return {
      pokemonId,
      inputId,

      onSubmit: () => {
        console.log(`Pokemon a buscar ${pokemonId.value}`);
        router.push({ name: 'pokemon-id', params: {id: pokemonId.value} })
      }
    }

  }

}
</script>

<style>

</style>