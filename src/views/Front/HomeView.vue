<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <!-- banner -->
  <div class="banner mb-lg-8 mb-6 position-relative">
    <div class="container-lg h-md-50 h-75 d-flex align-items-center">
        <div class="row">
            <div class="offset-lg-1">
                <h1 class="fs-md-1 fs-3 text-dark">真心對待，完整專業服務</h1>
                <router-link to="/products"
                  class="btn btn-secondary w-md-50 w-75
                  rounded rounded-3 text-white fs-4 mb-3">點我看更多
                </router-link>
            </div>
            <div class="col card d-lg-none d-block bg-primary" data-aos="zoom-in">
              <div class="card-body">
                <p>開幕期間，優惠折扣</p>
                <p>現金折抵<span class="px-2">折扣碼 petCoupon80</span></p>
                <p class="card-text">消費越多折扣越多</p>
              </div>
            </div>
        </div>
        <div class="position-absolute top-30 start-70 d-lg-block d-none" data-aos="zoom-in">
          <div class="card bg-primary py-4 px-4" style="width: 18rem;">
            <div class="card-body text-center">
              <h2 class="card-title mb-2">開幕優惠</h2>
              <p class="card-text mb-2">開幕期間，優惠折扣</p>
              <p class="card-text mb-2">現金折扣碼</p>
              <p class="card-text mb-2">petCoupon80</p>
              <p class="card-text">消費越多折扣越多</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  <!-- 指引 -->
  <div class="text-center text-primary fs-2 mb-lg-8 mb-6"><BIconCaretDownFill/></div>
<!-- 服務介紹 -->
  <div class="container-lg mb-lg-10 mb-6">
    <h2 class="text-center mb-4" data-aos="fade-up">服務介紹</h2>
    <p class="text-center mb-4" data-aos="fade-up">提供最好的品質 讓毛孩吃喝玩樂更佳安心</p>
    <div class="row align-items-center bg-success
    bg-opacity-25 mb-7 text-md-start mb-11" data-aos="fade-up">
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
    <div class="row align-items-center bg-success
    bg-opacity-25 text-md-end text-center" data-aos="fade-left">
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
  <div class="container-lg mb-lg-10 mb-6"  data-aos="fade-up">
    <div class="row">
      <h2 class="text-center mb-4">配送 & 付款</h2>
      <div class="col-md-4 text-center" data-aos="fade-up-right">
        <div><p class="mb-3 fs-5 fw-bold">付款方式</p></div>
        <div><p class="mb-3 fs-6">線上刷卡、貨到付款、超商取貨付款等</p></div>
        <div><p class="mb-3 fs-6">LINE PAY、街口等</p></div>
      </div>
      <div class="col-md-4 text-center" data-aos="fade-up">
        <div><p class="mb-3 fs-5 fw-bold">運費</p></div>
        <div><p class="mb-3 fs-6">消費滿499元運費30元</p></div>
        <div><p class="mb-3 fs-6">消費破千免運</p></div>
      </div>
      <div class="col-md-4 text-center" data-aos="fade-up-left">
        <div><p class="mb-3 fs-5 fw-bold">客服服務</p></div>
        <div><p class="mb-3 fs-6">客服電話：02-55963964</p></div>
        <div><p class="mb-3 fs-6">客服電話：02-55963964</p></div>
      </div>
    </div>
  </div>
<!-- 訂閱 -->
  <div class="subscription py-10">
    <div class="container-lg">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4" data-aos="zoom-in-down">
            <h2 class="fs-lg-2 fs-4 text-center">訂閱，獲得更多優惠消息</h2>
            <div class="input-group fs-4">
              <input type="email"
                class="form-control text-primary"
                placeholder="輸入您的電子信箱" aria-label="輸入您的電子信箱"
                aria-describedby="button-addon2">
              <button class="btn btn-secondary text-white"
                type="button"
                id="button-addon2">訂閱</button>
            </div>
          </div>
          <div class="col-12 col-md-4"></div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
