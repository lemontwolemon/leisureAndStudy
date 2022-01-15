//从VueRouter中导入需要的函数模块
import { createRouter, createWebHashHistory } from 'vue-router'

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

// 导出router
export default router
