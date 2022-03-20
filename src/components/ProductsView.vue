<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // 取得遠端資源
    this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
      .then((res) => {
        console.log(res);
        this.products = res.data.products;
      })
      .catch((err) => {
        console.dir(err);
      });
  },
};
</script>
