import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/demo',
    name: 'dmeo',
    component: () => import( /* webpackChunkName: "about" */ '@/views/demo.vue')
  }
]