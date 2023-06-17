import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/views/ProductList.vue"),
  },
  {
    path: "/order",
    component: () => import("@/views/OrderPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
