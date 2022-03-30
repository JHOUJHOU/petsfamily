import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'home', // 首頁
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: 'products', // 產品列表
        component: () => import('../views/Front/ProductsView.vue'),
      },
      {
        path: 'petServices', // 寵物服務
        component: () => import('../views/Front/PetServicesView.vue'),
      },
      {
        path: 'love', // 浪浪認養
        component: () => import('../views/Front/LoveView.vue'),
      },
      {
        path: 'knowledge', // 寵物知識
        component: () => import('../views/Front/KnowledgeView.vue'),
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
        path: 'search', // 搜尋
        component: () => import('../views/Front/SearchView.vue'),
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
        path: 'product/:id', // 單一產品頁面
        component: () => import('../views/Front/ProductPageView.vue'),
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
        path: 'knowledgeAdmin', // 文章管理
        component: () => import('../views/Dashboard/KnowledgeAdminView.vue'),
      },
      {
        path: 'discountAdmin', // 優惠管理
        component: () => import('../views/Dashboard/DiscountAdminView.vue'),
      },
      {
        path: 'serviceAdmin', // 客服管理
        component: () => import('../views/Dashboard/ServiceAdminView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
