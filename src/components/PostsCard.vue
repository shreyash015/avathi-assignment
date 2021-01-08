<template>
  <div class="card mt-5 p-4 text-dark mr-4" @click="getPostDetails">
    <div class="title">
     <h5>{{post.title}}</h5> 
    </div>
    <div class="pt-3 pb-4">
    {{post.body}}
    </div>
      <div class="user-id font-weight-bold">
        User ID: {{post.userId}}
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'PostsCard',
  props: {
    post: {
      type: Object,
    }
  },
  methods:{
    getPostDetails(){
      this.$router.push(`postDetails/${this.post.id}`);
      this.$store.commit('updateViews');
    }
  }
}
</script>

<style scoped>
.card{
  width:18%;
  padding:12px;
  transition: all linear 0.2s;
}
.card:hover{
  cursor: pointer;
    border:3px solid #ffd042;

}
.card:not(:hover){
  border:none;
}
.user-id{
  position:absolute;
  bottom:0;
  right:4px;
}
</style>
