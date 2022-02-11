<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <!-- <blog-post title="My journey with Vue" /> -->
		<blog-post v-bind:post="myPost"/>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
    />
  </div>
</template>

<script>
import ButtonCounter from "@/components/ButtonCounter";
import BlogPost from "@/components/BlogPost";

export default {
  components: {
    ButtonCounter: ButtonCounter,
    "blog-post": BlogPost,
  },
  data() {
    return {
			myPost: {id: 3, title: "Test----", content: "G----"},
      posts: [
        { id: 1, title: "My journey with Vue", content: "Ridwan Content" },
        { id: 2, title: "Blogging with Vue", content: "Fatur Content" },
      ],
    };
  },
};
</script>
