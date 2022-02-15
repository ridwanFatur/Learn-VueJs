<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button v-on:click="testing">Test</button>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="print">Print todo done</button>
    <button v-on:click="testMapGetter">Test Map Getter</button>
  </div>
  <p>Count: {{ this.$store.state.count }}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["doneTodosCount", "doneTodos"]),
    // ...mapGetters({
    // 	doneCount: 'doneTodosCount',
    // 	doneList: 'doneTodos',
    // })
  },
  methods: {
    testMapGetter: function () {
      // console.log(this.doneCount);
      // console.log(this.doneList);
			console.log(this.doneTodosCount);
      console.log(this.doneTodos);
    },
    testing: function () {
      console.log(this.$store.state.count);
      console.log("Testing");
    },
    increment: function () {
      this.$store.commit("increment");
    },
    print: function () {
      console.log("Print");
      const listDoneTodos = this.$store.getters.doneTodos;
      console.log(listDoneTodos);
      console.log(listDoneTodos[0].text);
      console.log(this.$store.getters.doneTodosCount);

      console.log(this.$store.getters.getTodoById(2));
    },
  },
};
</script>
