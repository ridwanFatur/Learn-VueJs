<template>
  <div>
    <b-container>
      <template v-if="searchData.listData.length > 1">
        <p>
          Sekitar {{ searchData.listData.length }} hasil ({{
            searchData.timeSeach
          }}
          detik)
        </p>
        <p>Results</p>

        <template v-for="data in searchData.listData">
          <b-row v-bind:key="data.id" class="mb-4">
            <b-col lg="6">
              <search-item v-bind:data="data" />
            </b-col>
          </b-row>
        </template>
      </template>
    </b-container>

    <template v-for="i in 10">
      <div :key="i" class="my-box mb-2">
        <p>{{ i }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import SearchItem from "@/components/SearchItem";
import { descriptionText } from "@/constants/descriptionConstants";

export default {
  components: {
    "search-item": SearchItem,
  },
  data() {
    return {
      searchData: {
        timeSeach: 0.38,
        listData: [
          // {
          //   url: "https://www.facebook.com/",
          //   title: "Facebook",
          //   desc: descriptionText,
          //   id: 1,
          // },
          // {
          //   url: "https://www.google.com/",
          //   title: "Google",
          //   desc: descriptionText,
          //   id: 2,
          // },
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

.my-box p {
  color: white;
  font-size: 30px;
  text-align: center;
}

.my-box {
  width: 100%;
  height: 200px;
  background-color: red;
}
</style>
