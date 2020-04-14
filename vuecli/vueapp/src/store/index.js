import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modalA = {
  state: {
    str:"hello fellow41",
    num:0
  },
  mutations: {
    add(state,i){
      state.num+=i;
    }
  },
  getters:{
    sum(state){
      return state.num+100
    }
  },
  actions: {
    addAction({commit}){
      commit("add",10)
    }
  }
}

const modalB = {
  state:{
    num:123
  }
}

export default new Vuex.Store({
  modules: {
    a:modalA,
    b:modalB
  }
})
