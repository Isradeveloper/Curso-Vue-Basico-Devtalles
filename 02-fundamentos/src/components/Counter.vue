<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="decreaseCounter">-1</button>
    <button @click="increaseCounter">+1</button>
  </div>
</template>

<script>
export default {
  // props: ["title", "start"],
  props: {
    title: String,
    start: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        return value >= 0;
      },
    },
  },
  name: "counter-component",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter ** 2;
    },
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
  computed: {
    squareCounter() {
      return this.counter ** 2;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style scoped>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
