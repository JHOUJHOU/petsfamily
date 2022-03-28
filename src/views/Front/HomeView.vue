<template>
  <!-- banner -->
  <div class="banner mb-lg-8 mb-6 position-relative">
    <div class="container-lg h-md-50 h-75 d-flex align-items-center">
        <div class="row">
            <div class="offset-lg-1" data-aos="fade-right">
                <h1 class="fs-md-1 fs-3 text-dark">真心對待，完整專業服務</h1>
                <div class="d-grid gap-2 d-flex mb-3">
                  <router-link to="/products"
                    class="btn btn-secondary
                    rounded rounded-3 text-white fs-4">商品列表
                  </router-link>
                  <router-link to="/discount"
                    class="btn btn-outline-primary
                    rounded rounded-3 text-dark fs-4">寵物服務
                  </router-link>
                </div>
            </div>
            <div class="col card d-lg-none d-block bg-primary">
              <div class="card-body">
                <p>開幕期間，優惠折扣</p>
                <p>現金折抵50元<span class="px-2"><button
                type="button" class="btn btn-info mb-2">複製</button></span></p>
                <p class="card-text">消費越多折扣越多</p>
              </div>
            </div>
        </div>
        <div class="position-absolute top-30 start-70 d-lg-block d-none">
          <div class="card bg-primary py-4 px-4" style="width: 18rem;">
            <div class="card-body text-center">
              <h2 class="card-title mb-2">開幕優惠</h2>
              <p class="card-text mb-2">開幕期間，優惠折扣</p>
              <p class="card-text mb-2">現金折抵50元</p>
              <button type="button" class="btn btn-info mb-2">複製</button>
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
      <div class="row align-items-center bg-success bg-opacity-25 mb-7">
        <div class="col-md-6 product"></div>
        <div class="col-md-6">
          <h3>優質商品</h3>
          <p>多樣選擇，讓您找到想要的商品</p>
          <router-link to="/products"
            class="rounded rounded-3 text-white fs-4">
            <button type="button" class="btn btn-secondary">點我看更多</button>
          </router-link>
        </div>
      </div>
      <div class="row align-items-center bg-success bg-opacity-25 text-end mb-7">
        <div class="col-md-6">
          <h3>浪浪認養認購</h3>
          <p>認養代替購買，給浪浪一個家</p>
          <router-link to="/love"
            class="rounded rounded-3 text-white fs-4">
            <button type="button" class="btn btn-secondary">點我看更多</button>
          </router-link>
        </div>
        <div class="col-md-6 adoptPet"></div>
      </div>
      <div class="row align-items-center bg-success bg-opacity-25">
        <div class="col-md-6 service"></div>
        <div class="col-md-6">
          <h3>各種服務</h3>
          <p>拍照、住宿、訓練、認養、認購、派對、溜狗</p>
          <router-link to="/petServices"
            class="rounded rounded-3 text-white fs-4">
            <button type="button" class="btn btn-secondary">點我看更多</button>
          </router-link>
        </div>
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
<!-- 消費者分享 -->
<div class="container-lg mb-lg-8 mb-6">
  <div class="row">
    <h2 class="text-center">消費者分享</h2>
    <swiper
      :slides-per-view="3"
      :space-between="50"
    >
    <swiper-slide v-for="item in products" :key="item.id">
      <div
      style="height: 300px; background-positiion: center center; background-size: cover;"
        :style="{
          backgroundImage: `url(${item.imageUrl})`
        }">
      </div>
    </swiper-slide>
  </swiper>
  </div>
</div>

<!-- 熱銷商品 Top 3 -->
<!-- <div class="container-lg mb-lg-8 mb-6">
  <div class="row">
    <h2 class="text-center">熱銷商品 TOP 3</h2>
    <div class="col-4" v-for="top in products" :key="top.id">
      <div class="card" style="width: 18rem;">
        <img :src="top.imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ top.title }}</h5>
          <p class="card-text">{{ top.description }}</p>
          <a href="#" class="btn btn-primary">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</div> -->
<!-- 訂閱 Email -->
<div class="bg-success bg-opacity-50 py-5">
  <div class="container-lg">
    <div class="row text-center">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <Form v-slot="{ errors }">
          <label for="mail" class="form-label fs-1 fs-md-6" >輸入信箱後獲得最新消息</label>
          <Field
            id="email"
            name="email"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入信箱"
            rules="email|required"
          >
          </Field>
          <error-message name="email" class="invalid-feedback"></error-message>
          <button class="col-md-3 btn btn-lg btn-info w-100 mt-3 mb-3" type="button">
            送出
          </button>
        </Form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      // 取得遠端資源
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
