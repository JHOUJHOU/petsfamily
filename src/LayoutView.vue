<template>
  <router-view/>
  <ToastMessage/>
</template>

<script>
import emitter from '@/assets/js/emitter';
import ToastMessage from '@/components/ToastsView.vue';

export default {
  components: {
    ToastMessage,
  },
  provide() {
    return {
      emitter, // 提供其他地方使用
    };
  },
};

</script>
<style lang="scss">
@import '@/assets/style/all.scss';
@import 'bootstrap/scss/bootstrap';
</style>
