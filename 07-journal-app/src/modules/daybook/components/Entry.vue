<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'daybook-entry', params: { id: 354 } })">
    
    <div class="entry-title d-flex align-items-center">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo atque ad provident, veniam corrupti mollitia, quos dolor architecto praesentium fugiat voluptas. Aliquid voluptate ipsum minima dicta sint, ad nostrum! Placeat?
    </div>

  </div>

</template>

<script>
export default {
  name: "entry-component"
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
}

  .entry-description {
    font-size: 12px;
  }
</style>