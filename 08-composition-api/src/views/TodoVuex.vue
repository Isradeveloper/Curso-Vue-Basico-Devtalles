<template>
  <h1>Lista de tareas de thanos</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->
  <h4>Pendientes: {{ pending.length }}</h4>
  <hr>
  <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">Todos
  </button>
  <button :class="{ 'active': currentTab === 'pending' }" @click="currentTab = 'pending'">Pendientes
  </button>
  <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">Completados
  </button>

  <div>
    <ul>
      <li v-for="{ id, text, completed } in getTodosByTab" :key="id" :class="{ 'completed': completed }" @dblclick="toogleTodo(id)">
        {{ text }}
      </li>
    </ul>
  </div>

  <Modal v-if="isOpen" @on:close="toogleModal()">

    <template v-slot:header>
      <h3>Crear nueva tarea</h3>
    </template>

    <template v-slot:body>

      <form @submit.prevent>
        <input type="text" placeholder="Ingresa nueva tarea" v-model="formValues.text">
      </form>

    </template>


    <template v-slot:footer>
      <button @click="toogleModal()">Salir</button>
      <button @click="createNewTodo(formValues)">Guardar</button>
    </template>

  </Modal>

  <button @click="toogleModal()">Crear Todo</button>

</template>

<script>
import useTodo from '@/composables/useTodo';
import Modal from '@/components/Modal.vue';

export default {

  components: {
    Modal
  },

  setup() {

    const {getTodosByTab, toogleTodo, pending, currentTab, toogleModal, isOpen, formValues, createNewTodo} = useTodo()

    return {
      currentTab,
      pending,
      getTodosByTab,
      isOpen,
      formValues,

      toogleTodo,
      toogleModal,
      createNewTodo
    }

  }

}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>