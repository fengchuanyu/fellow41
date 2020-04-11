<template>
  <div>
    <h1>组件一</h1>
    <h2>子组件参数:{{str}}</h2>
    <button @click="changeVal">change</button>
  </div>
</template>
<script>
export default {
  props:["str"],
  methods: {
    changeVal(){
      this.$emit("update:str","你好");
    }
  },
}
</script>