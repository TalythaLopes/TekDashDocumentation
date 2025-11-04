import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentacaoView from '../views/DocumentacaoView.vue'
import DocumentationView from '../views/DocumentationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/documentacao',
      name: 'documentacao',
      component: DocumentacaoView,
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: DocumentationView,
    },
    {
      path: '/vueDefault',
      name: 'vue default',
      component: () => import('../views/default/AppPage.vue'),
      children: [
        {
          path: '',
          name: 'vueDefault-home',
          component: () => import('../views/default/HomePage.vue'),
        },
        {
          path: 'about',
          name: 'vueDefault-about',
          component: () => import('../views/default/AboutPage.vue'),
        },
      ],
    },
  ],
})

export default router
