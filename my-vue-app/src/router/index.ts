import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// Routes with lazy loading for About and Posts
const routes = [
  { path: '/', component: Home },  // No lazy loading for Home
  {
    path: '/posts',
    component: () => import('../views/Posts.vue'),  // Lazy load for Posts
    children: [
      {
        path: 'food',
        component: () => import('../views/Food.vue')  // Lazy load for Food topic
      }
    ]
  },
  { path: '/about', component: () => import('../views/About.vue') }  // Lazy load for About
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
