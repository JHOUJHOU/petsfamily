<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <div class="container mt-9 mb-lg-8 mb-6">
    <p class="fs-1 fs-md-6 text-center mb-4 mb-md-4">確認訂單頁面</p>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <p class="fs-4 fs-md-6">訂單內容</p>
        <table class="table table-striped align-middle">
          <thead>
            <tr>
              <th class="text-start">商品照片</th>
              <th class="text-start">商品名稱</th>
              <th class="text-center">數量</th>
              <th class="text-center">單項金額</th>
            </tr>
          </thead>
          <tbody v-if="cartData.carts">
            <tr v-for="item in cartData.carts" :key="item.id">
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
                NT{{ $filters.toThousands(item.total) }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row d-flex align-items-center">
          <div class="col-6">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠卷"
                aria-label="請輸入優惠卷"
                aria-describedby="button-addon2"
                v-model="coupon">
              <button
                class="btn btn-secondary"
                type="button"
                id="button-addon2"
                @click="useCoupon">
                輸入優惠卷
              </button>
            </div>
          </div>
          <div class="col-6 text-end">
            <div v-if="cartData.final_total === cartData.total">
              <p>總金額 : NT{{ $filters.toThousands(cartData.total) }} 元</p>
            </div>
            <div v-else>
              <del class="text-success text-opacity-50">
                總計 : NT{{ $filters.toThousands(cartData.total) }} 元
              </del>
              <p>折扣後金額 : NT{{ $filters.toThousands(cartData.final_total) }} 元</p>
            </div>
          </div>
        </div>
        <div>
          <p class="fs-6 text-success">
            <BIconLightningChargeFill />
            使用折扣碼 : petCoupon85
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 justify-content-center">
        <p class="fs-4 fs-md-6">填寫訂單資訊</p>
        <Form ref="form" v-slot="{ errors }" @submit="createToOrder">
          <div class="mb-2">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              placeholder="請輸入姓名"
              rules="required"
              class="form-control"
              v-model="form.user.name"
              :class="{ 'is-invalid': errors['姓名'] }"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-2">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="form.user.tel"></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-2">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="required|email"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-2">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-2">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"></textarea>
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-danger"
              :disabled="Object.keys(errors).length > 0 ||
              cartData.carts.length === 0">送出訂單</button>
          </div>
        </Form>
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
      cartData: {
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon: '',
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(apiUrl)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.cartData = res.data.data;
        });
    },
    createToOrder() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.isLoading = true;
      this.$http.post(apiUrl, { data: order })
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '訂單建立成功',
            });
          }
          this.$refs.form.resetForm();
          this.getCart();
          this.form.message = '';
          emitter.emit('get-cart');
          this.$router.push(`/pay/${res.data.orderId}`);
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '訂單建立失敗',
          });
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    useCoupon() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon,
      };
      this.$http.post(apiUrl, { data: coupon })
        .then((res) => {
          this.getCart();
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '套用優惠卷成功',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '套用優惠卷失敗',
          });
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
