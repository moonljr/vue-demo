export default [{
    path: '/',
    name: 'index',
    component: () => import( /* webpackChunkName: "index" */ '@/views/index')
  },
  {
    path: '/demo',
    name: 'dmeo',
    component: () => import( /* webpackChunkName: "dmeo" */ '@/views/demo.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import( /* webpackChunkName: "debounce" */ '@/views/debounce')
  },
  {
    path: '/dispatchAndbroadcast',
    name: 'dispatchAndbroadcast',
    component: () => import( /* webpackChunkName: "dispatchAndbroadcast" */ '@/views/dispatchAndbroadcast')
  },
  {
    path: '/findComponents',
    name: 'findComponents',
    component: () => import( /* webpackChunkName: "dispatchAndbroadcast" */ '@/views/findComponents')
  },
  {
    path: '/fromCheck',
    name: 'fromCheck',
    component: () => import( /* webpackChunkName: "dispatchAndbroadcast" */ '@/views/fromCheck')
  },
]
