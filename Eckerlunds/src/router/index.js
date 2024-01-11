import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import History from '../views/History.vue';
import Male from '../views/Male.vue';
import Female from '../views/Female.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/history', component: History },
  { path: '/male', component: Male },
  { path: '/female', component: Female },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;