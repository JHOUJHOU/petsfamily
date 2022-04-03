<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <p class="fs-1 fs-md-6 text-center mb-4 mb-md-4">結帳頁面</p>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <p class="fs-4 fs-md-6">訂單商品</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-start">商品照片</th>
              <th class="text-start">商品名稱</th>
              <th class="text-center">數量</th>
              <th class="text-center">單項金額</th>
            </tr>
          </thead>
          <tbody v-if="order.is_paid">
            <tr v-for="item in products" :key="item.id">
              <td class="text-start">
                <div class="rounded rounded-3" style="height: 100px; width: 100px;
                  background-position: center center; background-size: cover;"
                  :style="{
                    backgroundImage: `url(${item.product.imageUrl})`
                  }"
                ></div>
              </td>
              <td class="text-start">
                {{ item.product.title }}
              </td>
              <td class="text-center">
                {{ item.qty }}
              </td>
              <td class="text-center">
                {{ item.price }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end py-5 pe-5">
                總計 {{ order.total }} 元
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <p class="fs-4 fs-md-6">訂單資訊</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-start"></th>
            </tr>
          </thead>
          <tbody>
            <td class="align-middle">訂單金額</td>
              <td>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      order: {},
      user: {},
      products: {},
      is_paid: false,
    };
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.order.id}`;
      this.$http.get(apiUrl)
        .then((res) => {
          console.log(res.data);
          this.order = res.data.order;
          this.user = res.data.user;
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
