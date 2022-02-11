<template>
  <div class="post">
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
      post: null,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next((vm) => vm.setData(err, post));
    // });
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
      )
      .then((response) => {
        console.log(response);
        const responsePost = {
          title: response.data.title,
          body: "Fatur",
        };
        next((vm) => {
          vm.setData({ post: responsePost });
        });
      })
      .catch((error) => {
        next((vm) => {
          vm.setData({ error: error.toString() });
        });
        // this.error = error.toString();
        console.log(error);
      });
  },
  async beforeRouteUpdate(to, from) {
    this.post = null;
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
      )
      .then((response) => {
        console.log(response);
        this.post = {
          title: response.data.title,
          body: "Fatur",
        };
      })
      .catch((error) => {
        this.error = error.toString();
        console.log(error);
      });
  },
  // created() {
  //   this.$watch(
  //     () => this.$route.params,
  //     () => {
  //       this.fetchData();
  //     },
  //     // fetch the data when the view is created and the data is
  //     // already being observed
  //     { immediate: true }
  //   );
  // },
  // methods: {
  //   fetchData() {
  //     this.error = this.post = null;
  //     this.loading = true;
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id)
  //       .then((response) => {
  // 				this.loading = false
  // 				console.log(response);
  // 				this.post = {
  // 					"title": response.data.title,
  // 					"body": "Fatur",
  // 				}
  // 			})
  //       .catch((error) => {
  // 				this.loading = false
  // 				this.error = error.toString()
  // 				console.log(error);
  // 			});
  //   },
  // },
};
</script>
