import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home.vue'
import signin from '@/views/auth/signin.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
      meta: {
        layout: 'empty'
      }
    }
  ]
})
