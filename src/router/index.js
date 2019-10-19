import Vue from 'vue'
import VueRouter from 'vue-router'

import clock from '@/views/Clock'
import search from '@/views/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: clock
    },
    {
      path: '/search',
      component: search
    }
  ]
})