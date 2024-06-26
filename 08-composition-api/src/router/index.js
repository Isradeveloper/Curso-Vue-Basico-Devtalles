import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon-id" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlots.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
