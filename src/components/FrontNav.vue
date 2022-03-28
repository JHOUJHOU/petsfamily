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
          <div class="collapse navbar-collapse d-flex justify-content-between" id="navbar">
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
</template>
