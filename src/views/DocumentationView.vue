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

import HelpCenter from "@/components/HelpCenter.vue";
import SideBar from "@/components/SideBar.vue";

import VamosComecar from '../components/DocVamosComecar.vue'
import Configuracoes from '../components/DocConfiguracoes.vue'
import Temas from '../components/DocTema.vue'
import PoliticaPrivacidade from '../components/DocPoliticaPrivacidade.vue'

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