//从VueRouter中导入需要的函数模块
import { createRouter, createWebHashHistory } from 'vue-router'

//导入各个组件
const routes = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue')
  }
]

//创建router实例并传递routes配置
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导出router
export default router
