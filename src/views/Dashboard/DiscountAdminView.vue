<template>
  <div class="container mt-9 mb-lg-8 mb-6">
    <div class="text-end mb-4">
      <button class="btn btn-secondary" type="button"
        @click.prevent="openModal('isNew')">
          建立新的優惠卷
      </button>
    </div>
    <table class="table table-striped table-hover align-middle">
      <thead>
        <tr class="text-center">
          <th scope="col">優惠卷項目</th>
          <th scope="col">折扣期限</th>
          <th scope="col">折扣百分比</th>
          <th scope="col">優惠卷折扣碼</th>
          <th scope="col">是否啟用</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">
            {{ new Date(item.due_date * 1000).toLocaleDateString().split('T')[0] }}
          </td>
          <td class="text-center">{{ item.percent }}%</td>
          <td class="text-center">{{ item.code }}</td>
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
    <pagination :pages="pagination" @change-page="getToCoupon"></pagination>
  </div>
  <coupon-modal
    :temp-coupon="tempCoupon"
    :is-new="isNew"
    @get-coupon="getToCoupon"
    ref="couponModal"
  ></coupon-modal>
  <del-coupon-modal
    :temp-coupon="tempCoupon"
    @get-coupon="getToCoupon"
    ref="delCouponModal"
  ></del-coupon-modal>
</template>

<script>
import pagination from '@/components/Pagination.vue';
import couponModal from '@/components/Admin/CouPonModal.vue';
import delCouponModal from '@/components/Admin/DelCoupon.vue';

export default {
  components: {
    couponModal,
    delCouponModal,
    pagination,
  },
  data() {
    return {
      coupons: {},
      isNew: false,
      tempCoupon: {
        is_enabled: 0,
        due_date: '',
      },
      pagination: {},
    };
  },
  methods: {
    getToCoupon(page = 1) {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        });
    },
    openModal(status, coupon) {
      if (status === 'isNew') {
        this.tempCoupon = { ...coupon };
        this.tempCoupon = {
          is_enabled: 0,
          due_date: '',
        };
        this.$refs.couponModal.openModal();
        this.isNew = true;
      } else if (status === 'edit') {
        this.tempCoupon = { ...coupon };
        this.$refs.couponModal.openModal();
        this.isNew = false;
      } else if (status === 'delete') {
        this.tempCoupon = { ...coupon };
        this.$refs.delCouponModal.openModal();
      }
    },
  },
  mounted() {
    this.getToCoupon();
  },
};
</script>
