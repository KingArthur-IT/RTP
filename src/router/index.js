import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import CompanyView from '../views/CompanyView.vue'
import CatalogView from '../views/CatalogView.vue'
import AlphaServiceView from '../views/AlphaServiceView.vue'
import CatalogSystemView from '../views/CatalogSystemView.vue'
import ProductCardView from '../views/ProductCardView.vue'
import BasketView from '../views/BasketView.vue'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: { name: 'Контакты' }
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView,
      meta: { name: 'О компании' }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/alpha-system',
      name: 'alpha-system',
      component: AlphaServiceView,
      meta: { name: 'Система ALPHA полипропиленовые трубы и фитинги PP-R' }
    },
    {
      path: '/catalog-system/:name',
      name: 'catalog-system',
      component: CatalogSystemView,
    },
    {
      path: '/card/:name',
      name: 'card',
      component: ProductCardView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketView
    },
  ]
})

export default router
