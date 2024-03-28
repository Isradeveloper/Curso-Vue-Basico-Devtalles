<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'daybook-entry', params: { id: entry.id } })"
  >
    <div class="entry-title d-flex align-items-center">
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ year }}, {{ weekday }}</span>
    </div>

    <div class="entry-description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>

export default {
  name: "entry-component",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 100
        ? this.entry.text.substring(0, 100) + "..."
        : this.entry.text;
    },
    day() {
      return new Date(this.entry.date).getDate()
    },
    month() {
      const date = new Date(this.entry.date)
      const month = new Intl.DateTimeFormat("es-ES", {month: "long"}).format(date)
      return month[0].toUpperCase() + month.substring(1)
    },
    year() {
      return new Date(this.entry.date).getFullYear()
    },
    weekday() {
      const date = new Date(this.entry.date)
      const day = new Intl.DateTimeFormat("es-ES", {weekday: "long"}).format(date)
      return day[0].toUpperCase() + day.substring(1)

    },
  },
};
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