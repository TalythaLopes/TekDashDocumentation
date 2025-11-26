<template>
  <div class="LStyleLogoArea">
    <a href="https://homepage.teksystem.com.br/" target="_blank" class="LStyleLogoLink">
      <img src="/logos/LogoTekSystem.png" alt="Tek-System Logo" class="LStyleLogoImg" />
    </a>
    <div class="LStyleLogoDivider" />
    <a href="/">
      <h5 class="LStyleLogoText">TekDashboard</h5>
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.LStyleLogoArea {
  display: flex;
  align-items: center;
}

.LStyleLogoLink {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0;
}

.LStyleLogoImg {
  max-height: 42px;
  width: auto;
  display: block;
}

.LStyleLogoDivider {
  width: 2px;
  height: 42px;
  margin: 0 8px;
  background-color: var(--color-principal);
}

.LStyleLogoText {
  color: var(--color-principal);
  padding-bottom: 0px;
}

@media (max-width: 600px) {
  .LStyleLogoLink { min-width: 95px; }
  .LStyleLogoImg  { max-height: 30px; }
  .LStyleLogoDivider { height: 34px; margin: 0 5px; }
}
</style>