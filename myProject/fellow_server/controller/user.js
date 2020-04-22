//初始化路由
const Router = require("koa-router");
let router = new Router();

router.post('/login', async (ctx, next) => {
  ctx.body = {
    code: 20000,
    data: {
      token: 'admin-token'
    }
  }
})

router.get('/info', async (ctx) => {
  ctx.body = {
    code: 20000,
    data: {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }
  }
})

module.exports = router;