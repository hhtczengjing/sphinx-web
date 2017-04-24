import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import List from '@/pages/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/table/:name',
      name: 'List',
      component: List
    }
  ]
})
