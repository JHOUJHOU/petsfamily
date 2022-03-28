<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div class="text-end mb-4">
      <button class="btn btn-secondary" type="button"
        data-bs-target="productModal" ref="productModal" @click="openModal()">
        建立新的商品
      </button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="text-center">
          <th scope="col">照片</th>
          <th scope="col">商品分類</th>
          <th scope="col">商品子分類</th>
          <th scope="col">商品名稱</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">單位</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯/刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div :style="
              { backgroundImage: `url(${item.imageUrl})`}"
              style="height: 100px; background-size: cover; background-position: center">
            </div>
          </td>
          <td class="text-center">{{ item.category }}</td>
          <td class="text-center">{{ item.subcategory }}</td>
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ item.origin_price }}</td>
          <td class="text-center">{{ item.price }}</td>
          <td class="text-center">{{ item.unit }}</td>
          <td class="text-center">
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button type="button" class="btn btn-primary btn-sm"
              data-bs-target="productModal">
                編輯
              </button>
              <button type="button" class="btn btn-danger btn-sm"
              data-bs-target="delProductModal">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="productModal"
      ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
      aria-hidden="true">
      <product-modal
      ></product-modal>
    </div>
  </div>
</template>

<script>
import ProductModal from '@/components/Admin/ProductModal.vue';

export default {
  components: {
    ProductModal,
  },
  data() {
    return {
      products: [],
      Modal: {},
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;

      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openModal() {
      this.$refs.ProductModal.openBsModal.show();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
