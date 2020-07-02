// eslint-disable-next-line
import UserLayout from '../Layouts/UserLayout'
// import Register from '../views/system/login/Register'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: UserLayout,
    // component:Register,
    redirect: '/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/system/login/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/system/login/Register')
      },
      // {
      //   path: 'forgot_pass',
      //   name: 'forgotPass',
      //   component: () => import(/* webpackChunkName: "user" */ '../views/system/login/ForgotPass')
      // },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '../views/system/login/RegisterResult')
      }
    ]
  }]
