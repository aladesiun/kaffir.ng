import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import newtemp from '../views/newtemp/index'

const routes = [
  {
    path: '/oldtemp',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'newtemp',
    component: newtemp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
