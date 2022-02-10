<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="navAbout">About</button>
    <button @click="navUser">User</button>
    <button @click="replaceUser">Replace User</button>
    <button @click="navBack">Back</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    navAbout() {
      console.log("About");
      this.$router.push("/about");
    },
    navUser() {
      const username = "Ridwan";
      console.log("User");
      this.$router.push(`/user/${username}`);
    },
    replaceUser() {
      const username = "Ridwan";
      console.log("User Replace");
      this.$router.replace(`/user/${username}`);
    },
    navBack() {
      this.$router.back();
    },
  },
};
</script>
<style></style>
