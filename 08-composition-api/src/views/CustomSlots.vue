<template>
  <h1>Aprendiendo slots</h1>
  <button @click="openModal">Abrir modal</button>

  <Modal title="Hola" otherTitle="otro" v-if="isOpen" @on:close="closeModal">
    <!-- <h2>Título del modal</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
    <button>Salir</button> -->

    <template v-slot:header>
      <h2>Título del modal</h2>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
    </template>

    <template v-slot:exposed="{ newTitle }">
      {{ newTitle }}
    </template>

  </Modal>

</template>

<script>

import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

export default {

  components: {Modal},

  setup( props, context){

    const isOpen = ref(false)

    return {
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
    }

  }

}
</script>

<style lang="scss" scoped>

</style>