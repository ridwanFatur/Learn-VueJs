<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button v-on:click="testing">Test</button>
    <button v-on:click="increment">Increment</button>
  </div>
  <p>Count: {{ this.$store.state.count }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    testing: function () {
      console.log(this.$store.state.count);
      console.log("Testing");
    },
    increment: function () {
      this.$store.commit("increment");
    },
  },
};
</script>
