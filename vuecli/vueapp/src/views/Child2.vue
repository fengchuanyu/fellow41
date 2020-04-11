<template>
  <div>
    <h1>子页面二</h1>
    <h2>{{$route.params.name}}</h2>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route.params.name)
  }
}
</script>