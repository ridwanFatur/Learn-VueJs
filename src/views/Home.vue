<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
		<parent-component/>
  </div>
</template>

<script>
import ParentComponent from "@/components/ParentComponent";
export default {
	 components: {
    "parent-component": ParentComponent,
  },
	data(){
		return {}
	}
}

</script>
