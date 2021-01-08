<template>
  <div>
    <div class="row search-bar-container mt-4 d-flex justify-content-center">
      <input
        class="mr-sm-2 search-bar"
        type="search"
        placeholder="Search for article"
        aria-label="Search"
        v-model="searchQuery"
      />
    </div>
    <div class="total-views mt-4">Total Views: {{$store.getters.views}}</div>
    <div class="row card-container d-flex justify-content-center">
      <PostCards v-for="post in resultQuery" :key="post.id" :post="post" />
    </div>
    <jw-pagination
      v-if="!searchQuery"
      :items="posts"
      @changePage="onChangePage"
      class="mt-5"
    ></jw-pagination>
  </div>
</template>

<script>
import axios from "axios";

import PostCards from "../components/PostsCard";

export default {
  name: "Home",
  components: {
    PostCards,
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.posts.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.pageOfItems;
      }
    }
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      if (res.status === 200) {
        this.posts = res.data;
      } else {
        alert("Netowrk error please try again");
      }
    });
  },
  data() {
    return {
      pageOfItems: [],
      posts: [],
      searchQuery:'',
    };
  },
};
</script>

<style scoped>
.search-bar {
  height: 40px;
}
</style>
