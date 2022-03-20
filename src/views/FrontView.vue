<template>
  <header class="bg-primary">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/home">
            <dog-side-icon/>寵愛
          </router-link>
          <!-- 漢堡選單 -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/home"
                class="nav-link active"
                >首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">商品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/petServices" class="nav-link">寵物服務</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/love" class="nav-link">浪浪認養</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/knowledge" class="nav-link">寵物知識</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/discount" class="nav-link">優惠活動
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/question" class="nav-link">常見問題</router-link>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/search" class="nav-link"><BIconSearch/>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart" class="nav-link"><BIconCartCheckFill/>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link"><BIconTelephoneForwardFill/>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <router-view/>
  <footer class="bg-primary py-3">
      <div class="container-lg d-flex justify-content-center flex-column align-items-center">
        <div class="mb-3">
          <a href="/" class="link-dark" style="text-decoration:none"><dog-side-icon/>寵愛</a>
        </div>
        <div class="mb-3 d-flex">
          <div class="mx-3"><BIconGithub/></div>
          <div class="mx-3"><BIconFacebook/></div>
          <div class="mx-3"><BIconInstagram/></div>
        </div>
        <div class="mb-3">
          <router-link to="/login" class="link-dark bg-info
          rounded rounded-3 py-2 px-3"
          style="text-decoration:none"
          >管理者登入
          </router-link>
        </div>
        <div class="mb-3">
          本網站圖片與文案僅供個人作品使用，非商業用途
        </div>
        <div>
          © Copyright 2022 寵愛
        </div>
      </div>
  </footer>
</template>
