import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      children:[
      {
        path: '',
        component: Home
      },
      {
      path: '/action',
      name: 'action',
      component: () => import('../views/ActionView.vue')
    }
  ],
}
  ]
})

export default router
