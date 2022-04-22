<template>
  <div id="orderModal" ref="orderModal" class="modal fade"     tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">訂單資訊</h5>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <p>用戶資訊</p>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th scope="col">姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="col">電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="col">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="col">地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-sm-8">
              <p>訂單商品資訊</p>
              <table class="table">
                <tbody v-if="order.user">
                  <tr>
                    <th scope="col">訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th scope="col">下單時間</th>
                    <td>{{ order.create_at }}</td>
                  </tr>
                  <tr>
                    <th scope="col">付款狀態</th>
                    <td>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        v-model="order.is_paid"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <span v-if="order.is_paid">已付款</span>
                        <span v-else>未付款</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col">總金額</th>
                    <td>{{ order.total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>訂單商品列表</p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">商品分類</th>
                    <th scope="col">商品名稱</th>
                    <th scope="col">數量/單位</th>
                    <th scope="col">售價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{ item.product.category }}</td>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.product.qty }}/{{ item.product.unit }}</td>
                    <td>{{ item.final_total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary"
            @click="updateOrder">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['tempOrder'],
  data() {
    return {
      order: {
        products: {},
        user: {},
      },
      bsModal: {},
    };
  },
  watch: {
    tempOrder() {
      this.order = this.tempOrder;
    },
  },
  methods: {
    openModal() {
      this.bsModal.show();
    },
    updateOrder() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;

      this.$http.put(apiUrl, { data: this.tempOrder })
        .then(() => {
          this.$emit('update-order');
          this.bsModal.hide();
        });
    },
  },
  mounted() {
    this.bsModal = new Modal(this.$refs.orderModal);
  },
};
</script>
