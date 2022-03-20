<template>
  <header class="bg-primary">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">寵愛管理端</a>
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
                <router-link to="/admin/productsAdmin" class="nav-link">商品管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/cartAdmin" class="nav-link">訂單管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/knowledgeAdmin" class="nav-link">文章管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/DiscountAdmin" class="nav-link">優惠管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/serviceAdmin" class="nav-link">客服管理</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link">回前台首頁</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <footer class="bg-primary py-3">
      <div class="container-lg d-flex justify-content-center flex-column align-items-center">
        <div class="mb-3">
          <a href="/" class="link-dark" style="text-decoration:none"><dog-side-icon />寵愛世家</a>
        </div>
        <div class="mb-3">
          本網站圖片與文案僅供個人作品使用，非商業用途
        </div>
        <div>
          © Copyright 2022 寵物世家
        </div>
      </div>
  </footer>
</template>
