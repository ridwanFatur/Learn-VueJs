<template>
  <child-component>
    <!-- <div>{{data}}</div> -->
    <!-- <template v-slot:title>
      <h1>Title</h1>
    </template>
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template> -->
    <!-- <div>Unnamed Slot</div>
    <div>Unnamed Slot-2</div> -->
		<template v-slot:default="propsSlot">Data from unnamed slot {{propsSlot.yourName}}</template>
  </child-component>
</template>
<script>
import ChildComponent from "@/components/ChildComponent";

export default {
  components: {
    "child-component": ChildComponent,
  },
  data() {
    return {
      data: "Student",
    };
  },
};
</script>
