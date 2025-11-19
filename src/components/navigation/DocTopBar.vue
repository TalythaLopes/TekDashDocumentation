<template>
  <v-app-bar class="top-bar">
    <div class="top-left">
      <v-btn icon class="menu-toggle" @click="$emit('toggle-drawer')" v-show="!isDesktop">
        <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
    </div>

    <div class="logo-area">
      <Logo />
      <div class="divider" />
      <a href="/">
        <h5 class="top-center pb-0">TekDashboard</h5>
      </a>
    </div>

    <div class="bar-center">
      <div class="search-box">
        <v-icon size="20" color="grey">mdi-magnify</v-icon>
        <input type="text" placeholder="Buscar" />
      </div>
    </div>

    <div class="bar-right">
      <div class="right-item">
        <v-icon size="24">mdi-dots-grid</v-icon>
        <span>Menu</span>
      </div>
      <div class="right-item">
        <v-icon size="24">mdi-arrow-top-right</v-icon>
        <span>Feedback</span>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import Logo from '@/components/common/LogoTekSystem.vue'

const props = defineProps<{
  drawer: boolean
  isDesktop: boolean
}>()
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 0 32px !important;
  gap: 24px;
}

.menu-toggle {
  background: none;
  box-shadow: none;
  border: none;
  margin-right: 8px;
}
.menu-toggle .v-icon { color: var(--color-principal); }

.logo-area {
  display: flex;
  align-items: center;
}

.divider {
  width: 1px;
  height: 42px;
  margin: 0 8px;
  background-color: var(--color-principal);
}

.top-center { color: var(--color-principal); }

.bar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 280px;
  padding: 8px 12px;
  border-radius: 20px;
  background: var(--color-background-site);
  border: 1px solid transparent;
  transition: all 0.4s;
}
.search-box input {
  width: 100%;
  font-size: 15px;
  border: none;
  outline: none;
  background: transparent;
}
.search-box:focus-within {
  background: var(--color-background);
  border: 1px solid var(--vt-c-gray-mute);
  width: 450px;
}

.bar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.right-item {
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

@media (max-width: 1000px) {
  .top-bar { padding: 0 32px 0 5px !important; }
  .search-box:focus-within { width: 300px; }
}

@media (max-width: 900px) {
  .bar-center, .bar-right { display: none; }
}
@media (max-width: 600px) {
  .top-bar {
    height: 45px;
    padding: 5px !important;
    gap: 10px;
    justify-content: center;
  }
  .menu-toggle { margin-right: 0px; }
  .divider { height: 34px; }
  :deep(.v-toolbar__content) { height: 35px !important; }
}
</style>
