<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMsg">{{ errorMsg }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Página: {{ currentPage }}</span>

</template>

<script>
import useUsers from '@/composables/useUsers';

export default {
  setup() {

    const { currentPage, errorMsg, isLoading, users, nextPage, prevPage } = useUsers()

    return {

      currentPage,
      errorMsg,
      isLoading,
      users,

      nextPage,
      prevPage,

    }

  }
}
</script>

<style lang="scss" scoped>

h2{
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}

</style>