<template>
  <h2>User {{ id }}</h2>
  <router-view></router-view>
</template>
<script>
export default {
  name: "User",
  props: ["id"],
  data() {
    return {};
  },
};
</script>
<style></style>
