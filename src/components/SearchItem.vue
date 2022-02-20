<template>
  <div>
    <p class="url">{{ data.url }}</p>
    <a class="title" v-bind:href="data.url" target="_blank">{{ data.title }}</a>
    <p class="description">{{ data.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style scoped>
p,
label,
a {
  margin: 0;
}

.url {
  font-size: 12px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.title {
  font-size: 25px;
  color: blue;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.title:hover {
  color: darkblue;
  cursor: pointer;
}

.description {
  font-size: 14px;
  text-align: justify;
  color: darkgrey;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
