<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <fab-component @evento-personalizado="$router.push({name: 'daybook-entry', params: {id: 'new'}})"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    "fab-component": defineAsyncComponent(  () => import("../components/Fab.vue") )
  }
}
</script>

<style lang="scss" scoped>
  div {
    height: 100%;
  }
</style>