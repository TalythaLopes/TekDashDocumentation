<template>
  <nav class="navbar-container">
    <Logo />
    <button class="navbar-toggle" @click="toggleMenu">
      <v-icon color="#242424" style="font-size: 1.3rem;">
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
import Logo from '../buttom/Logo.vue';
import NavCenter from './NavCenter.vue';
import FalarComComercial from '../buttom/FalarComComercial.vue';

const mobileMenuOpen = ref(false)

function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1000;
  height: 62px;
  padding: 5px;
  position: relative;
  background-color: var(--color-background-site);
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar-content {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  .navbar-container{
    padding: 5px 24px;
  }

  .navbar-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 95%;
    padding: 5px 0;
    opacity: 0;
    transform: translateY(-20px);
    overflow: hidden;
    transition: transform 0.4s ease, opacity 0.4s ease, max-height 0.4s ease;
    background-color: var(--color-background-site);
  }

  .navbar-content.open {
    opacity: 1;
    transform: translateY(0);
    max-height: 350px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .btn-mobile-hide {
    display: none;
  }

  .navbar-toggle {
    display: block;
    margin-left: auto;
    margin-right: 14px;
  }
}
</style>