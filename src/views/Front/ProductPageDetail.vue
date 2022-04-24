<template>
  <p>123</p>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.product = res.data.product;
        });
    },
    mounted() {
      this.id = this.$route.params.id;
      this.getProduct();
    },
  },
};
</script>
