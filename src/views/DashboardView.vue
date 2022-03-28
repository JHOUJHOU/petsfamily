<template>
  <AdminNav></AdminNav>
  <router-view/>
  <AdminFooter></AdminFooter>
</template>

<script>
import AdminNav from '@/components/Admin/AdminNav.vue';
import AdminFooter from '@/components/Admin/AdminFooter.vue';

export default {
  components: {
    AdminNav,
    AdminFooter,
  },
  data() {
    return {

    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)jhouToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = token;
      const url = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(url)
        .then(() => {
          this.getProduct();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
