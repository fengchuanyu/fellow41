<template>
  <div class="content">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img class="carousel-img" :src="'https://images.weserv.nl/?url='+item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselList:[]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      let thisUrl = "https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&start=0&count=6"
      let baseUrl = "https://bird.ioliu.cn/v2?url="
      let imgList = [];
      axios.get(baseUrl+thisUrl).then((res)=>{
        console.log(res);
        imgList = res.data.subject_collection_items.map((item)=>{
          return item.cover.url;
        })
        this.carouselList = imgList
      })
    }
  },
};
</script>
<style scoped>
.carousel-img{
  width: 100%;
  height: 100%;
}
</style>