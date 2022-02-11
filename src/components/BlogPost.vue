<template>
  <h3>{{ post.title }}</h3>
	<!-- <h1>Test</h1> -->
  <div v-html="post.content"></div>
</template>

<script>
export default {
  props: ["post"],
  data: function () {
    return {};
  },
	created(){
		// console.log("Test")
		// console.log(this.post)
		
	}
};
</script>
