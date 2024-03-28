<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div class="d-flex align-items-center">
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="fs-3 mx-1">{{ month }}</span>
        <span class="fs-4 fw-ligth">{{ year }}, {{ weekday }}</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2">
          Subir foto <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
    </div>
  </template>

  <fab-component icon="fa-save" />

  <img
    src="https://www.1zoom.me/big2/523/294728-alexfas01.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    "fab-component": defineAsyncComponent(() =>
      import("../components/Fab.vue")
    ),
  },
  data() {
    return {
      entry: null,
    };
  },
  created() {
    // console.log(this.$route);
    this.loadEntry();
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "daybook-no-entry" });
      this.entry = entry;
    },
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      return getDayMonthYear(this.entry.date).day;
    },
    month() {
      return getDayMonthYear(this.entry.date).month;
    },
    year() {
      return getDayMonthYear(this.entry.date).year;
    },
    weekday() {
      return getDayMonthYear(this.entry.date).weekday;
    },
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
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