<template>
  <div class="content">
    <ul>
      <li v-for="item in dataList" :key="item.id">
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
      dataList:[]
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let requestUrl =
        "https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=0";
      let baseUrl = "https://bird.ioliu.cn/v2?url="
      axios.get(baseUrl+requestUrl).then(res => {
        console.log(res);
        this.dataList = res.data.subject_collection_items
      });
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
