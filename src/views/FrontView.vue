<template>
  <div class="wrapper">
    <FrontNav></FrontNav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import FrontNav from '@/components/Front/FrontNav.vue';
import Footer from '@/components/Front/FooterView.vue';

export default {
  components: {
    FrontNav,
    Footer,
  },
};
</script>
