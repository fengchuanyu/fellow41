<template>
  <div :class="activeClass">
    <header>
      <span>首页</span>
      <p>{{title}}</p>
    </header>
    <nav>
      <ul>
        <li @click="goPage(item)" v-for="item in navList" v-bind:key="item.id">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "剧集",
      activeClass: "tv",
      navList: [
        {
          id: 1001,
          title: "剧集",
          path: "/",
          className: "tv"
        },
        {
          id: 1002,
          title: "音乐",
          path: "/music",
          className: "music"
        },
        {
          id: 1003,
          title: "书籍",
          path: "/book",
          className: "book"
        },
        {
          id: 1004,
          title: "聊天",
          path: "/talk",
          className: "talk"
        }
      ]
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    //初始化页面 防止刷新重置
    initPage() {
      let thisPath = location.pathname;
      this.navList.map(val => {
        if (val.path == thisPath) {
          this.activeClass = val.className;
          this.title = val.title;
        }
      });
    },
    //跳转页面
    goPage(obj) {
      this.$router.push(obj.path);
      this.activeClass = obj.className;
      this.title = obj.title;
    }
  }
};
</script>
<style scoped>
header,
nav {
  height: 1rem;
  width: 100%;
  background-color: rgb(33, 150, 243);
  position: fixed;
}
header {
  top: 0;
  left: 0;
}
header span {
  font-size: 0.3rem;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
header p {
  font-size: 0.5rem;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
nav {
  bottom: 0;
  left: 0;
}
nav ul {
  display: flex;
}
nav li {
  font-size: 0.4rem;
  height: 1rem;
  flex-grow: 1;
  text-align: center;
  line-height: 1rem;
}

.tv header,
.tv nav {
  background-color: rgb(33, 150, 243);
}
.music header,
.music nav {
  background-color: rgb(0, 150, 136);
}
.book header,
.book nav {
  background-color: rgb(121, 85, 72);
}
.talk header,
.talk nav {
  background-color: rgb(63, 81, 181);
}
</style>
