import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'products', // 產品列表
        component: () => import('../views/ProductsView.vue'),
      },
    ],
  },
  {
    path: '/admin', // 後台
    component: () => import('../views/DashboardView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
