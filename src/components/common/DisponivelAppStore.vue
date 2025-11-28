<template>
  <a href="https://apps.apple.com/app/6749776923" target="_blank" class="LStyleAppleLink">
    <img src="../../../img/DisponivelAppStore.png" alt="Disponível para IPhone na App Store" class="LStyleAppleImg" />
  </a>
</template>

<script lang="ts" setup></script>

<style scoped>
.LStyleAppleLink {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0;
}

.LStyleAppleImg {
  max-height: 48px;
  width: auto;
  display: block;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
}

@media (max-width: 600px) {
  .LStyleAppleLink {
    min-width: 95px;
  }

  .LStyleAppleImg {
    max-height: 45px;
  }
}
</style>
