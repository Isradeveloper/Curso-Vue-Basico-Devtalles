<template>
  <div class="entry-list-container">

    <div class="px-2 py-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
      />
    </div>

    <div class="entry-scollarea">
      <entry-component
        v-for="item in 100"
        :key="item"
      />
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'entry-list-component',
  components: {
    "entry-component": defineAsyncComponent( () => import('./Entry.vue') )
  }
}
</script>

<style lang="scss" scoped>

  .entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
  }

  .entry-scollarea {
    height: calc(100vh - 110px);
    overflow: scroll;
  }

</style>