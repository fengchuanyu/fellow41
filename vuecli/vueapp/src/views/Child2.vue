<template>
  <div>
    <h1>子页面二</h1>
    <h2>{{$route.params.name}}</h2>
    <h3>vuex-str为:{{$store.state.str}}</h3>
    <!-- <h4>vuex-str为:{{storeStr}}</h4> -->
    <h4>vuex-str为:{{str}}</h4>

  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  created(){
    console.log(this.$route.params.name);
    console.log(this.$store.state.str);
    
  },
  // computed: {
  //   storeStr(){
  //     return this.$store.state.str
  //   }
  // },
  computed: mapState(["str"])
}
</script>