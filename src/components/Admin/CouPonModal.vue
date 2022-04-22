<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <div id="couponModal" ref="couponModal"
    class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
    aria-hidden="true">
      <div class="modal-dialog modal-md">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="couponModalLabel" class="modal-title">
              <span>優惠卷</span>
              </h5>
              <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <div class="mb-3">
                    <label for="title" class="form-label">優惠卷項目</label>
                      <input id="title" type="text"
                        class="form-control" placeholder="請輸入優惠卷項目"
                        v-model="coupon.title">
                  </div>
                  <div class="mb-3">
                    <label for="due_date" class="form-label">折扣期限</label>
                      <input id="due_date" type="text"
                        class="form-control" placeholder="請輸入折扣期限"
                        v-model="due_date">
                  </div>
                  <div class="mb-3">
                    <label for="percent" class="form-label">折扣百分比</label>
                      <input id="percent" type="text"
                        class="form-control" placeholder="請輸入折扣百分比"
                        v-model.number="coupon.percent">
                  </div>
                  <div class="mb-3">
                    <label for="code" class="form-label">優惠卷折扣碼</label>
                      <input id="code" type="text"
                        class="form-control" placeholder="請輸入優惠卷折扣碼"
                        v-model="coupon.code">
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <label class="form-check-label"
                      for="is_enabled">
                      是否啟用</label>
                      <input id="is_enabled" class="form-check-input" type="checkbox"
                      :true-value="1" :false-value="0" v-model="coupon.is_enabled">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateCoupon">
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
  props: ['tempCoupon', 'isNew'],
  inject: ['emitter'],
  data() {
    return {
      coupon: {
        is_enabled: 0,
      },
      openBsModal: {},
      due_date: '',
      isLoading: false,
    };
  },
  watch: {
    tempCoupon() {
      this.coupon = this.tempCoupon;
      const dateAndTime = new Date(this.coupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.coupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  methods: {
    openModal() {
      this.openBsModal.show();
    },
    delModal() {
      this.openBsModal.show();
    },
    updateCoupon() {
      let apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let method = 'post';

      if (!this.isNew) {
        apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.coupon.id}`;
        method = 'put';
      }
      this.isLoading = true;
      this.$http[method](apiUrl, { data: this.coupon })
        .then((res) => {
          console.log(res.data);
          this.$emit('get-coupon');
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          this.openBsModal.hide();
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '更新優惠卷成功',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '新增或編輯優惠卷失敗',
          });
        });
    },
  },
  mounted() {
    this.openBsModal = new Modal(this.$refs.couponModal);
  },
};
</script>
