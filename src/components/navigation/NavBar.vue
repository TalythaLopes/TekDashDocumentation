<template>
  <nav class="navbar-container">
    <Logo />
    <button class="navbar-toggle" @click="toggleMenu">
      <v-icon :style="{ color: 'var(--color-text)', fontSize: '25px' }">
        {{ mobileMenuOpen ? 'mdi-window-close' : 'mdi-menu' }}
      </v-icon>
    </button>
    <div class="navbar-content" :class="{ 'open': mobileMenuOpen }">
      <NavCenter />
      <FalarComComercial class="btn-mobile-hide" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Logo from '../common/Logo.vue';
import NavCenter from './NavCenter.vue';
import FalarComComercial from '../common/FalarComComercial.vue';
// Estados inciais
const mobileMenuOpen = ref(false)
// Métodos
const toggleMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 62px;
  padding: 5px;
  background-color: var(--color-background-site);
  z-index: 1000;
}

.navbar-toggle {
  display: none;
  background: var(--vt-c-gray-divider);
  width: 33px;
  height: 33px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.navbar-content {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .navbar-container{ padding: 5px 24px; }

  .navbar-content {
    flex-direction: column;
    position: absolute;
    top: 42px;
    width: 95%;
    padding: 5px 0;
    overflow: hidden;

    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
    z-index: 0;

    background-color: var(--color-background-site);
    transition: transform 0.4s ease, opacity 0.4s ease, max-height 0.4s ease;
  }

  .navbar-content.open {
    opacity: 1;
    transform: translateY(0);
    max-height: 350px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    pointer-events: auto;
    z-index: 1000;
  }

  .btn-mobile-hide { display: none; }

  .navbar-toggle {
    display: block;
    margin-left: auto;
    margin-right: 14px;
  }
}

@media (max-width: 600px) {
  .navbar-container {
    height: 45px;
    padding: 5px
  }
  .navbar-toggle { margin-right: 0; }
}
</style>