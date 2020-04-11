<template>
  <div>
    <!-- <h1>getters sum = {{$store.getters.sum}}</h1> -->
    <h1>getters sum = {{sum}}</h1>
    <h1>vuex累加器</h1>
    <!-- <h3>num:{{$store.state.num}}</h3> -->
    <h3>num:{{num}}</h3>
    <!-- <button @click="$store.commit('add')">add</button> -->
    <!-- <button @click="addHandle">add</button> -->
    <button @click="vuexAdd">add</button>
    <!-- <button @click="$store.dispatch('addAction')">addAction</button> -->
    <button @click="addAction">addAction</button>

    <h1>{{str}}</h1>
    <button @click="changeHandle">change</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
  data() {
    return {
      str:"hello"
    }
  },
  computed: {
    ...mapState(["num"]),
    ...mapGetters(["sum"])
  },
  // methods: {
  //   addHandle(){
  //     this.$store.commit('add',10);
  //   }
  // },
  methods:{
    changeHandle(){
      this.str = "你好"
    },
    ...mapMutations({
      vuexAdd:'add'
    }),
    ...mapActions(["addAction"])
  } 
}
</script>
<style scoped>
  
</style>