import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '../Layouts/HomeLayout'
import Home from '../views/Home'
import PetCircle from '../views/PetCircle'
import Shopping from '../views/Shopping'
import Mine from '../views/Mine'
import Login from '../views/logAdReg/Login'
import Commodity from '../components/Shopping/Commodity/CommodityHome'
import PetDesc from '../components/PetService/Services/PetDesc'
import NotFound from '../views/NotFound'
import SwipeHome from '../components/Swipe/SwipeHome'
import Adopt from '../components/Adopt'
import Voide from '../components/PetService/square/Sq_item/Voide'
import city from '../components/PetService/square/city'
// import UserLayout from '../Layouts/UserLayout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/petcircle',
          name: 'PetCircle',
          component: PetCircle
        },
        {
          path: '/shopping',
          name: 'Shopping',
          component: Shopping
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
          // children: [
          //   {
          //     path: 'log-add-register',
          //     name: 'log-add-register',
          //     component: () => import(/* webpackChunkName: "user" */ '../views/logAdReg/LogAddRegister')
          //   },
          //   {
          //     path: 'register',
          //     name: 'register',
          //     component: () => import(/* webpackChunkName: "user" */ '../views/logAdReg/Register')
          //   },
          //   {
          //     path: 'forgot_pass',
          //     name: 'forgotPass',
          //     component: () => import(/* webpackChunkName: "user" */ '../views/logAdReg/ForgotPass')
          //   }
          // ]
          // meta: {
          //   isLogin: true
          // }
        },
        {
          path: '/CommodityHome',
          name: 'CommodityHome',
          component: Commodity
        },
        {
          path: '/Adopt',
          name: 'Adopt',
          component: Adopt
        },
        {
          path: '/PetDesc',
          name: 'PetDesc',
          component: PetDesc
        },
        {
          path: '/SwipeHome',
          name: 'SwipeHome',
          component: SwipeHome
        }
      ]
    },
    // {
    //   path: '/logaddregister',
    //   name: 'LogAddRegister',
    //   component: LogAddRegister
    // },
    {
      path: '/Voide',
      name: 'Voide',
      component: Voide
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notfound',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
export default router
