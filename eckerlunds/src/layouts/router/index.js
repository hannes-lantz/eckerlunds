// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import History from '@/views/History.vue';
import Male from '@/views/Male.vue';
import Female from '@/views/Female.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/history', component: History },
  { path: '/male', component: Male },
  { path: '/female', component: Female },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes
});

export default router;
