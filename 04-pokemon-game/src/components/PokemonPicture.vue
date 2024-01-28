<template>

  <div class="container">
    <img
    v-if="showPokemon == false"
    :src="imgSrc"
    alt="pokemonImage"
    class="hidden-pokemon pokemon-img"
  >  
      
  <img
    v-if="showPokemon"
    :src="imgSrc"
    alt="pokemonImage"
    class="fade-in pokemon-img"
    style="z-index: 2;"
  >

  <img 
    v-if="showPokemon"
    :src="imgSrc"
    alt="pokemonImage"
    class="fade-in blur-pokemon pokemon-img"
  >

  </div>

</template>

<script>
export default {
  name: "pokemon-picture-component",

  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  }
}
</script>

<style lang="scss" scoped>

.hidden-pokemon {
  filter: brightness(0);
}

.pokemon-img {
  position: absolute;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  height: 200px;
}

.container {
  align-items: center;
  display: flex;
  min-height: 300px;
  justify-content: center;
  min-width: 100vw;
  position: relative;
}

.blur-pokemon {
  filter: blur(40px);
  z-index: 1;
}

</style>