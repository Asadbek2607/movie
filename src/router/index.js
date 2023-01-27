import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/WatchMoviePage',
      name: 'Watch Movie Online',
      component: ()=> import('@/views/WatchMoviePage.vue')

    },
    {
      path: '/login',
      name: 'Login page',
      component: ()=> import('@/views/LoginPage.vue')

    }
  ]
})

export default router