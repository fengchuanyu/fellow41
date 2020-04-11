<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="active">你好</div>
    <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
  .active{
    color: blue;
  }
</style>
