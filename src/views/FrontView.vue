<template>
  <FrontNav></FrontNav>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import FrontNav from '@/components/FrontNav.vue';
import Footer from '@/components/FooterView.vue';

export default {
  components: {
    FrontNav,
    Footer,
  },
};
</script>
