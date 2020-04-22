const Koa = require('koa');
const Cors = require('koa2-cors');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const cloud = require('tcb-admin-node');

//初始化koa（nodejs 框架）
const app = new Koa();

//初始化路由
const router = new Router({
  prefix:'/fellow'
})

//解决跨域问题cors
app.use(Cors({
  orign:function(ctx){
    return ['http://localhost:9528']
  },
  maxAge:5,
  credentials:true
}))

//格式化请求参数
app.use(KoaBody());


// http://localhost:3000/fellow/user/login
//根据路由请求匹配控制器
let user = require('./controller/user.js');
router.use("/user",user.routes());

//使用路由
app.use(router.routes());

app.listen(3000);