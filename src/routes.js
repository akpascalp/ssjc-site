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
import BJJ from '@/pages/BJJ.vue'
import ShadowJudo from '@/pages/ShadowJudo.vue'
import Taiso from '@/pages/Taiso.vue'
import Social from '@/pages/Social.vue'
import Contact from '@/pages/Contact.vue'
import Planning from '@/pages/Planning.vue'
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
    path: '/bjj',
    component: LayoutDefault,
    meta: { title: 'BJJ' },
    children: [
      { path: '', component: BJJ, name: 'bjj', meta: { title: 'BJJ' } },
    ]
  }, {
    path: '/shadow-judo',
    component: LayoutDefault,
    meta: { title: 'Shadow Judo' },
    children: [
      { path: '', component: ShadowJudo, name: 'shadowJudo', meta: { title: 'Shadow Judo' } },
    ]
  }, {
    path: '/taiso',
    component: LayoutDefault,
    meta: { title: 'Taiso' },
    children: [
      { path: '', component: Taiso, name: 'taiso', meta: { title: 'Taiso' } },
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
      { path: '', component: Contact, name: 'contact', meta: { title: 'Contact' } },
    ]
  }, {
    path: '/planning',
    component: LayoutDefault,
    meta: { title: 'Planning' },
    children: [
      { path: '', component: Planning, name: 'planning', meta: { title: 'Planning' } },
    ]
  },
  { path: '/:path(.*)', component: NotFound404 },
]
