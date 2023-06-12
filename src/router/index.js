import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
      meta: { name: 'Контакты' }
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
      meta: { name: 'О компании' }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogView.vue'),
      meta: { name: 'Каталог' }
    },
    {
      path: '/alpha-system',
      name: 'alpha-system',
      component: () => import('../views/AlphaServiceView.vue'),
      meta: { name: 'Система ALPHA полипропиленовые трубы и фитинги PP-R' }
    },
    {
      path: '/catalog-system/:name',
      name: 'catalog-system',
      component: () => import('../views/CatalogSystemView.vue'),
    },
    {
      path: '/card/:name',
      name: 'card',
      component: () => import('../views/ProductCardView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/BasketView.vue'),
      meta: { name: 'Корзина' }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: { name: 'Результаты поиска' }
    },
    {
      path: '/delivery-rules',
      name: 'delivery-rules',
      component: () => import('../views/DeliveryRulesView.vue'),
      meta: { name: 'Доставка и сервис' }
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('../views/TermsOfUseView.vue'),
      meta: { name: 'Пользовательское соглашение' }
    },
    {
      path: '/confidence',
      name: 'confidence',
      component: () => import('../views/ConfidenceView.vue'),
      meta: { name: 'Политика конфиденциальности' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { name: 'Услуги' }
    },
    {
      path: '/payment-methods',
      name: 'payment-methods',
      component: () => import('../views/PaymentMethodsView.vue'),
      meta: { name: 'Оплата' }
    },
    {
      path: '/loader',
      name: 'loader',
      component: () => import('../views/LoaderView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
      meta: { name: '404' }
    },
  ]
})

export default router
