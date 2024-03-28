<template>
  <navbar-component/>

  <div
    v-if="isLoading"
    class="d-flex justify-content-center align-items-center contenedor-spinner flex-column text-primary">
    <h4>Espere, por favor...</h4>
    <h2 class="mt-2"> <i class="fa fa-spin fa-sync"></i> </h2>
  </div>

  <div v-else class="d-flex">

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
import { mapActions, mapState } from 'vuex';

export default({
  components: {
    "navbar-component": defineAsyncComponent( () => import('../components/Navbar.vue') ),
    "entry-list-component": defineAsyncComponent( () => import('../components/EntryList.vue') ),
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  created(){
    this.loadEntries()
  }
})
</script>

<style lang="scss" scoped>
  .contenedor-spinner {
    height: calc(100vh - 57px);
  }
</style>