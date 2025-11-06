<template>
  <v-navigation-drawer app permanent class="sidebar-clean">
    <v-list nav density="compact">
      <template v-for="(section, sIndex) in sidebarSections" :key="section.title">
        <v-list-item class="section-header" @click="handleSectionClick(sIndex, section)">
          <template #prepend>
            <div class="icon-circle" :class="{ 'icon-active': activeSection === sIndex }">
              <v-icon size="22">{{ section.icon }}</v-icon>
            </div>
            <v-list-item-title class="section-title" :class="{ 'section-active': activeSection === sIndex }">
              {{ section.title }}
            </v-list-item-title>
          </template>
        </v-list-item>

        <v-expand-transition>
          <div v-show="openSections.includes(sIndex) && section.items?.length">
            <v-list-item class="subsection-header" v-for="(item, iIndex) in section.items" :key="item.title" link
              @click.stop="setActive(sIndex, iIndex)"
              :class="{ 'selected-subitem': activeSection === sIndex && activeItem === iIndex }">
              <v-list-item-content class="subitem">
                <div class="divider"></div>
                <v-list-item-title class="subitem-title">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-expand-transition>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DefineComponent } from "vue";

import VamosComecar from "../docs/DocVamosComecar.vue";
import Configuracoes from "../docs/DocConfiguracoes.vue";
import Temas from "../docs/DocTema.vue";
import PoliticaPrivacidade from "../docs/DocPoliticaPrivacidade.vue";
import TemaVendas from "../docs/DocTemaVendas.vue";
import TemaFinanceiro from "../docs/DocTemaFinanceiro.vue";
import TemaEstoque from "../docs/DocTemaEstoque.vue";
import TemaProducao from "../docs/DocTemaProducao.vue";

interface SidebarItem {
  title: string;
  component: DefineComponent<{}, {}, any>;
}

interface SidebarSection {
  title: string;
  icon: string;
  component?: DefineComponent<{}, {}, any>;
  items?: SidebarItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Vamos Começar?',
    icon: 'mdi-arrow-right-circle-outline',
    component: VamosComecar
  },
  {
    title: "Configurações",
    icon: "mdi-cog-outline",
    component: Configuracoes
  },
  {
    title: "Temas Disponíveis",
    icon: "mdi-palette-outline",
    items: [
      { title: "Visão Geral", component: Temas },
      { title: "Tema Vendas", component: TemaVendas },
      { title: "Tema Financeiro", component: TemaFinanceiro },
      { title: "Tema Estoque", component: TemaEstoque },
      { title: "Tema Produção", component: TemaProducao }
    ]
  },
  {
    title: 'Política de Privacidade',
    icon: 'mdi-lock-outline',
    component: PoliticaPrivacidade
  }
];

const emit = defineEmits<{
  (e: "item-selected", component: DefineComponent<{}, {}, any>): void;
}>();

const openSections = ref<number[]>([]);
const activeSection = ref<number | null>(null);
const activeItem = ref<number | null>(null);

function handleSectionClick(sectionIndex: number, section: SidebarSection) {
  if (section.items && section.items.length > 0) {
    toggleSection(sectionIndex);
  } else if (section.component) {
    activeSection.value = sectionIndex;
    activeItem.value = null;
    emit("item-selected", section.component);
  }
}

function toggleSection(sectionIndex: number) {
  if (openSections.value.includes(sectionIndex)) {
    openSections.value = openSections.value.filter((i) => i !== sectionIndex);
  } else {
    openSections.value.push(sectionIndex);
  }
}

function setActive(sectionIndex: number, itemIndex: number) {
  activeSection.value = sectionIndex;
  activeItem.value = itemIndex;
  const item = sidebarSections[sectionIndex]?.items?.[itemIndex];
  if (item?.component) {
    emit("item-selected", item.component);
  }
}
</script>


<style scoped>
.v-list-item {
  --v-theme-overlay-multiplier: 0 !important;
}

.v-list {
  padding: 15px;
}

.sidebar-clean {
  border-right: 1px solid var(--color-background-site);
  width: 300px !important;
}

.section-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 0;
  color: var(--color-text);
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vt-c-red-background);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.icon-active {
  background-color: var(--vt-c-red);
}

.v-icon {
  color: var(--vt-c-red);
}

.icon-active .v-icon {
  color: var(--color-background-soft);
}

.section-title {
  font-size: 18px !important;
  padding: 3px;
  font-weight: 400 !important;
}

.section-active {
  color: var(--vt-c-red);
}

.subitem {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
}

.subsection-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 0 0 40px;
  margin: 0 !important;
}

.divider {
  width: 3px;
  height: 40px;
  background-color: var(--vt-c-red-background);
}

.subitem-title {
  font-size: 16px !important;
  font-weight: 400 !important;
}

.selected-subitem .subitem-title {
  color: var(--vt-c-red) !important;
}

.selected-subitem .divider {
  background-color: var(--vt-c-red);
}
</style>
