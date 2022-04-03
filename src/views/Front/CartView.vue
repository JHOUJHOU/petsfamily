<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <p class="fs-1 fs-md-6 text-center">購物車頁面</p>
    <div class="text-end">
      <button class="btn btn-outline-danger"
      type="button" @click="removeAllCart"
      :class="{'disabled':cartData.carts.length === 0 }">清空購物車</button>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                  <th class="text-start"></th>
                  <th class="text-start">商品照片</th>
                  <th class="text-start">商品名稱</th>
                  <th class="text-center">數量</th>
                  <th class="text-center">單位</th>
                  <th class="text-center">小計</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="cartData.carts">
                  <tr v-for="item in cartData.carts" :key="item.id">
                    <td class="text-center">
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
                      <!-- <div class="text-success">
                      已套用優惠券
                      </div> -->
                    </td>
                    <td class="text-center">
                      <div class="input-group input-group-sm">
                        <div class="input-group mb-3">
                          <select class="form-select"
                            v-model="item.qty"
                            @change="updateCartItem(item)"
                            :disabled="isLoadingItem === item.id"
                          >
                            <option :value="num" v-for="num in 20" :key="`${num}-${item.id}`"
                            >{{ num }}</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      {{ item.product.unit }}
                    </td>
                    <td class="text-center">
                      {{ item.total }}
                    </td>
                  </tr>
                </template>
            </tbody>
            <tfoot>
                <tr class="text-end">
                    <td colspan="5" class="text-end">總計</td>
                    <td class="text-center">{{ cartData.total }}</td>
                </tr>
            </tfoot>
        </table>
      </div>
    </div>
    <div>
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
    delCartItem(id) {
      this.isLoadingItem = id;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          console.log(res);
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
      this.isLoadingItem = item.id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http.put(url, { data })
        .then((res) => {
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
      this.$http.delete(apiUrl)
        .then((res) => {
          this.getCart();
          emitter.emit('get-cart');
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '商品已清空',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '商品清空失敗',
          });
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
