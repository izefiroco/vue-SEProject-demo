import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['@/views/home/main'],resolve),  
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: resolve => require(['@/views/index/main'],resolve),
      },
      {
        path: '/contest',
        name: 'contest',
        component: resolve => require(['@/views/contest/main'],resolve),
      },
      {
        path: '/practice',
        name: 'practice',
        component: resolve => require(['@/views/practice/main'],resolve),
      },
      {
        path: '/reward',
        name: 'reward',
        component: resolve => require(['@/views/reward/main'],resolve),
      },
      {
        path: '/ranking',
        name: 'ranking',
        component: resolve => require(['@/views/ranking/main'],resolve),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
