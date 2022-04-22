<template>
  <loading :active="isLoading" class="fs-1 text-secondary"><dog-side-icon/>
  <dog-side-icon/><dog-side-icon/></loading>
  <div class="vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-center">管理端登入</h1>
        <div class="col-lg-4 py-3 border rounded rounded-5">
          <Form v-slot="{ errors }" @submit="login">
            <div class="mb-3">
              <label for="email" class="form-label">帳號</label>
              <Field
                id="username"
                name="email"
                type="text"
                class="form-control"
                v-model="user.username"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入帳號"
                rules="email|required"
              >
              </Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">密碼</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="請輸入密碼"
                rules="required"
                class="form-control"
                v-model="user.password"
                :class="{ 'is-invalid': errors['帳號或密碼錯誤'] }"
              >
              </Field>
              <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
            </div>

            <button class="btn btn-lg btn-primary w-100 mt-3 mb-3" type="submit">
              登入
            </button>
          </Form>
          <a href="#" class="text-center">忘記密碼</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['emitter'],
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      const apiUrl = `${process.env.VUE_APP_API}/admin/signin`;
      this.isLoading = true;
      this.$http.post(apiUrl, this.user)
        .then((res) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
          const { token, expired } = res.data;
          document.cookie = `jhouToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'primary',
              title: '登入成功，轉換頁面中!',
            });
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '登入失敗，請確認輸入帳號或密碼正確性!',
          });
        });
    },
  },
  mounted() {

  },
};
</script>
