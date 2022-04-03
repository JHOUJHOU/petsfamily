<template>
  <header class="bg-primary">
    <div class="container-lg">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
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
                <router-link to="/"
                class="nav-link active"
                >首頁</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">商品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/question" class="nav-link">常見問題</router-link>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/cart" class="nav-link position-relative"><BIconCartCheckFill/>
                <span
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
              <!-- <li class="nav-item">
                <router-link to="/contact" class="nav-link"><BIconTelephoneForwardFill/>
                </router-link>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
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
        })
        .catch((err) => {
          console.log(err);
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
