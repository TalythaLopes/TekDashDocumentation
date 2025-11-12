/*- sobre a responsividade: fiz o mínimo possível para funcionar - tem que completar
- tem que centralizar o content */

<template>
  <v-app>
    <TopBar :drawer="drawer" :isDesktop="isDesktop" @toggle-drawer="toggleDrawer" />
    <SideBar v-model="drawer" @item-selected="handleItemSelected" />
    <div class="content-area">
      <v-container class="content">
        <component :is="activeComponent" />
      </v-container>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { DefineComponent } from 'vue'

import TopBar from "@/components/navBars/DocTopBar.vue"
import SideBar from "@/components/navBars/DocSideBar.vue"

import VamosComecar from '@/components/docs/DocVamosComecar.vue'
// Estados iniciais e referências aos elementos do DOM
const activeComponent = ref<DefineComponent<{}, {}, any>>(VamosComecar)
const drawer = ref(true)
const windowWidth = ref(window.innerWidth)
// Computados
const isDesktop = computed(() => windowWidth.value >= 1000)
// Métodos
const handleItemSelected = (component: DefineComponent<{}, {}, any>) => activeComponent.value = component
const toggleDrawer = () => drawer.value = !drawer.value
const handleResize = () => {
  windowWidth.value = window.innerWidth
  drawer.value = isDesktop.value // Mantém aberto no desktop (>=1000px)
}
// Ciclo de vida
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.content-area {
  margin-left: 280px;
  margin-top: 64px;
  width: calc(100% - 280px);
  transition: margin-left 0.3s ease;
}

.content {
  padding: 0 20px;
  max-width: 1100px;
}

@media (max-width: 1000px) {
  .content-area {
    margin-left: 0px;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .content-area { margin-top: 45px; }
}
</style>