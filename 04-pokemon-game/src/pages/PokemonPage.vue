<template>
  <div v-if="!loading">
    <h1>¿Quíen es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection-pokemon="checkAnswer($event)" :enableOptions="options.enable" :checking-answer="options.checkingAnswer" :answer="options.answer" @new-game="newGame()"/>
  </div>

  <div v-else class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script >
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log( getPokemonOptions());

export default {
  name: "pokemon-page-component",

  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      loading: true,
      showPokemon: false,
      options: {
        enable: true,
        checkingAnswer: false,
        answer: {
          win: false,
          msg: null
        },
      }
    };
  },

  methods: {
    async mixPokemonArray() {
      this.loading = true;
      this.pokemonsArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rndInt];
      this.loading = false;
    },

    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.options.enable = false
      this.options.checkingAnswer = true

      setTimeout(() => {
        if (pokemonId == this.pokemon.id) {
          this.options.answer = {win: true, msg: `Muy bien!, es ${this.pokemon.name} `}
          this.options.checkingAnswer = false
        } else {
          this.options.answer = {win: false, msg: `Oops, era ${this.pokemon.name}` }
          this.options.checkingAnswer = false
        }
      }, 1000);
    },

    async newGame() {

      this.loading = true
      await this.mixPokemonArray()
      this.showPokemon = false

      this.options.enable = true
      this.options.checkingAnswer = false
      this.answer = {
        win: false,
        msg: null
      }

    }
  },

  mounted() {
    this.mixPokemonArray();
  },

  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style lang="scss">


.loader-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
}
.loader::before,
.loader::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform-origin: bottom;
}
.loader::after {
  background: radial-gradient(at 75% 15%, #fffb, #0000 35%),
    radial-gradient(at 80% 40%, #0000, #0008),
    radial-gradient(circle 5px, #fff 94%, #0000),
    radial-gradient(circle 10px, #000 94%, #0000),
    linear-gradient(#f93318 0 0) top / 100% calc(50% - 5px),
    linear-gradient(#fff 0 0) bottom/100% calc(50% - 5px) #000;
  background-repeat: no-repeat;
  animation: l20 1s infinite cubic-bezier(0.5, 120, 0.5, -120);
}
.loader::before {
  background: #ddd;
  filter: blur(8px);
  transform: scaleY(0.4) translate(-13px, 0px);
}
@keyframes l20 {
  30%,
  70% {
    transform: rotate(0deg);
  }
  49.99% {
    transform: rotate(0.2deg);
  }
  50% {
    transform: rotate(-0.2deg);
  }
}
</style>