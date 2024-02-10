<template>
  <div id="navbar">
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: '3' } }">Pokemon por id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink 
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {

  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Pokemons'},
        { to: 'pokemon-id', name: 'por ID', params: {id: 50}},
        { to: 'pokemon-about', name: 'About'},
        { to: 'dbz-about', name: 'DBZ-About'},
        { to: 'dbz-characters', name: 'DBZ-Characters'},
        { to: 'https://google.com', name: 'Google'},
      ]
    }
  },  
  components: {
    CustomLink: defineAsyncComponent( () => import('./CustomLink.vue') )
  }
}
</script>

<style lang="scss" scoped>

  #navbar {

    // .router-link-exact-active {
    //   color: #42b983
    // }

    padding: 0 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      margin: 0 10px;
      text-decoration: none;


      &:hover {
        color: #2c503a;
      }
    }

  }
</style>