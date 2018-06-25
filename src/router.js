import Vue from 'vue'
import Router from 'vue-router'
import Shopmain from './views/ShopMain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shop',
      name: 'shopmain',
      component: Shopmain
    }
  ],
  mode: 'history'
})
