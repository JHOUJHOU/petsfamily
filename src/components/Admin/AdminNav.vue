<template>
  <header class="bg-primary sticky-top">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link to="/admin" class="navbar-brand">寵愛管理端</router-link>
          <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse
          d-flex justify-content-between" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/admin/products" class="nav-link">商品管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/cartAdmin" class="nav-link">訂單管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/DiscountAdmin" class="nav-link">優惠管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link">回前台首頁</router-link>
              </li>
              <li class="nav-item">
                <a href="#" @click.prevent="$emit('logout')" class="nav-link">登出</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
