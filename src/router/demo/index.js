import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'dmeo',
    component: () => import( /* webpackChunkName: "about" */ '@/views/demo.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import( /* webpackChunkName: "about" */ '@/views/index')
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import( /* webpackChunkName: "about" */ '@/views/debounce')
  },
]
