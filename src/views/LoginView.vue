<template>
  <div class="vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-center">管理端登入</h1>
        <div class="col-lg-4 py-3 border rounded rounded-5">
          <Form v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">帳號</label>
              <Field
                id="username"
                name="帳號"
                type="text"
                class="form-control"
                v-model="user.username"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入帳號"
                rules="email|required"
              >
              </Field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">密碼</label>
              <Field
                id="password"
                name="密碼"
                type="password"
                placeholder="請輸入密碼"
                rules="required"
                class="form-control"
                v-model="user.password"
                :class="{ 'is-invalid': errors['帳號或密碼錯誤'] }"
              >
              </Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <button class="btn btn-lg btn-primary w-100 mt-3 mb-3" type="button" @click="login">
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
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const apiUrl = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(apiUrl, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          console.log(res.data);
          document.cookie = `jhouToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
          alert('登入成功，轉換頁面中!');
        })
        .catch(() => {
          alert('登入失敗，請確認輸入帳號或密碼正確性!');
        });
    },
  },
  mounted() {

  },
};
</script>
