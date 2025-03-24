import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import { defineAsyncComponent } from "vue";

const About = defineAsyncComponent(() => import("@/views/About.vue"));
const Blog = defineAsyncComponent(() => import("@/views/Blog.vue"));

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;