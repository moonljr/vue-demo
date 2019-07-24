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
    component: () => import( /* webpackChunkName: "findComponents" */ '@/views/findComponents')
  },
  {
    path: '/fromCheck',
    name: 'fromCheck',
    component: () => import( /* webpackChunkName: "fromCheck" */ '@/views/fromCheck')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import( /* webpackChunkName: "checkbox" */ '@/views/checkbox')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import( /* webpackChunkName: "display" */ '@/views/display')
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import( /* webpackChunkName: "alert" */ '@/views/alert')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import( /* webpackChunkName: "table" */ '@/views/table')
  },
  {
    path: '/table-slot',
    name: 'table-slot',
    component: () => import( /* webpackChunkName: "table-slot" */ '@/views/table-slot')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import( /* webpackChunkName: "tree" */ '@/views/tree')
  },
]
