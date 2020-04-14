<template>
  <div id="app">
    <test-com></test-com>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/tv">Tv</router-link>
    </div>
    <router-view/>
    
  </div>
</template>
<script>
import TestCom from '@/components/TestCom.vue'
export default {
  components:{
    TestCom
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
li{
  list-style: none;
}
</style>
