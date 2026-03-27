import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CollectionsView from '../views/CollectionsView.vue';
import ProductView from '../views/ProductView.vue';
import CartView from '../views/CartView.vue';
import AboutView from '../views/AboutView.vue';
import EditorialView from '../views/EditorialView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/collections', component: CollectionsView },
    { path: '/product/:id', component: ProductView, props: true },
    { path: '/cart', component: CartView },
    { path: '/about', component: AboutView },
    { path: '/editorial', component: EditorialView },
  ],
  scrollBehavior() {
    return { top: 0 }; // Always scroll to top on navigation
  }
});

export default router;