<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div>
      <p v-if="order.is_paid" class="fs-1 fs-md-6 text-center mb-4 mb-md-4">訂單結帳完成頁面</p>
      <p v-else class="fs-1 fs-md-6 text-center mb-4 mb-md-4">結帳頁面</p>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <p class="fs-4 fs-md-6">訂單明細</p>
        <table class="table table-striped align-middle">
          <thead>
            <tr>
              <th class="text-start">商品照片</th>
              <th class="text-start">商品名稱</th>
              <th class="text-center">數量</th>
              <th class="text-center">單項金額</th>
            </tr>
          </thead>
          <tbody>
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
                {{ $filters.toThousands(item.product.price) }}元
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end py-5 pe-5">
                總計 {{ $filters.toThousands(order.total) }} 元
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <p class="fs-4 fs-md-6">訂單資訊</p>
        <table class="table table-striped align-middle">
          <thead>
            <tr>
              <th class="text-start"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>訂單狀態</td>
              <td v-if="order.is_paid" class="text-danger">已付款</td>
              <td v-else>未付款</td>
            </tr>
            <tr>
              <td>訂單總額</td>
              <td>{{ $filters.toThousands(order.total) }}元</td>
            </tr>
            <tr>
              <td>訂單編號</td>
              <td>{{ order.id }}</td>
            </tr>
            <tr>
              <td>收件人姓名</td>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <td>收件人信箱</td>
              <td>{{ user.email  }}</td>
            </tr>
            <tr>
              <td>收件人信箱</td>
              <td>{{ user.tel  }}</td>
            </tr>
            <tr>
              <td>收件人地址</td>
              <td>{{ user.address  }}</td>
            </tr>
            <tr>
              <td>備註</td>
              <td>{{ order.message }}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div v-if="order.is_paid">
          </div>
          <div v-else class="row">
            <div class="col-4">
              <p class="fs-4 fs-md-6 text-center">付款方式</p>
            </div>
            <div class="col-4">
              <button @click="postPay" type="button" class="btn btn-primary w-100">現金</button>
            </div>
            <div class="col-4">
              <button @click="postPay" type="button" class="btn btn-secondary w-100">信用卡</button>
            </div>
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
      order: {},
      user: {},
      products: {},
      is_paid: false,
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(apiUrl)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.order = res.data.order;
          this.user = res.data.order.user;
          this.products = res.data.order.products;
        });
    },
    postPay() {
      this.orderId = this.$route.params.id;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(apiUrl)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.getOrder();
          emitter.emit('get-cart');
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '結帳成功',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '結帳失敗',
          });
        });
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>
