<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div class="d-flex align-items-center">
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="fs-3 mx-1">Julio</span>
      <span class="fs-4 fw-ligth">2021, jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>
      <button class="btn btn-primary mx-2">Subir foto <i class="fa fa-upload"></i></button>
    </div>

  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <fab-component icon="fa-save"/>

  <img src="https://www.1zoom.me/big2/523/294728-alexfas01.jpg" alt="entry-picture" class="img-thumbnail">
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

textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>