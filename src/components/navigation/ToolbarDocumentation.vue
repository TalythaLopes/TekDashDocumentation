<template>
  <v-app-bar class="LStyleTopBar">
    <div>
      <v-btn icon class="LStyleSideMenu" @click="$emit('toggle-drawer')" v-show="!isDesktop">
        <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
    </div>
    <LogoTekSystem />
    <div class="LStyleBarCenter">
      <!-- 
        <div class="LStyleSearchBox">
          <v-icon size="20" color="grey">mdi-magnify</v-icon>
          <input type="text" placeholder="Buscar" />
        </div>
      -->
    </div>

    <div class="LStyleBarRight">
      <a class="LStyleRightItem" target="_blank"
        href="https://api.whatsapp.com/send?phone=5532999724221&text=Oi%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20TekDashboard."
      >
        <v-icon>mdi-whatsapp</v-icon>
        <span>Comercial</span>
      </a>
      <a class="LStyleRightItem" target="_blank" href="https://www.atendimento.teksystem.com.br/">
        <v-icon>mdi-face-agent</v-icon>
        <span>Suporte</span>
      </a>
      <a class="LStyleRightItem" target="_blank" href="https://tekdashboard.teksystem.com.br/">
        <v-icon>mdi-account</v-icon>
        <span>Login</span>
      </a>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import LogoTekSystem from '@/components/common/LogoTekSystem.vue'

const props = defineProps<{
  drawer: boolean
  isDesktop: boolean
}>()
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

.LStyleSideMenu {
  background: none;
  box-shadow: none;
  border: none;
  margin-right: 8px;
}
.LStyleSideMenu .v-icon { color: var(--color-principal); }

.LStyleBarCenter {
  flex: 1;
  display: flex;
  justify-content: center;
}

.LStyleSearchBox {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 280px;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid transparent;
  transition: all 0.4s;
  background: var(--color-background-site);
}
.LStyleSearchBox input {
  width: 100%;
  font-size: 15px;
  border: none;
  outline: none;
  background: transparent;
}
.LStyleSearchBox:focus-within {
  background: var(--color-background);
  border: 1px solid var(--vt-c-gray-mute);
  width: 450px;
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
  color: var(--vt-c-gray);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--color-principal);
  }
}

.LStyleRightItem .v-icon {
  font-size: 24px;
}

@media (max-width: 1150px) {
  .LStyleSearchBox:focus-within {
    width: 300px;
  }
}

@media (max-width: 1000px) {
  .LStyleTopBar { padding: 0 15px !important; }
  .LStyleRightItem span { display: none; }
}

@media (max-width: 900px) {
  .LStyleBarCenter { display: none; }
  .LStyleBarRight  { margin-left: auto; }
}

@media (max-width: 600px) {
  .LStyleTopBar {
    height: 45px;
    padding: 5px !important;
    gap: 10px;
    justify-content: center;
  }
  .LStyleSideMenu { margin-right: 0px; }
  .LStyleBarRight { gap: 5px; }
  :deep(.v-toolbar__content) { height: 35px !important; }
}
</style>