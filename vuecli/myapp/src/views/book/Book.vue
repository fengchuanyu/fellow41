<template>
  <div class="content" v-loading.fullscreen="loading" element-loading-text="拼命加载中">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in carouselList" :key="item">
          <img class="carousel-img" :src="'https://images.weserv.nl/?url='+item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="虚构类" name="fiction"></el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction"></el-tab-pane>
      </el-tabs>
      <div class="list-bar">
        <el-row v-for="item in listItems" :key="item.id">
          <el-col :span="8">
            <div class="lb-left">
              <img :src="'https://images.weserv.nl/?url='+item.cover.url" alt="">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="lb-right">
              <h5>{{item.title}}</h5>
              <p>{{item.info}}</p>
              <div class="rate">
                <el-rate
                  :value="getVal(item.rating.value)"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading:false,
      activeName: 'fiction',
      carouselList:[],
      listItems:[],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    //返回评分
    getVal(num){
      //num = 2.5
      let val = num/2;
      //val = 1.25
      val*=10;
      //val = 12.5
      val = Math.trunc(val);
      //val = 12;
      val = val/10;
      //val = 1.2
      return val
    },
    //获取轮播数据
    getData(){
      let thisUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=0&count=6`
      let baseUrl = "https://bird.ioliu.cn/v2?url="
      let imgList = [];
      this.loading = true;
      axios.get(baseUrl+thisUrl).then((res)=>{
        console.log(res);
        imgList = res.data.subject_collection_items.map((item)=>{
          return item.cover.url;
        })
        this.carouselList = imgList;
        this.listItems = res.data.subject_collection_items;
        this.loading = false;
      })
    },
    //获取列表数据
    handleClick(tab, event){
      let nowType = tab.name;
      this.activeName = nowType
      this.getData();
    }
  },
};
</script>
<style scoped>
.carousel-img{
  width: 100%;
  height: 100%;
}
.tab{
  padding:10px;
}
.lb-left img{
  width: 100%;
}
.lb-right{
  font-size: 0.3rem;
  padding:10px;
}

</style>