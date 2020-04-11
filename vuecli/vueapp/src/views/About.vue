<template>
  <div class="about">
    <h1>This is an about page</h1>
    <com1 v-bind:str.sync="a"></com1>
    <h2>父组件参数：{{a}}</h2>
    <h3>vuex-str为:{{$store.state.str}}</h3>
  </div>
</template>
<script>
import Com1 from "../components/TestCom1.vue"
export default {
  data() {
    return {
      a:"hello fellow41"
    }
  },
  components:{
    Com1
  }
}
</script>
