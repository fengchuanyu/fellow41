<template>
  <div>
    音乐
    <div v-if="isShow">
      <aplayer :audio="audio" :lrcType="0" />
    </div>
    <ul>
      <li class="music-list">
        <span class="music-index">编号</span>
        <span class="music-name">歌名</span>
        <span class="music-artist">歌手</span>
      </li>
      <li @click="changeMusic(item.id)" class="music-list" v-for="(item,index) in musicList" :key="index">
        <span class="music-index">{{index+1}}</span>
        <span class="music-name">{{item.name}}</span>
        <span class="music-artist">{{item.artist}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer,{
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
export default {
  data() {
    return {
      isShow:false,
      audio:{
        name: '啵唧',
        artist: 'Hanser',
        url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
        cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc'
      },
      musicList:[]
    }
  },
  
  created() {
    this.getMusicList();
  },
  methods: {
    //切换歌曲
    changeMusic(id){
      let musicObj = {}
      let thisUrl = "https://bird.ioliu.cn/netease/song?id="+id;
      axios.get(thisUrl).then((res)=>{
        console.log(res);
        musicObj = {
          name:res.data.data.name,
          artist: res.data.data.ar[0].name,
          url:res.data.data.mp3.url,
          cover: res.data.data.al.picUrl
        }
        this.audio = musicObj;
      })
    },
    //获取歌曲列表
    getMusicList(){
      let musicList = [];
      let thisUrl = "https://bird.ioliu.cn/netease/playlist?id=4929945813"
      axios.get(thisUrl).then((res)=>{
        console.log(res);
        musicList = res.data.playlist.tracks.map((item)=>{
          return {
            id:item.id,
            name:item.name,
            artist:item.ar[0].name
          }
        })
        this.musicList = musicList;
        this.isShow = true;
      })
    }
  },
}
</script>
<style scoped>
.music-list{
  display: flex;
  font-size: .2rem;
  padding:10px;
}
.music-list span{
  width: 0;
}
.music-list .music-index{
  flex-grow: 1;
}
.music-list .music-name{
  flex-grow: 3
}
.music-list .music-artist{
  flex-grow: 1
}
</style>