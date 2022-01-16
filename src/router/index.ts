//从VueRouter中导入需要的函数模块
import { createRouter, createWebHashHistory } from 'vue-router'
import { storage } from '../utils/localStorage/localStorage'

//导入各个组件
const routes = [
  {
    path: '/',
    redirect: 'login',
    component: () => import('../App.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../layout/LoginLayout/index.vue')
      },
      {
        path: 'excessive',
        component: () => import('../layout/ExcessivePageLayout/index.vue')
      },
      {
        path: 'movie',
        component: () => import('../views/movie/index.vue')
      },
      {
        path: 'music',
        component: () => import('../views/music/index.vue')
      },
      {
        path: 'photo',
        component: () => import('../views/photo/index.vue')
      },
      {
        path: 'study',
        component: () => import('../views/study/index.vue')
      },
      {
        path: 'classify',
        component: () => import('../views/photo/components/classifyPhoto.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not - found',
    component: () => import('../views/not-found/not-found.vue')
  }
]

//创建router实例并传递routes配置
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  const userInfo = storage.get('userInfo')
  if (to.path !== '/login') {
    if (!userInfo) {
      return '/login'
    }
  }
})

// 导出router
export default router
