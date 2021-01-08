import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    views: 0
  },
  
  getters: {
    views: state =>state.views
  },
  
  mutations: {
    updateViews(state){
        state.views++;
    }
  },
});