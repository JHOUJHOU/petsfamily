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
        <div class="d-flex justify-content-between align-items-center">
          <a href="`https://github.com/JHOUJHOU`" target="_blank" class="text-hidden github mx-2">github</a>
          <a href="`https://www.facebook.com/profile.php?id=100000339370233`" target="_blank" class="text-hidden meta mx-2">ig</a>
          <a href="`https://www.instagram.com/a01450887/`" target="_blank" class="text-hidden ig mx-2">ig</a>
          <a href="mailto:a01450887@gmail.com" target="_blank" class="text-hidden
            mail mx-2">mail</a>
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
