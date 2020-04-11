import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    str:"hello fellow41",
    num:0
  },
  mutations: {
    add(state){
      state.num+=1;
    }
  },
  actions: {
  },
  modules: {
  }
})
