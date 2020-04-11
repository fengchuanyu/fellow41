<template>
  <div>
    <h1 class="active">hello world {{num}}</h1>
    <button @click="addHandle">add</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      str:"fellow41",
      num:0
    }
  },
  methods: {
    addHandle(){
      ++this.num
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to,from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(to,from)
    next()
  }
}
</script>
<style scoped>
  .active{
    color:red;
  }
</style>