<template>
  <q-page>

    <div class="row q-mb-md">
      <div class="col bg-green-2 text-green-7">1</div>
      <div class="col bg-red-2 text-red-7">2</div>
      <div class="col bg-purple-2 text-purple-7">3</div>
    </div>

    <div class="row q-mb-md">
      <div class="col bg-green-2 text-green-7">1</div>
      <div class="col-6 bg-red-2 text-red-7">2</div>
      <div class="col-6 bg-purple-2 text-purple-7">3</div>
    </div>

    <div class="row q-mb-md justify-center">
      <div class="col-4 bg-green-2 text-green-7">1</div>
      <div class="col-4 bg-red-2 text-red-7">2</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-6 col-md-4 bg-green-2 text-green-7">1</div>
      <div class="col-12 col-sm-6 col-md-4 bg-red-2 text-red-7">2</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column q-mb-md justify-around bg-dark items-center">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height q-mb-md justify-between bg-dark items-center">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <div class="column custom-height q-mb-md justify-between bg-dark items-center">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary self-end"></div>
      <div class="square-box bg-accent"></div>
    </div>


  </q-page>
</template>

<script setup>
defineOptions({
  name: 'FlexPage'
});
</script>

<style scoped>
.col {
  height: 100px;
}

.square-box {
  height: 50px;
  width: 50px;
}

.custom-height {
  height: 300px;
}
</style>
