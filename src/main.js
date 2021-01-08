import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Vuex from 'vuex'

Vue.use(Vuex)


Vue.config.productionTip = false;

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
