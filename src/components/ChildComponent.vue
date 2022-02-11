<template>
  <div>
    <!-- <slot></slot> -->
    <slot name="title" />
    <slot name="footer" />
    <slot v-bind:yourName="name">No Slot Pass</slot>
    <!-- <slot /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
			name: "Ridwan",
		};
  },
};
</script>
