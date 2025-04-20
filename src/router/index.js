import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductosPage from '../views/ProductosPage.vue'
import PromocionesPage from '@/views/PromocionesPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Productos', component: ProductosPage  },
  { path: '/promociones', name: 'Promociones', component: PromocionesPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
