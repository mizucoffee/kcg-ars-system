import Vue from 'vue'
import VueRouter from 'vue-router'

import root from '@/views/Root'
import search from '@/views/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: root
    },
    {
      path: '/search',
      component: search
    }
  ]
})