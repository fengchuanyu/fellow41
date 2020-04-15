import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Tv',
    component: () => import('../views/tv/Tv.vue')
  },{
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue'),
    // beforeEnter: (to, from, next) => {
    //   console.log(to,from,next)
    // }
  },{
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue')
  },{
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  }
  ,{
    path: '/tvdetail/:id',
    name: 'TvDeatil',
    component: () => import('../views/tv/TvDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
