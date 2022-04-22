<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
<!-- 商品列表 -->
  <div class="mt-9 mb-lg-8 mb-6">
    <div class="container">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item w-50" aria-current="page">
            <router-link to="/products" class="active">商品列表</router-link>
          </li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-sm-12 mb-3">
          <div class="btn-group btn-group-vertical w-100"
          role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-secondary fw-bold"
              @click="getCategory('')">全部</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getCategory('狗')">狗狗</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getCategory('貓')">貓咪</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getCategory('小寵物')">小寵物</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getCategory('保健')">保健</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getCategory('拍攝')">拍攝</button>
          </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12" data-aos="fade-up">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="item in products" :key="item.id">
              <router-link :to="`/product/${item.id}`" class="router-link-active text-dark">
                <div class="card border rounded rounded-3 mb-3
                border-primary bg-success bg-opacity-25  position-relative">
                <div class="rounded rounded-3 card-img" style="height: 200px;
                  background-position: center center; background-size: cover;"
                  :style="{
                    backgroundImage: `url(${item.imageUrl})`
                  }">
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <p class="card-title fs-5">{{ item.title }}</p>
                    </div>
                    <p class="card-text">{{ item.description}}</p>
                    <div class="d-flex justify-content-end">
                      <p class="card-text d-flex justify-content-end"
                        v-if="item.price === item.origin_price">
                        NT{{ $filters.toThousands(item.price) }}</p>
                      <div v-else>
                        <del class="fs-6 text-success text-opacity-50">
                          NT{{ $filters.toThousands(item.origin_price) }}</del>
                          <span>NT{{ $filters.toThousands(item.price) }}</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <router-link :to="`/product/${item.id}`"
                      class="btn btn-outline-primary text-dark"
                      >詳細資訊</router-link>
                      <button type="button" @click.prevent="addToCart(item.id)"
                      class="btn btn-secondary ms-2"
                      :disabled="isLoadingItem === item.id"
                      >
                      加入購物車</button>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <pagination data-aos="fade-up"
            :pages="pagination" @change-page="getProducts">
          </pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';
import emitter from '@/assets/js/emitter';

export default {
  inject: ['emitter'],
  components: {
    pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      qty: 1,
      cartData: {
        carts: [],
      },
      isLoadingItem: '',
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        });
    },
    getCategory(category, page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}&page=${page}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        });
    },
    getCart() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          this.cartData = res.data.data;
        });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http.post(url, { data })
        .then((res) => {
          this.isLoadingItem = '';
          emitter.emit('get-cart');
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
    this.getProducts();
  },
};
</script>
