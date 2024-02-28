<template>
  <div class="home">
    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook-no-entry' });
    }
  }
}
</script>
