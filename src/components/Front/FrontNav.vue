<template>
  <header class="bg-primary sticky-top">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <div class="d-flex">
            <router-link class="navbar-brand" to="/">
            <dog-side-icon/>寵愛
            </router-link>
            <ul class="navbar-nav d-lg-flex d-lg-block d-none">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">商品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/question" class="nav-link">常見問題</router-link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item d-lg-block d-none">
                <router-link to="/cart"
                  class="nav-link position-relative">
                  <BIconCartCheckFill/>
                    <span v-if="cartData?.carts?.length != 0"
                      class="position-absolute
                        top-30
                        start-90
                        translate-middle
                        badge
                        rounded-pill
                        bg-danger"
                    >
                      {{ cartData?.carts?.length }}
                    </span>
                </router-link>
              </li>
              <li>
                <button class="navbar-toggler" type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="navbar navbar-expand-lg navbar-light bg-primary d-lg-none d-block">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">商品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/question" class="nav-link">常見問題</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart" class="nav-link">購物車</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import emitter from '@/assets/js/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};
</script>
