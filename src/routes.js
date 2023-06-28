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
import BrazilianJiuJitsu from '@/pages/BrazilianJiuJitsu.vue'
import ShadowJudo from '@/pages/ShadowJudo.vue'
import Taiso from '@/pages/Taiso.vue'
import IntervalTraining from '@/pages/IntervalTraining.vue'
import Social from '@/pages/Social.vue'
import Contact from '@/pages/Contact.vue'
import Planning from '@/pages/Planning.vue'
import WorkingSpace from '@/pages/WorkingSpace.vue'
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
    meta: { title: 'Brazilian Jiu-Jitsu' },
    children: [
      { path: '', component: BrazilianJiuJitsu, name: 'bjj', meta: { title: 'Brazilian Jiu-Jitsu' } },
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
    path: '/interval-training',
    component: LayoutDefault,
    meta: { title: 'Interval Training' },
    children: [
      { path: '', component: IntervalTraining, name: 'intervalTraining', meta: { title: 'IntervalTraining' } },
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
  }, {
    path: '/working-space',
    component: LayoutDefault,
    meta: { title: 'Workng Space' },
    children: [
      { path: '', component: WorkingSpace, name: 'workingSpace', meta: { title: 'Working Space' } },
    ]
  },
  { path: '/:path(.*)', component: NotFound404 },
]
