import { createApp } from 'vue';
// vee-validation
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// vee-axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// vue-material-design-icons
import DogSideIcon from 'vue-material-design-icons/DogSide.vue';
import SearchWebIcon from 'vue-material-design-icons/SearchWeb.vue';
import 'vue-material-design-icons/styles.css';

// bootstrap-icons-vue
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import toThousands from './assets/js/toThousands';

import App from './LayoutView.vue';
import router from './router';

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// vee-validation rules 啟用 locale
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);

AOS.init({
  disable: false,
  offset: 120,
  startEvent: 'DOMContentLoaded',
  duration: 800,
  once: true,
});

app.config.globalProperties.$filters = {
  toThousands,
};

// vee-validation component
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
// vee-axios component
app.use(VueAxios, axios);

// vue-material-design-icons component
app.component('dog-side-icon', DogSideIcon);
app.component('search-icon', SearchWebIcon);

// bootstrap-icons-vue component
app.use(BootstrapIconsPlugin);

// vue-loading-overlay
app.component('Loading', Loading);

app.use(router);
app.mount('#app');
