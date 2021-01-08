import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '../views/PostDetails.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/postDetails/:postId',
      name: 'postdetails',
      component: PostDetails,
    },
  ]
})

export default router
