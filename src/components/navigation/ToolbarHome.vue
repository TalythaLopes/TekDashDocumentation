<template>
  <v-app-bar class="LStyleTopBar">
    <div class="LStyleBarLeft">
      <LogoTekSystem />
    </div>
    <div class="LStyleBarRight">
      <a href="/documentacao" class="LStyleRightItem">
        <v-icon>mdi-text-box-outline</v-icon>
        <span>Começar com o TekDashboard</span>
      </a>
      <a target="_blank" href="https://tekdashboard.teksystem.com.br/" class="LStyleRightItem">
        <v-icon>mdi-account</v-icon>
        <span>Login</span>
      </a>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import LogoTekSystem from '../common/LogoTekSystem.vue';
</script>

<style scoped>
.LStyleTopBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 0 32px !important;
  gap: 24px;
}

:deep(.v-toolbar__content) { max-width: 1500px; }

.LStyleBarLeft {
  flex: 1;
  display: flex;
}

.LStyleBarRight {
  display: flex;
  align-items: center;
  gap: 16px;
}

.LStyleRightItem {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-principal);
  }
}

.LStyleRightItem .v-icon {
  font-size: 24px;
  position: relative;
  top: -2px;
}

@media (max-width: 900px) {
  .LStyleTopBar { padding: 0 15px !important; }
  .LStyleRightItem span { display: none; }
}

@media (max-width: 600px) {
  .LStyleTopBar {
    height: 45px;
    padding: 5px !important;
    gap: 10px;
    justify-content: center;
  }
  .LStyleBarRight { gap: 5px; }
  :deep(.v-toolbar__content) { height: 35px !important; }
}
</style>
