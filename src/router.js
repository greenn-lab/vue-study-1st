import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectLoginPage = (to, from, next) => {
  if (!store.state.isLogin) next()
}

const rejectNotAuth = (to, from, next) => {
  if (store.state.isLogin) next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/*webpackChunkName:'home'*/ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectLoginPage,
      component: () => import(/*webpackChunkName:'login'*/ './views/Login.vue')
    },
    {
      path: '/my-page',
      name: 'my-page',
      beforeEnter: rejectNotAuth,
      component: () =>
        import(/*webpackChunkName:'my-page'*/ './views/MyPage.vue')
    }
  ]
})
