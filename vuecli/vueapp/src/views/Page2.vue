<template>
  <div>
    <h1>页面二</h1>
    <router-link to="/page2/child1/12345">子页面一</router-link>｜
    <!-- <router-link to="/page2/child2">子页面二</router-link> -->
    <router-link :to="{name:'Child2',params:{id:'aaaa',name:'test'}}">子页面二</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>