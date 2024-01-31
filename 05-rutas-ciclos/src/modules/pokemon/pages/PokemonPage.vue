<template>
  <template v-if="pokemon">
    <h1>Pokemon Page <small>{{ `${id} - ${pokemon.name}` }}</small></h1>
    <img :src="pokemon.sprites.front_default" :alt="pokemon">
  </template>
</template>

<script>
export default {

  props: {

    id: {
      type: Number,
      required: true
    }

  },

  data(){
    return {
      pokemon: null
    }
  },

  methods: {

    async getPokemon () {

      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json())
        console.log(pokemon);
        this.pokemon = pokemon
      } catch (error) {
        this.$router.push('/')
      }

    }

  },
  
  created() {
    // const { id } = this.$route.params
    // this.id = id
    this.getPokemon()
  },

  watch: {

    id() {

      this.getPokemon();

    }

  }

}
</script>