<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id)
        .then((response) => {
					this.loading = false
					console.log(response);
					this.post = {
						"title": response.data.title,
						"body": "Fatur",
					}
				})
        .catch((error) => {
					this.loading = false
					this.error = error.toString()
					console.log(error);
				});
    },
  },
};
</script>
