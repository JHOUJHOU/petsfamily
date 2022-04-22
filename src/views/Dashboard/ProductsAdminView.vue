<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div class="text-end mb-4">
      <button class="btn btn-secondary" type="button"
        @click.prevent="openModal('isNew')">
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
              @click.prevent="openModal('edit',item)">
                編輯
              </button>
              <button type="button" class="btn btn-danger btn-sm"
              @click.prevent="openModal('delete',item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @change-page="getProducts"></pagination>
  </div>
  <product-modal
    :temp-product="tempProduct"
    :is-new="isNew"
    @get-products="getProducts"
    ref="productModal"
  ></product-modal>
  <del-product-modal
    :temp-product="tempProduct"
    @get-products="getProducts"
    ref="delProductModal"
  ></del-product-modal>
</template>

<script>
import productModal from '@/components/Admin/ProductModal.vue';
import delProductModal from '@/components/Admin/DelModal.vue';
import pagination from '@/components/Pagination.vue';

export default {
  components: {
    productModal,
    delProductModal,
    pagination,
  },
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      pagination: {},
    };
  },
  methods: {
    getProducts(page) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        });
    },
    openModal(status, product) {
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.$refs.productModal.openModal();
        this.isNew = true;
      } else if (status === 'edit') {
        this.tempProduct = { ...product };
        this.$refs.productModal.openModal();
        this.isNew = false;
      } else if (status === 'delete') {
        this.tempProduct = { ...product };
        this.$refs.delProductModal.openModal();
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
