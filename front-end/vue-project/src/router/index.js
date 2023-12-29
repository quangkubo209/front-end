import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePageView.vue'
import UploadFile from '../views/UploadFileView.vue'
import ActionView from '../views/ActionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      children:[
      {
        path: '',
        component: UploadFile
      },
      {
      path: '/action',
      name: 'action',
      component: ActionView,
    }
  ],
}
  ]
})

export default router
