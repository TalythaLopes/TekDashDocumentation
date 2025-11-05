<template>
  <v-app>
    <HelpCenter />
    <SideBar @item-selected="handleItemSelected" />
    <v-main :style="{ width: '100vw' }">
      <v-container class="texto-item">
        <component :is="activeComponent" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DefineComponent } from 'vue';

import HelpCenter from "@/components/navBars/HelpCenter.vue";
import SideBar from "@/components/navBars/SideBar.vue";

import VamosComecar from '@/components/docs/DocVamosComecar.vue'

const activeComponent = ref<DefineComponent<{}, {}, any>>(VamosComecar);

function handleItemSelected(component: DefineComponent<{}, {}, any>) {
  activeComponent.value = component;
}
</script>

<style scoped>
.v-container.texto-item {
  max-width: 1200px;
  padding: 20px;
  color: var(--color-text);
}
</style>