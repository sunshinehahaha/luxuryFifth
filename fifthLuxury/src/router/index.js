import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Detail from '@/components/Detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
