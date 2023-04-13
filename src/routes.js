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
import Disciplines from '@/pages/Disciplines.vue'
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
    path: '/disciplines', 
    component: LayoutDefault, 
    meta: { title: 'Disciplines' },
    children: [
      {path: '', component: Disciplines, name:'disciplines', meta: {title:'Disciplines'}},
    ]
  },
  { path: '/:path(.*)', component: NotFound404 },
]
