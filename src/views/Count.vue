<template>
  <button v-on:click="counter += 1">Tambah +1</button>
  <button v-on:click="greet">Say Hi!</button>
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
  <button v-on:click="say2('Hi', $event)">Say event</button>
  <p>Tombol telah di click sebanyak {{ counter }}</p>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      name: "Musa Sutisna",
    };
  },
  methods: {
    greet: function (event) {
      // alert(`Hi ${this.name}!`);
      // 'event' merupakan native DOM event
      console.log(`Hi ${this.name}!`);
      console.log(event);
      // if (event) {
      //   alert(event.target.tagname);
      // }
    },
    say: function (message) {
      console.log(`Say ${message}`);
    },
    say2: function (message, event) {
      console.log(`${message}`);
      console.log(event);
    },
  },
};
</script>

<style></style>
