// import NotFound from '@/pages/NotFound.vue'

/**
 * Layouts
 * ---
 */
import LayoutDefault from '@/layouts/LayoutDefault.vue'


/**
 * Pages
 * ---
 */
import Home from '@/pages/Home.vue'
import Judo from '@/pages/Judo.vue'
import NotFound404 from '@/pages/NotFound404.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  // Root
  {
    path: '/', 
    component: LayoutDefault, 
    meta: { title: 'Home' },
    children: [
      {path: '', component: Home, name:'home', meta: {title:'Home'}},
    ]
  },
  {
    path: '/judo', 
    component: LayoutDefault, 
    meta: { title: 'Judo' },
    children: [
      {path: '', component: Judo, name:'judo', meta: {title:'Judo'}},
    ]
  },
  { path: '/:path(.*)', component: NotFound404 },
]
