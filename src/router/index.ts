import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Domaine Laluc - Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'Page with all the products of the Domaine Laluc'
          }
        ]
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue')
    },
    {
      path: '/products/:id?',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/CGU',
      name: 'CGU',
      component: () => import('../pages/CGUPage.vue')
    },
    {
      path: '/legalNotice',
      name: 'legalNotice',
      component: () => import('../pages/LegalNoticePage.vue')
    },
  ]
})

export default router