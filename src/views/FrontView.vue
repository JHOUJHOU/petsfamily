<template>
    <nav>
      <router-link to="/" class="text-primary">首頁</router-link> |
      <router-link to="/products">商品列表</router-link> |
      <router-link to="/login">前台購物車</router-link> |
      <router-link to="/login">後台購物車列表</router-link> |

      <!-- 往後台 -->
      <router-link to="/admin/products">後台產品列表</router-link>

    </nav>
    <p class="text-primary">首頁</p>
    <router-view/>
</template>
