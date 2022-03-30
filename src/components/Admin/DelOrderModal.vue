<template>
  <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1"
  aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button type="button"
          class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
          是否刪除
          <strong class="text-danger"></strong> 訂單(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['tempOrder'],
  data() {
    return {
      order: {
        products: {},
        user: {},
      },
      bsModal: {},
    };
  },
  methods: {
    openModal() {
      this.bsModal.show();
    },
    watch: {
      tempOrder() {
        this.order = this.tempOrder;
      },
    },
    delOrder() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;

      this.$http.delete(apiUrl)
        .then(() => {
          this.$emit('del-order');
          this.bsModal.hide();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.bsModal = new Modal(this.$refs.delOrderModal);
  },
};
</script>
