<template>
  <div>
    <div class="talk-list">
      <ul>
        <li v-for="(item,index) in talkList" :key="index">
          <div class="question">
            <span>{{item.question}}</span>
          </div>
          <div class="answer">
            <span>{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="talk-form">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="talkText" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendMessage">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import md5 from "blueimp-md5";
export default {
  data() {
    return {
      talkText: "",
      talkList:[]
    };
  },
  mounted() {
    this.sendMessage();
  },
  methods: {
    //生成时间戳
    getTimeStamp() {
      let timer = new Date();
      timer = Date.parse(timer);
      timer = timer.toString().substr(0, 10);
      timer = Number.parseInt(timer);
      return timer;
    },
    //生成随机字符串(随机16进制数字)
    getNonceStr() {
      var str = Math.random();
      str = str.toString(16);
      str = str.substr(2);
      return str;
    },
    //接口鉴权
    getSign(obj) {
      //第一步：将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      let arr = Object.keys(obj).sort();
      //第二部：将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T
      let str = "";
      arr.map(val => {
        str += val + "=" + encodeURI(obj[val]) + "&";
      });
      //第三部：将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S
      str += "app_key=bfQxuU3z7VOCEV4C";
      //第四步：对字符串S进行MD5运算
      str = md5(str).toUpperCase();
      return str;
    },
    //发送聊天信息
    sendMessage() {
      let requestUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let params = {
        app_id: 2126689842,
        time_stamp: this.getTimeStamp(),
        nonce_str: this.getNonceStr(),
        session: "1001",
        question: this.talkText
      };
      params.sign = this.getSign(params);
      axios
        .get(baseUrl + requestUrl, {
          params
        })
        .then(res => {
          this.talkList.push({
            answer:res.data.data.answer,
            question:this.talkText
          })
          console.log(this.talkList);
          
        });
    }
  }
};
</script>
<style scoped>
.talk-form {
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: 1rem;
  background-color: gray;
  text-align: center;
}
.answer{
  text-align: left;
  font-size: .5rem;
}
.answer span{
background-color: yellow;
}
.question{
  text-align: right;
  font-size: .5rem;
}
.question span{
background-color: aquamarine;
}


</style>