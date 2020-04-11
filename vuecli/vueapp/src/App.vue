<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/page1">Page1</router-link>|
      <router-link to="/page2">Page2</router-link>|
      <router-link to="/aboutpage">别名</router-link>|
      <router-link to="/backhome">返回首页</router-link>
    </div>
    <div class="box">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    
   
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
}
.box{
  position: relative;
}
.fade-enter{
  transform: translateX(100%);
}
.fade-enter-active{
  width: 100%;
  position: absolute;
  top:0;
  transition: all 1s linear;
}
.fade-enter-to{
  transform: translateX(0);
}

.fade-leave{
  transform: translateX(0);
}
.fade-leave-active{
  width: 100%;
  transition: all 1s linear;
  top:0;
  transition: all 1s linear;
}
.fade-leave-to{
  transform: translateX(-100%);
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
