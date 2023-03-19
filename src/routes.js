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
// Tenant
import Home from '@/pages/Home.vue'

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
  // { path: '/:path(.*)', component: NotFound },
]
