<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
              商品列表
            </a>
            <a href="#" class="list-group-item list-group-item-action">狗狗</a>
            <a href="#" class="list-group-item list-group-item-action">貓咪</a>
            <a href="#" class="list-group-item list-group-item-action">零食</a>
            <a class="list-group-item list-group-item-action">用品</a>
          </div>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="card border rounded rounded-3 mb-3 border-primary">
                <div class="h-238"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description}}</p>
                  <button type="button" class="btn btn-outline-primary text-dark">詳細資訊</button>
                  <button type="button" class="btn btn-secondary ms-2">加入購物車</button>
                </div>
              </div>
            </div>
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
