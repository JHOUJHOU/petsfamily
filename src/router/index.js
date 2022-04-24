import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/', // 首頁
        name: 'home',
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: 'products', // 產品列表
        component: () => import('../views/Front/ProductsView.vue'),
      },
      {
        path: 'product/:id', // 單一產品頁面
        component: () => import('../views/Front/ProductPageView.vue'),
      },
      {
        path: 'detail/:id', // 單一產品頁面 產品細節
        component: () => import('../views/Front/ProductPageDetail.vue'),
      },
      {
        path: 'discount', // 優惠活動
        component: () => import('../views/Front/DiscountView.vue'),
      },
      {
        path: 'question', // 常見問題
        component: () => import('../views/Front/QuestionView.vue'),
      },
      {
        path: 'cart', // 購物車
        component: () => import('../views/Front/CartView.vue'),
      },
      {
        path: 'order', // 結帳頁面
        component: () => import('../views/Front/CartOrderView.vue'),
      },
      {
        path: 'contact', // 聯絡
        component: () => import('../views/Front/ContactView.vue'),
      },
      {
        path: 'login', // 登入
        component: () => import('../views/LoginView.vue'),
      },
      {
        path: 'pay/:id', // 單一產品頁面
        component: () => import('../views/Front/PayOrderView.vue'),
      },
    ],
  },
  {
    path: '/admin', // 後台
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products', // 商品管理
        component: () => import('../views/Dashboard/ProductsAdminView.vue'),
      },
      {
        path: 'cartAdmin', // 訂單管理
        component: () => import('../views/Dashboard/OrderAdminView.vue'),
      },
      {
        path: 'discountAdmin', // 優惠管理
        component: () => import('../views/Dashboard/DiscountAdminView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
