/* tem que centralizar o content */

<template>
  <ToolbarDocumentation :drawer="drawer" :isDesktop="isDesktop" @toggle-drawer="toggleDrawer" />
  <SideBarDocumentation v-model="drawer" @item-selected="handleItemSelected" />
  <div class="LStyleAreaConteudo">
    <v-container class="LStyleConteudo" fluid>
      <component :is="activeComponent" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import ToolbarDocumentation from "@/components/navigation/ToolbarDocumentation.vue"
import SideBarDocumentation from "@/components/navigation/SideBarDocumentation.vue"
import DocVamosComecar from '@/components/docs/DocVamosComecar.vue'
// Estados iniciais e referências aos elementos do DOM
const drawer = ref(true)
const windowWidth = ref(window.innerWidth)
const activeComponent = ref<DefineComponent<{}, {}, any>>(DocVamosComecar)
// Computados
const isDesktop = computed(() => windowWidth.value >= 1000)
// Métodos
const toggleDrawer = () => drawer.value = !drawer.value
const handleResize = () => {
  windowWidth.value = window.innerWidth
  drawer.value = isDesktop.value // Mantém aberto no desktop (>=1000px)
}
const handleItemSelected = (component: DefineComponent<{}, {}, any>) => activeComponent.value = component
// Ciclo de vida
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.LStyleAreaConteudo {
  margin-left: 300px;
  margin-top: 64px;
  width: calc(100% - 300px);
  transition: margin-left 0.3s ease;
}

.LStyleConteudo {
  padding: 0 20px;
  max-width: 1300px;
  margin-bottom: 25vh;
}

@media (max-width: 1000px) {
  .LStyleAreaConteudo {
    margin-left: 0px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .LStyleAreaConteudo { margin-top: 45px; }
}
</style>