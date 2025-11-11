<template>
  <a href="https://homepage.teksystem.com.br/" target="_blank" class="logo-link">
    <img src="/logos/logo-completa.png" alt="Tek-System Logo" class="logo-img" />
  </a>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.logo-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-width: 150px;
  padding: 0;
}

.logo-img {
  max-height: 42px;
  width: auto;
  display: block;
}

@media (max-width: 400px) {
  .logo-link { min-width: 95px; }
  .logo-img { max-height: 30px;  }
}
</style>
