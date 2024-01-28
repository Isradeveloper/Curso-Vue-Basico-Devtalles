<template>
  <div class="options-container">
    <ul v-if="enableOptions">
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectionPokemon', pokemon.id)">{{ pokemon.name }}</li>  
    </ul>

    <div v-else>

      <div v-if="checkingAnswer">
      
        <div class="loader"></div>

      </div>

      <template v-else>

        <h2 class="fade-in">{{ answer.msg }}</h2>

        <button @click="$emit('newGame')">Volver a jugar</button>

      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: "pokemon-options-component",

  props: {
    pokemons: {
      type: Array,
      required: true
    },
    enableOptions: {
      type: Boolean,
      required: true
    },
    checkingAnswer: {
      type: Boolean,
      required: true
    },
    answer: {
      type: Object,
      required: true
    }
  },

}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: rgb(48, 46, 106);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 10px;
}

li:hover {
  background-color: rgb(34, 32, 80);
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: rgb(57, 48, 221);
  color: white;
  padding: 10px 50px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: rgb(103, 96, 229);
    transition: all 0.3s linear;
    cursor: pointer;
  }
}

</style>