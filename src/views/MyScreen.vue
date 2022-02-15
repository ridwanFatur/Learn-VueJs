<template>
  <!-- <p>I'm text inside the component.</p> -->
  <p ref="dom-element">{{ counter }}</p>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  beforeUpdate() {
    console.log(this.counter); // Logs the counter value every second, before the DOM updates.
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  updated() {
    // Fired every second, should always be true
    console.log(+this.$refs["dom-element"].textContent === this.counter);
  },
  // beforeCreate() {
  //   console.log("I am the first hook to get called!");
  //   console.log(`You can see that my data property is ${typeof this.counter}`); // undefined
  // },
  // created() {
  //   console.log("I am the created hook.");
  //   console.log(
  //     `You can now see that my data property is ${typeof this.counter}`
  //   );
  // },
  // beforeMount() {
  //   console.log(`I am ready to be rendered.!`);
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     // Element has been definitely added to the DOM
  // 		console.log("Next Tick");
  //     console.log(this.$el.textContent); // I'm text inside the component.
  //   });
  // },
};
</script>

<style></style>
