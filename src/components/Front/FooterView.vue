<template>
  <footer class="footer bg-primary py-6">
    <div class="container">
      <div class="d-flex justify-content-center flex-column align-items-center">
        <div class="mb-2">
          本網站圖片與文案僅供個人作品使用，非商業用途
        </div>
        <div class="mb-2">
          寵愛© 2022 COPYRIGHT
        </div>
        <div class="list-unstyled mb-3 d-flex align-items-center">
          <div class="mx-3"><BIconGithub/></div>
          <div class="mx-3"><BIconFacebook/></div>
          <div class="mx-3"><BIconInstagram/></div>
          <router-link to="/login" class="link-dark bg-info
            rounded rounded-3 py-2 px-3"
            style="text-decoration:none"
            >管理者登入
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
