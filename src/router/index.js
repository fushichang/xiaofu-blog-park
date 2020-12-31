import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    children: [{
        path: '/index',
        name: 'index',
        component: () => import( /* webpackChunkName: "login" */ '../views/home/index.vue')
      },
      {
        path: '/introduction',
        name: 'introduction',
        component: () => import( /* webpackChunkName: "login" */ '../views/introduction/index.vue')
      },
      {
        path: '/concat',
        name: 'concat',
        component: () => import( /* webpackChunkName: "login" */ '../views/concat/index.vue')
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import( /* webpackChunkName: "login" */ '../views/blog/index.vue')
      },
    ]
  },
  {
    path: '/admin',
    name: 'Home',
    component: () => import( /* webpackChunkName: "login" */ '../views/admin/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import( /* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import( /* webpackChunkName: "edit" */ '../views/article/add.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let token = store.state.user.token
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (token) {
      if (from.query.redirect) {
        if (to.path === from.query.redirect) {
          next()
        } else {
          next({
            path: from.query.redirect
          })
        }
      } else {
        next()
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
