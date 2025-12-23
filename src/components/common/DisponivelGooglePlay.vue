<template>
  <a href="https://play.google.com/store/apps/details?id=br.com.teksystem.tekdashboard.twa" target="_blank" class="LStyleGoogleLink">
    <img src="../../../img/DisponivelGooglePlay.png" alt="Disponível para Android no Google Play" class="LStyleGoogleImg" />
  </a>
</template>

<script lang="ts" setup></script>

<style scoped>
.LStyleGoogleLink {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0;
}

.LStyleGoogleImg {
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
  .LStyleGoogleLink {
    min-width: 95px;
  }

  .LStyleGoogleImg {
    max-height: 45px;
  }
}
</style>
