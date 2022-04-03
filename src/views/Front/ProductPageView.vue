<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div class="row">
      <div class="col-lg-6 col-sm-12 col-12 mb-lg-3 mb-md-3 mb-3">
        <div class="rounded rounded-3 img-fluid" style="height: 500px;
          background-position: center center; background-size: cover;"
          :style="{
            backgroundImage: `url(${product.imageUrl})`
          }"
        >
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 col-12">
        <div class="row">
          <div class="col-lg-12 mb-lg-5 mb-md-5 mb-5">
            <h5 class="mb-3 fs-2">{{ product.title }}</h5>
          </div>
          <div class="col-lg-12 mb-lg-5 mb-md-5 mb-5">
            <p class="mb-3">{{ product.description }}</p>
            <p class="mb-3">{{ product.content }}</p>
          </div>
          <div class="col-lg-12 mb-lg-5 mb-md-5 mb-5">
            <p class="fs-3"
              v-if="product.price === product.origin_price">
              NT{{ product.price }}
            </p>
            <div v-else class="col-lg-12 mmb-lg-5 mb-md-5 mb-5">
              <del class="fs-lg-1 text-success text-opacity-50 mb-3">
              NT{{ product.origin_price }}</del>
              <span>NT{{ product.price }}</span>
            </div>
          </div>
          <div class="col-lg-12 mb-lg-3 mb-md-3 mb-3">
            <div class="input-group input-group-sm mb-3 d-flex">
              <div class="input-group mb-3">
                <select
                  class="form-select"
                  v-model="qty">
                  <option :value="num" v-for="num in 20" :key="`${num}-${product}`"
                  >{{ num }}
                  </option>
                </select>
                <button type="button" @click.prevent="addToCart(id, qty)"
                  class="btn btn-secondary ms-2"
                  :disabled="isLoadingItem === product.id"
                >
                加入購物車</button>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <p>付款方式: 現金、線上刷卡、貨到付款、超商取貨付款、LINE PAY等</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/assets/js/emitter';

export default {
  inject: ['emitter'],
  data() {
    return {
      product: [],
      qty: 1,
      isLoadingItem: '',
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addToCart(id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http.post(url, { data })
        .then((res) => {
          console.log(res);
          emitter.emit('get-cart');
          this.isLoadingItem = '';
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '加入購物車成功',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '加入購物車失敗',
          });
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
