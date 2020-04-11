<template>
  <div>
    <h1>子页面一</h1>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.id);
  },
}
</script>