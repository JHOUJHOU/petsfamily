<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="text-start">刪除</th>
          <th scope="col" class="text-start">訂單編號</th>
          <th scope="col" class="text-start">商品名稱/商品數量</th>
          <th scope="col" class="text-start">訂單總金額</th>
          <th scope="col" class="text-start">已付款</th>
          <th scope="col" class="text-start">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger"
              data-bs-target="#exampleModal"
              @click="delOrderModal(item)">
              X
            </button>
          </td>
          <td>{{ item.id }}</td>
          <td>
            <ul v-for="order in item.products" :key="order.id">
              <li class="text-start">
                {{ order.product.title }}，數量{{ order.qty }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>
            <span v-if="item.is_paid">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <button type="button" class="btn btn-secondary"
            data-bs-toggle="modal" data-bs-target="#exampleModal" @click="orderModal(item)">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <orderPagination :pages="pagination" @order-product="getOrder"></orderPagination>
  </div>
    <order-modal
    :temp-order="tempOrder"
    @update-order="getOrder"
    ref="orderModal"
  ></order-modal>
  <del-order-modal
    :temp-order="tempOrder"
    @del-order="getOrder"
    ref="delOrderModal">
  </del-order-modal>
</template>

<script>
import orderPagination from '@/components/Admin/OrderPaginate.vue';
import orderModal from '@/components/Admin/OrderModal.vue';
import delOrderModal from '@/components/Admin/DelOrderModal.vue';

export default {
  components: {
    orderPagination,
    orderModal,
    delOrderModal,
  },
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)jhouToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      const url = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(url)
        .then(() => {
          this.getOrder();
        });
    },
    getOrder(page = 1) {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        });
    },
    orderModal(order) {
      this.tempOrder = { ...order };
      this.$refs.orderModal.openModal();
    },
    delOrderModal(order) {
      this.tempOrder = { ...order };
      this.$refs.delOrderModal.openModal();
    },
  },
  mounted() {
    this.checkLogin();
    this.getOrder();
  },
};
</script>
