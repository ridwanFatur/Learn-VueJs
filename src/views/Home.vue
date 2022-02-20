<template>
  <div>
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="#Home">Home</b-breadcrumb-item>
        <b-breadcrumb-item href="#About">About</b-breadcrumb-item>
        <b-breadcrumb-item active>Hello World!</b-breadcrumb-item>
      </b-breadcrumb>

      <hr />

      <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>

      <hr />

      <b-breadcrumb>
        <b-breadcrumb-item
          v-for="(val, inx) in breadcrumb_items"
          :active="val.active"
          :key="inx"
        >
          <span style="color: pink" v-if="val.text === 'About'">
            {{ val.text }}
          </span>
          <template v-else>
            {{ val.text }}
          </template>
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumb_items: [
        {
          text: "Home",
          href: "#Home",
        },
        {
          text: "About",
          href: "#About",
        },
        {
          text: "Hello World! - Its dynamic items list post here",
          active: true,
        },
      ],
    };
  },
};
</script>
<style scoped>
p {
  font-size: 14px;
}
</style>
