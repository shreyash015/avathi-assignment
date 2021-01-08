<template>
  <div class="mt-4">
    <loading :active.sync="isLoading"></loading>
    <h2>Post Details:</h2>
    <ul class="list-group text-dark">
      <li class="list-group-item">
        <span class="font-weight-bold"> User Id : </span
        >{{ postDetails.userId }}
      </li>
      <li class="list-group-item">
        <span class="font-weight-bold">Post Id:</span> {{ postDetails.id }}
      </li>
      <li class="list-group-item">
        <span class="font-weight-bold">Post Title:</span>
        {{ postDetails.title }}
      </li>
      <li class="list-group-item">
        <span class="font-weight-bold">Post Body:</span> {{ postDetails.body }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  mounted() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`
      )
      .then((res) => {
        if (res.status === 200) {
          this.postDetails = res.data;
        } else {
          alert("Network Error please try again");
        }
        this.isLoading = false;
      });
  },
  components: {
    Loading,
  },
  data() {
    return {
      postDetails: {},
      isLoading: true,
    };
  },
};
</script>
