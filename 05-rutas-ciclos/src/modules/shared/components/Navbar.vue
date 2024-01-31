<template>
  <div id="navbar">
    <router-link to="/">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: '3' } }">Pokemon por id</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss" scoped>

  #navbar {

    .router-link-exact-active {
      color: #42b983
    }

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