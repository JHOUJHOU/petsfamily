<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div class="row">
      <div class="col-6">
        <div class="rounded rounded-3 img-fluid" style="height: 500px;
          background-position: center center; background-size: cover;"
          :style="{
            backgroundImage: `url(${product.imageUrl})`
          }"
        >
        </div>
      </div>
      <div class="col-6">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ product.title }}</h5>
            <span><BIconHeart/></span>
          </div>
          <p class="card-text">{{ product.description}}</p>
          <p class="card-text">{{ product.content}}</p>
          <div class="d-flex justify-content-end mb-2">
            <p class="card-text d-flex justify-content-end"
              v-if="product.price === product.origin_price">
              NT{{ product.price }}
            </p>
            <div v-else>
              <del class="fs-6 text-success text-opacity-50">
                NT{{ product.origin_price }}</del>
                <span>NT{{ product.price }}</span>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <router-link to="/cart"
              class="btn btn-secondary ms-2"
            >加入購物車</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      id: '',
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
