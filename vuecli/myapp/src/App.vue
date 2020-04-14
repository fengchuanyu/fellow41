<template>
  <div id="app">
    <Navagation/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navagation from '@/components/Navagation.vue'
export default {
  components:{
    Navagation
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
body{
  padding:1rem 0;
}
</style>
