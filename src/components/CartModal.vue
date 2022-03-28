<template>
  <div class="container">
    <button class="btn btn-secondary ms-2"
    type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight">加入購物車</button>

    <div class="offcanvas offcanvas-end"
    tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button"
        class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        ...
      </div>
    </div>
  </div>
</template>
