<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <div class="container mt-9 mb-lg-8 mb-6">
    <p class="fs-1 fs-md-6 text-center">購物車頁面</p>
    <div class="row">
      <div class="col-12">
        <div class="text-end">
          <button class="btn btn-outline-danger"
          type="button" @click="removeAllCart"
          :class="{'disabled':cartData.carts.length === 0 }">清空購物車</button>
        </div>
        <table class="table table-striped table-hover align-middle">
            <thead>
                <tr>
                  <th class="text-start" width="50"></th>
                  <th class="text-start" width="150">商品照片</th>
                  <th class="text-start" width="150">商品名稱</th>
                  <th class="text-center" width="200">數量</th>
                  <th class="text-center" width="150">單位</th>
                  <th class="text-center" width="150">小計</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="cartData.carts">
                  <tr v-for="item in cartData.carts" :key="item.id" class="align-items-center">
                    <td class="text-center align-items-center">
                      <button type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="delCartItem(item.id)">
                        x
                      </button>
                    </td>
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
                      <div class="input-group input-group-sm">
                        <!-- <div class="input-group">
                          <button class="btn btn-outline-secondary w-25"
                          type="button" id="button-addon1"
                          @click="updateCartItem(item, 'minus')">-</button>
                          <input type="text" class="form-control text-center" min="1"
                            placeholder="" aria-label="Example
                            text with button addon" aria-describedby="button-addon1"
                            v-model="item.qty"
                            @change="updateCartItem(item)"
                            :disabled="isLoadingItem === item.id">
                          <button class="btn btn-outline-secondary w-25"
                          type="button" id="button-addon1"
                          @click="updateCartItem(item, 'add')">+</button>
                        </div> -->
                        <select class="form-select"
                            v-model="item.qty"
                            @change="updateCartItem(item)"
                            :disabled="isLoadingItem === item.id"
                          >
                            <option :value="num" v-for="num in 20" :key="`${num}-${item.id}`"
                            >{{ num }}</option>
                        </select>
                      </div>
                    </td>
                    <td class="text-center">
                      {{ item.product.unit }}
                    </td>
                    <td class="text-center">
                      {{ $filters.toThousands(item.total) }}
                    </td>
                  </tr>
                </template>
            </tbody>
            <tfoot>
                <tr class="text-end">
                    <td colspan="5" class="text-end">總計</td>
                    <td class="text-center">{{ $filters.toThousands(cartData.total) }}</td>
                </tr>
                <!-- <tr class="text-end">
                    <td colspan="5" class="text-end">輸入優惠卷</td>
                    <td class="text-center">{{ $filters.toThousands(cartData.total) }}</td>
                </tr> -->
            </tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <ul class="d-flex justify-content-between">
        <li>
          <router-link class="btn btn-primary
            text-center" to="/products">繼續購物</router-link>
        </li>
        <li>
          <router-link class="btn btn-secondary text-center"
            to="order"
            :class="{'disabled':cartData.carts.length === 0 }"
          >下一步</router-link>
        </li>
      </ul>
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
      isLoadingItem: '',
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
    delCartItem(id) {
      this.isLoadingItem = id;
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          emitter.emit('get-cart');
          this.getCart();
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '刪除商品成功',
            });
          }
          this.isLoadingItem = '';
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除商品失敗',
          });
        });
    },
    updateCartItem(item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.isLoadingItem = item.id;
      this.isLoading = true;
      this.$http.put(url, { data })
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.getCart();
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '更新商品數量成功',
            });
          }
          this.isLoadingItem = '';
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新商品數量失敗',
          });
        });
    },
    removeAllCart() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.isLoading = true;
      this.$http.delete(apiUrl)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.getCart();
          emitter.emit('get-cart');
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '商品已清空，回到商品列表繼續選購',
            });
          }
          this.$router.push('/products');
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '商品清空失敗',
          });
        });
    },
    toThousands(number) {
      const arr = String(number).split('.');
      const num = arr[0];
      const len = Math.ceil(num.length / 3) * 3;
      const result = num.padStart(len, '0').match(/\d{3}/g).join(',').replace(/^0+/, '');
      return arr[1] ? `${result}.${arr[1]}` : result;
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
