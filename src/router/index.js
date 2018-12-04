import Vue from 'vue'
import Router from 'vue-router'
import ClassiFication from "../pages/ClassiFication/ClassiFication"
import HomePage from "../pages/HomePage/HomePage"
import Identifying from "../pages/Identifying/Identifying"
import ProFile from "../pages/ProFile/ProFile"
import ShopCart from "../pages/ShopCart/ShopCart"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classification',
      component: ClassiFication,
      meta:{
        isShow:true
      }
    },
    {
      path: '/homepage',
      component: HomePage,
      meta:{
        isShow:true
      }
    },
    {
      path: '/identifying',
      component: Identifying,
      meta:{
        isShow:true
      }
    },
    {
      path: '/profile',
      component: ProFile,
      meta:{
        isShow:true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        isShow:true
      }
    },
    {
      path: '/',
      redirect:"/homepage"
    },
  ]
})
