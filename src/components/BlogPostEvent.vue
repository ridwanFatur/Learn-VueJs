<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="postFontSize += 0.1"
      v-on:reset-text="postFontSize = $event"
			v-on:simple-method="simpleMethod"
    ></blog-post>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";

export default {
  components: {
    "blog-post": BlogPost,
  },
  methods: {
    simpleMethod: function (param) {
			console.log("Method")
			console.log(param)
		},
  },
  data: function () {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", content: "Ridwan Content" },
        { id: 2, title: "Blogging with Vue", content: "Fatur Content" },
      ],
      postFontSize: 1,
    };
  },
};
</script>
