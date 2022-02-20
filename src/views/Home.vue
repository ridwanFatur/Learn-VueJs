<template>
  <div>
    <b-container>
      <p>Sekitar {{ searchData.count }} hasil ({{ searchData.timeSeach }} detik)</p>
			<p>Results</p>
			<search-item/>
    </b-container>
  </div>
</template>

<script>
import SearchItem from "@/components/SearchItem";

export default {
	components:{
		"search-item": SearchItem
	},
  data() {
    return {
      searchData: {
        count: 10,
        timeSeach: 0.38,
				data: [
					{
						"url": "https://www.facebook.com/",
						"title": "Facebook",
						"desc": "The most interesting app in the world",
					},
				],
      },
    };
  },
};
</script>
<style scoped>
p {
  font-size: 14px;
}
</style>
