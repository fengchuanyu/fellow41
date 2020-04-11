<template>
  <div>
    <h1>vuex累加器</h1>
    <h3>num:{{$store.state.num}}</h3>
    <button @click="$store.commit('add')">add</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  
</style>