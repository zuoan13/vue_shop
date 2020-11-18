import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 如果前往登录页面 啥情况都可以
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  // 如果前往其它页面 没有token的话就跳转到登录页面
  if (!tokenStr) return next('/login');
  next();
})

export default router