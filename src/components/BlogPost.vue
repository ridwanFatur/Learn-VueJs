<template>
  <h3>{{ post.title }}</h3>
  <!-- <h1>Test</h1> -->
  <div v-html="post.content"></div>
  <button v-on:click="$emit('enlarge-text')">Enlarge text</button>
	<button v-on:click="$emit('reset-text', 1)">Set To Normal</button>
	<button v-on:click="$emit('simple-method', 234)">Using Parent's Method Component</button>
</template>

<script>
export default {
  props: ["post"],
  data: function () {
    return {};
  },
	methods:{

	},
  created() {
    // console.log("Test")
    // console.log(this.post)
  },
};
</script>
