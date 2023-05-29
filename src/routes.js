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
import Social from '@/pages/Social.vue'
import Contact from '@/pages/Contact.vue'
import NotFound404 from '@/pages/NotFound404.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  // Root
  {
    path: '/',
    component: LayoutDefault,
    meta: { title: 'Home' },
    children: [
      { path: '', component: Home, name: 'home', meta: { title: 'Home' } },
    ]
  }, {
    path: '/judo',
    component: LayoutDefault,
    meta: { title: 'Judo' },
    children: [
      { path: '', component: Judo, name: 'judo', meta: { title: 'Judo' } },
    ]
  }, {
    path: '/social',
    component: LayoutDefault,
    meta: { title: 'Social' },
    children: [
      { path: '', component: Social, name: 'social', meta: { title: 'Social' } },
    ]
  }, {
    path: '/contact',
    component: LayoutDefault,
    meta: { title: 'Contact' },
    children: [
      { path: '', component: Contact, name: 'conta t', meta: { title: 'Contact' } },
    ]
  },
  { path: '/:path(.*)', component: NotFound404 },
]
