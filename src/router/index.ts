import { createRouter, createWebHashHistory } from 'vue-router'
import { storage } from '../utils/localStorage/localStorage'

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
        redirect: '/music/home',
        component: () => import('../views/music/index.vue'),
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import('../views/music/components/Home/index.vue')
          },
          {
            path: 'mymusic',
            name: 'mymusic',
            redirect: '/music/mymusic/like',
            component: () =>
              import('../views/music/components/MyMusic/index.vue'),
            children: [
              {
                path: 'like',
                redirect: '/music/mymusic/like/song',
                component: () =>
                  import('../views/music/components/MyMusic/Like/index.vue'),
                children: [
                  {
                    path: 'song',
                    component: () =>
                      import(
                        '../views/music/components/MyMusic/Like/Song/index.vue'
                      )
                  },
                  {
                    path: 'playlist',
                    component: () =>
                      import(
                        '../views/music/components/MyMusic/Like/PlayList/index.vue'
                      )
                  },
                  {
                    path: 'album',
                    component: () =>
                      import(
                        '../views/music/components/MyMusic/Like/Album/index.vue'
                      )
                  },
                  {
                    path: 'mv',
                    component: () =>
                      import(
                        '../views/music/components/MyMusic/Like/Mv/index.vue'
                      )
                  }
                ]
              },
              {
                path: 'create',
                component: () =>
                  import('../views/music/components/MyMusic/Create/index.vue')
              },
              {
                path: 'focus',
                component: () =>
                  import('../views/music/components/MyMusic/Focus/index.vue')
              },
              {
                path: 'fans',
                component: () =>
                  import('../views/music/components/MyMusic/Fans/index.vue')
              },
              {
                path: 'uploadmv',
                component: () =>
                  import('../views/music/components/MyMusic/UploadMv/index.vue')
              }
            ]
          }
        ]
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  const userInfo = storage.get('info')
  if (to.path !== '/login') {
    if (!userInfo) {
      return '/login'
    }
  }
})

export default router
