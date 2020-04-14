<template>
  <div>
    测试组件{{str}}
    <button @click="addHandle">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      str:"hello"
    }
  },
  methods: {
    addHandle(){
      console.log("123")
    }
  },
}
</script>
<style scoped>
  
</style>