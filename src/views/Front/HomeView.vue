<template>
  <!-- banner -->
  <div class="banner mb-lg-8 mb-6 position-relative">
    <div class="container-lg h-md-50 h-75 d-flex align-items-center">
        <div class="row">
            <div class="offset-lg-1" data-aos="fade-right">
                <h1 class="fs-md-1 fs-3 text-dark">真心對待，完整專業服務</h1>
            </div>
            <div class="col card d-lg-none d-block bg-primary">
              <div class="card-body">
                <p>開幕期間，優惠折扣</p>
                <p>現金折抵<span class="px-2">折扣碼 petCoupon80</span></p>
                <p class="card-text">消費越多折扣越多</p>
              </div>
            </div>
        </div>
        <div class="position-absolute top-30 start-70 d-lg-block d-none">
          <div class="card bg-primary py-4 px-4" style="width: 18rem;">
            <div class="card-body text-center">
              <h2 class="card-title mb-2">開幕優惠</h2>
              <p class="card-text mb-2">開幕期間，優惠折扣</p>
              <p class="card-text mb-2">現金折抵</p>
              <p class="card-text mb-2">折扣碼 petCoupon80</p>
              <p class="card-text">消費越多折扣越多</p>
            </div>
          </div>
        </div>
    </div>
  </div>
<!-- 服務介紹 -->
  <div class="container-lg mb-lg-8 mb-6">
    <h2 class="text-center">服務介紹</h2>
    <p class="text-center mb-2">提供最好的品質 讓毛孩吃喝玩樂更佳安心</p>
    <div class="row align-items-center bg-success bg-opacity-25 mb-7 text-md-start">
      <div class="col-md-6 col-12 product"></div>
      <div class="col-md-6 col-12 text-center py-3">
        <h3>優質商品</h3>
        <p>多樣選擇，讓您找到想要的商品</p>
        <router-link to="/products"
          class="rounded rounded-3 text-white fs-4">
          <button type="button" class="btn btn-secondary">點我看更多</button>
        </router-link>
      </div>
    </div>
    <div class="row align-items-center bg-success bg-opacity-25 text-md-end text-center">
      <div class="col-md-6 col-12 text-center py-3">
        <h3>拍照</h3>
        <p>多種風格可挑選</p>
        <router-link to="/products"
          class="rounded rounded-3 text-white fs-4">
          <button type="button" class="btn btn-secondary">點我看更多</button>
        </router-link>
      </div>
      <div class="col-md-6 col-12 service"></div>
    </div>
  </div>
<!-- 配送&付款說明 -->
  <div class="container-lg mb-lg-8 mb-6">
    <div class="row">
      <h2 class="text-center mb-4">配送 & 付款</h2>
      <div class="col-md-4">
        <ul class="text-center">
          <li class="mb-2 fs-5 fw-bold">付款方式</li>
          <li class="mb-2">線上刷卡、貨到付款、超商取貨付款等</li>
          <li>LINE PAY、街口等</li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="text-center">
          <li class="mb-2 fs-5 fw-bold">運費</li>
          <li class="mb-2">消費滿499元運費30元</li>
          <li>消費破千免運</li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="text-center">
          <li class="mb-2 fs-5 fw-bold">客服服務</li>
          <li class="mb-2">客服電話：02-55963964</li>
          <li>線上客服：FB官方粉絲團搜尋『 寵愛 』</li>
        </ul>
      </div>
    </div>
  </div>
<!-- 訂閱 -->
  <div class="bg-info">
    <div class="container">
        <div class="row d-lg-flex flex-lg-row flex-column align-items-center py-5">
          <div class="col-lg-4 col-12">
            <h2 class="fs-lg-2 fs-3">
              訂閱，獲得更多優惠消息
            </h2>
          </div>
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div class="input-group mb-3 fs-4">
              <input type="text"
                class="form-control text-primary"
                placeholder="輸入您的電子信箱" aria-label="輸入您的電子信箱"
                aria-describedby="button-addon2">
              <button class="btn btn-secondary text-white"
                type="button"
                id="button-addon2">訂閱</button>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div class="border-bottom border-white"></div>
</template>
