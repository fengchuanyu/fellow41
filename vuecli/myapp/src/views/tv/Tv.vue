<template>
  <div class="content">
    <ul>
      <li @click="goDetail(item.id)" v-for="item in dataList" :key="item.id">
        <div class="left">
          <img :src="item.cover.url" alt="">
        </div>
        <div class="right">
          <h3>{{item.title}}</h3>
          <p>{{item.info}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList:[],
      start:0,
      isGoOn:true
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.listenScroll();
  },
  methods: {
    //跳转至详情页面
    goDetail(id){
      this.$router.push("/tvdetail/"+id)
    },
    //给window绑定滚动事件
    listenScroll(){
      let htmlDom = document.documentElement;//获取html元素
      window.onscroll = ()=>{
        let scrollHeight = htmlDom.scrollHeight;//可滚动区域高度
        let scrollTop = htmlDom.scrollTop;//获取滚动距离（滚动条距离顶部的距离）
        let htmlHeight = htmlDom.clientHeight;//获取视口高度
        if(htmlHeight+scrollTop > scrollHeight-10){//如果滚动条距离底部还有10像素的时候则判断到底部
          console.log("滚动到底了");
          this.start +=10;
          this.getData();
        }
      }
    },
    //获取豆瓣热播剧数据
    getData() {
      if(this.isGoOn){
        this.isGoOn = false;
        let requestUrl =
          `https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=${this.start}&count=10`;
        let baseUrl = "https://bird.ioliu.cn/v2?url="
        axios.get(baseUrl+requestUrl).then(res => {
          // this.dataList = res.data.subject_collection_items;
          this.dataList = this.dataList.concat(res.data.subject_collection_items)//返回的数据是拼接在之前的数据之后
          if(this.dataList.length < res.data.total){//仅在有可获取数据时请求借口如果超过可获取数据长度这不让下次请求生效
            this.isGoOn = true;
          }
        });
      }
    }
  }
};
</script>
<style scoped>
  .content{
    padding:10px;
  }
  li{
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  li .left{
    flex-grow: 1;
    width: 0;
  }
  li .left img{
    width: 100%;
  }
  li .right{
    font-size: 0.3rem;
    flex-grow: 2;
    margin:0 10px;
    width: 0;
  }
  li .right h3{
    margin-bottom: 10px;
  }

</style>
