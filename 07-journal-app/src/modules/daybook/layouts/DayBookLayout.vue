<template>
  <navbar-component/>
  <h1>DayBook Layout</h1>

  <div class="d-flex">

    <div class="col-4">
      <entry-list-component/>
    </div>

    <div class="col">
      <router-view/>
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";


export default({
  components: {
    "navbar-component": defineAsyncComponent( () => import('../components/Navbar.vue') ),
    "entry-list-component": defineAsyncComponent( () => import('../components/EntryList.vue') ),
  }
})
</script>
