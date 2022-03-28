<template>
<!-- 商品列表 -->
  <div class="mt-9 mb-lg-8 mb-6">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="btn-group btn-group-vertical w-100"
          role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-secondary fw-bold">商品列表</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getProducts('狗')">狗狗</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getProducts('貓')">貓咪</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getProducts('小寵物')">小寵物</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getProducts('保健')">保健</button>
            <button type="button" class="btn btn-outline-primary text-dark fw-bold"
              @click="getProducts('拍攝')">拍攝</button>
          </div>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="card border rounded rounded-3 mb-3
                border-primary bg-success bg-opacity-25  position-relative">
                <div class="rounded rounded-3" style="height: 200px;
                  background-position: center center; background-size: cover;"
                  :style="{
                    backgroundImage: `url(${item.imageUrl})`
                  }"
                ></div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <span><BIconHeart/></span>
                  </div>
                  <p class="card-text">{{ item.description}}</p>
                  <div class="d-flex justify-content-end">
                    <p class="card-text d-flex justify-content-end"
                      v-if="item.price === item.origin_price">NT{{ item.price }}</p>
                    <div v-else>
                      <del class="fs-6 text-success text-opacity-50">
                        NT{{ item.origin_price }}</del>
                        <span>NT{{ item.price }}</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <router-link :to="`/product/${item.id}`"
                    class="btn btn-outline-primary text-dark"
                    >詳細資訊</router-link>
                    <button @click.prevent="addToCart"
                    class="btn btn-secondary ms-2"
                    >加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <pagination :pages="pagination" @get-pages="getPages"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/Paginate.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      id: '',
    };
  },
  methods: {
    getProducts(category) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`;
      if (category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?category=${category}`;
      }
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getPages(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: this.id,
        qty: 1,
      };
      this.$http.post(url, { data })
        .then((res) => {
          alert('加入購物車成功');
          console.log(res);
        })
        .catch((err) => {
          alert('加入購物車失敗');
          console.dir(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProducts();
  },
};
</script>
