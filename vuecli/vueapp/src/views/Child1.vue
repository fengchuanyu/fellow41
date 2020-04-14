<template>
  <div>
    <h1>子页面一</h1>
    <h2>{{$route.params.id}}</h2>
    <h1>模块A-sum:{{$store.state.a.num}}</h1>
    <h1>模块B-sum:{{$store.state.b.num}}</h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.id);
  },
}
</script>