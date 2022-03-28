<template>
  <footer class="bg-primary py-3">
    <div class="container-lg d-flex justify-content-center flex-column align-items-center">
      <div class="mb-3">
        <a href="/" class="link-dark" style="text-decoration:none"><dog-side-icon/>寵愛</a>
      </div>
      <div class="mb-3 d-flex">
        <div class="mx-3"><BIconGithub/></div>
        <div class="mx-3"><BIconFacebook/></div>
        <div class="mx-3"><BIconInstagram/></div>
      </div>
      <div class="mb-3">
        <router-link to="/login" class="link-dark bg-info
          rounded rounded-3 py-2 px-3"
          style="text-decoration:none"
          >管理者登入
        </router-link>
      </div>
      <div class="mb-3">
        本網站圖片與文案僅供個人作品使用，非商業用途
      </div>
      <div>
          © Copyright 2022 寵愛
      </div>
    </div>
  </footer>
</template>
