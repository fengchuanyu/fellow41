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
  getters:{
    sum(state){
      return state.num+100
    }
  },
  actions: {
    addAction({commit}){
      commit("add")
    }
  },
  modules: {
  }
})
