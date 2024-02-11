<template>
  <h1>COUNTER - VUEX</h1>
  <!-- <h2>Direct access: {{ $store.state.count }}</h2> -->
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <hr>
  
  <h1>VUEX</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>Last Mutation: {{ lastMutation }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>


  <h2>Direct getter {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  name: 'counter-component',

  // computed: mapState(["count"])


  computed: {
    countComputed() {
      // return this.$store.state.count
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
    // ...mapState({
    //   count: state => state.count
    // })
  },

  methods: {
    increment() {
      this.$store.commit( "counter/increment" );
    },
    incrementBy(value) {
      this.$store.commit( "counter/incrementBy", value );
    },
    // incrementRandomInt() {
    //   this.$store.dispatch('incrementRandomInt')
    // }



    // ...mapActions(["incrementRandomInt"])
  
    ...mapActions('counter',{
      randomInt: "incrementRandomInt"
    })
  }
}
</script>

<style>

</style>