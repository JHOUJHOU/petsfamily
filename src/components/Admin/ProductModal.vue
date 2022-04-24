<template>
  <div id="productModal" ref="productModal"
    class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
    aria-hidden="true">
      <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
              <span>新增產品</span>
              </h5>
              <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <div class=" mb-3">
                      <label for="imageUrl" class="form-label">上傳主圖(擇一)</label>
                      <input type="file" class="form-control" id="imageUrl"
                      placeholder="請上傳主圖"
                      ref="clearImage"
                      @change="upload('mainImage', $event)">
                    </div>

                    <div class="mb-3">
                      <p>輸入主圖網址(擇一)</p>
                      <input type="text"
                        class="form-control"
                        id="imageUrl"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                        placeholder="輸入主圖網址(擇一)"
                        v-if="!product.imageUrl"
                        v-model="product.imageUrl">
                    </div>
                    <img class="img-fluid mb-3" :src="product.imageUrl" alt="">

                    <button type="button"
                    class="btn btn-secondary w-100"
                    @click="product.imageUrl = ''">
                      刪除主圖
                    </button>
                  </div>
                  <div class="mb-3">
                    <h3>增加其他商品圖片</h3>
                    <div v-if="Array.isArray(product.imagesUrl)">
                      <div v-for="(img , key) in product.imagesUrl"
                          :key="key + '123456'">
                          <div class=" mb-3">
                            <label for="imageUrl" class="form-label">上傳商品圖片(擇一)</label>
                            <input type="file" class="form-control" id="imageUrl"
                            placeholder="上傳商品圖片"
                            ref="clearImage"
                            @change="upload('subImage', $event)">
                          </div>

                          <div class="mb-3">
                            <p>輸入商品圖片網址(擇一)</p>
                            <input type="text"
                              class="form-control"
                              id="imageUrl"
                              aria-describedby="inputGroupFileAddon04"
                              placeholder="輸入商品圖片網址(擇一)"
                              aria-label="Upload"
                              v-model="product.imagesUrl[key]">
                          </div>
                          <img class="img-fluid mb-3"
                          :src="product.imagesUrl[key]" alt="">
                      </div>
                        <button v-if="!product.imagesUrl.length ||
                        product.imagesUrl[product.imagesUrl.length - 1]"
                        type="button" class="btn btn-primary w-100 mb-3"
                        @click="product.imagesUrl.push('')"
                        >增加圖片</button>
                        <button v-else type="button"
                        class="btn btn-danger w-100"
                        @click="product.imagesUrl.pop()">刪除最後一張圖片</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">商品名稱</label>
                    <input id="title" type="text"
                      class="form-control" placeholder="請輸入商品名稱"
                      v-model="product.title">
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">大分類</label>
                      <input id="category" type="text" class="form-control"
                      v-model="product.category"
                      placeholder="請輸入子分類">
                    </div>
                    <div class="mb-3 col-md-3">
                      <label for="subcategory" class="form-label">小分類</label>
                      <input id="subcategory" type="text" class="form-control"
                      placeholder="請輸入分類" v-model="product.subcategory">
                    </div>
                    <div class="mb-3 col-md-3">
                      <label for="price" class="form-label">單位</label>
                      <input id="unit" type="text"
                        class="form-control" placeholder="請輸入單位"
                        v-model="product.unit">
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price"
                          type="number" min="0"
                          class="form-control"
                          placeholder="請輸入原價" v-model="product.origin_price">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label" >售價</label>
                        <input id="price" type="number"
                          min="0" class="form-control"
                          placeholder="請輸入售價" v-model="product.price">
                    </div>
                  </div>
                    <hr>
                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text"
                      class="form-control"
                      placeholder="請輸入產品描述" v-model="product.description">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" type="text"
                      class="form-control"
                      placeholder="請輸入說明內容"
                      v-model="product.content">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <label class="form-check-label"
                      for="is_enabled">
                      是否啟用</label>
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                      :true-value="1" :false-value="0" v-model="product.is_enabled">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateProduct">
                確認送出
              </button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['tempProduct', 'isNew'],
  inject: ['emitter'],
  data() {
    return {
      product: {},
      openBsModal: {},
    };
  },
  watch: {
    tempProduct() {
      this.product = this.tempProduct;
    },
  },
  methods: {
    openModal() {
      this.openBsModal.show();
    },
    delModal() {
      this.openBsModal.show();
    },
    updateProduct() {
      let apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = 'post';

      if (!this.isNew) {
        apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = 'put';
      }
      this.$http[method](apiUrl, { data: this.tempProduct })
        .then((res) => {
          this.$emit('get-products');
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '新增或編輯產品成功',
            });
          }
          this.openBsModal.hide();
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '新增或編輯產品失敗',
          });
        });
    },
    upload(Image, e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(apiUrl, formData)
        .then((res) => {
          if (Image === 'mainImage') {
            this.product.imageUrl = res.data.imageUrl;
            this.$refs.clearImage.value = '';
          } else if (Image === 'subImage'
            && !Array.isArray(this.product.imageUrl)) {
            this.product.imagesUrl = [];
            this.product.imagesUrl.push(res.data.imageUrl);
            this.$refs.clearImage.value = '';
          }
          console.log(res.data.imagesUrl);
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '上傳主圖成功',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '新增或編輯產品失敗',
          });
        });
    },
  },
  mounted() {
    this.openBsModal = new Modal(this.$refs.productModal);
  },
};
</script>
