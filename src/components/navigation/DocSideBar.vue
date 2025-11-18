<template>
  <v-navigation-drawer v-if="isDesktop || modelValue" v-model="internalDrawer" app :permanent="isDesktop" temporary
    class="sidebar" :style="drawerStyle">
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
          <div v-show="isSectionOpen(sIndex) && section.items?.length">
            <v-list-item v-for="(item, iIndex) in section.items" :key="item.title" link class="subsection-header"
              @click.stop="setActive(sIndex, iIndex)"
              :class="{ 'selected-subitem': activeSection === sIndex && activeItem === iIndex }">
              <v-list-item-content class="subitem">
                <div class="divider"></div>
                <v-list-item-title class="subitem-title">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-expand-transition>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue"
import type { DefineComponent } from "vue"
// Conteúdos
import VamosComecar from "../docs/DocVamosComecar.vue"
import Configuracoes from "../docs/DocConfiguracoes.vue"
import Temas from "../docs/DocTema.vue"
import PoliticaPrivacidade from "../docs/DocPoliticaPrivacidade.vue"
import TemaVendas from "../docs/DocTemaVendas.vue"
import TemaFinanceiro from "../docs/DocTemaFinanceiro.vue"
import TemaEstoque from "../docs/DocTemaEstoque.vue"
import TemaProducao from "../docs/DocTemaProducao.vue"
// Tipagens
interface SidebarItem {
  title: string
  component: DefineComponent<{}, {}, any>
}

interface SidebarSection {
  title: string
  icon: string
  component?: DefineComponent<{}, {}, any>
  items?: SidebarItem[]
}
// Dados da sidebar
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
// Props e Emits
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
  (e: "item-selected", component: DefineComponent<{}, {}, any>): void
}>()
// Estados iniciais e referências aos elementos do DOM
const internalDrawer = ref(props.modelValue)
const windowWidth = ref(window.innerWidth)

const openSections = ref<number[]>([])
const activeSection = ref<number | null>(null)
const activeItem = ref<number | null>(null)
// Computados
const isDesktop = computed(() => windowWidth.value >= 1000)
const isMobile = computed(() => windowWidth.value < 400)
const drawerStyle = computed(() => ({
  top: isMobile.value ? '45px' : '64px',
  height: isMobile.value ? 'calc(100% - 45px)' : 'calc(100% - 64px)'
}))
// Watchers 
watch(() => props.modelValue, v => (internalDrawer.value = v))
watch(internalDrawer, v => emit('update:modelValue', v))
watch(() => activeSection.value, (newValue) => {
  if (newValue !== null) {
    // Expande a seção selecionada automaticamente
    toggleSection(newValue);
  }
});
// Métodos
const toggleSection = (sectionIndex: number) => {
  if (openSections.value.includes(sectionIndex)) openSections.value = openSections.value.filter(i => i !== sectionIndex);
  else openSections.value.push(sectionIndex);
};
const isSectionOpen = (sectionIndex: number) => openSections.value.includes(sectionIndex);
const isItemActive = (sectionIndex: number, itemIndex: number) => activeSection.value === sectionIndex && activeItem.value === itemIndex;
const handleSectionClick = (sectionIndex: number, section: SidebarSection) => {
  if (section.items && section.items.length > 0) toggleSection(sectionIndex);
  else if (section.component) {
    activeSection.value = sectionIndex;
    activeItem.value = null;
    emit("item-selected", section.component);
  }
};
const setActive = (sectionIndex: number, itemIndex: number) => {
  activeSection.value = sectionIndex;
  activeItem.value = itemIndex;
  const item = sidebarSections[sectionIndex]?.items?.[itemIndex];
  if (item?.component) {
    emit("item-selected", item.component);
  }
};
// Ciclo de vida
const handleResize = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.v-list { padding: 15px; }

.sidebar {
  width: 280px !important;
  border-right: 1px solid var(--color-background-site);
  transition: transform 0.3s ease;
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
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: var(--color-principal-background);
}

.icon-active { background-color: var(--color-principal); }
.v-icon { color: var(--color-principal); }
.icon-active .v-icon { color: var(--color-background-soft); }

.section-title {
  font-size: 18px !important;
  padding: 3px;
  font-weight: 400 !important;
}

.section-active { color: var(--color-principal); }

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
  padding: 0 0 0 40px; /* Garante ausência de espaço entre os dividers */
  margin: 0 !important;
}

.divider {
  width: 3px;
  height: 40px;
  background-color: var(--color-principal-background);
}

.subitem-title {
  font-size: 16px !important;
  font-weight: 400 !important;
}

.selected-subitem .subitem-title { color: var(--color-principal) !important; }
.selected-subitem .divider { background-color: var(--color-principal); }
</style>
