<template>
  <v-navigation-drawer v-model="internalDrawer" :permanent="isDesktop" temporary class="LStyleSideBar" :style="drawerStyle">
    <v-list nav density="compact">
      <SidebarSectionItem
        v-for="(section, index) in sidebarSections"
        :key="section.key"
        :title="section.title"
        :icon="section.icon"
        :items="section.items"
        :open="openSections.includes(index)"
        :active="activeSectionKey === section.key"
        :activeItemKey="activeItemKey"
        @toggle="toggleSection(index)"
        @select-section="selectSection(section)"
        @select-item="selectItem(section.key, $event)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { sidebarSections } from './sidebar.data';
import SidebarSectionItem from './SidebarSection.vue';
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import type { SidebarSection as SidebarSectionType } from './sidebar.data';
// Props e Emits
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  isDesktop: { type: Boolean, required: true },
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'item-selected', component: Component): void;
}>();
// Estados iniciais e referências aos elementos do DOM
const internalDrawer = ref(props.modelValue);
const windowWidth = ref(window.innerWidth);

const openSections = ref<number[]>([]);
const activeSectionKey = ref<string | null>(null);
const activeItemKey = ref<string | null>(null);
// Computados
const isDesktop = computed(() => windowWidth.value >= 1000);
const isMobile = computed(() => windowWidth.value < 600);
const drawerStyle = computed(() => ({
  top: isMobile.value ? '45px' : '64px',
  height: isMobile.value ? 'calc(100% - 45px)' : 'calc(100% - 64px)',
}));
// Watchers
watch(
  () => props.modelValue,
  (v) => (internalDrawer.value = v),
);
watch(internalDrawer, (v) => emit('update:modelValue', v));
// Métodos
const toggleSection = (sectionIndex: number) => {
  if (openSections.value.includes(sectionIndex)) openSections.value = openSections.value.filter((i) => i !== sectionIndex);
  else openSections.value.push(sectionIndex);
};
const navigateTo = (sectionKey: string, itemKey?: string) => {
  const section = sidebarSections.find((s: SidebarSectionType) => s.key === sectionKey);
  if (!section) return;
  activeSectionKey.value = sectionKey;
  if (section.items && itemKey) {
    const item = section.items.find((i) => i.key === itemKey);
    if (item) {
      activeItemKey.value = itemKey;
      const index = sidebarSections.indexOf(section);
      openSections.value = [...new Set([...openSections.value, index])];
      emit('item-selected', item.component);
      return;
    }
  }
  if (section.component) {
    activeItemKey.value = null;
    emit('item-selected', section.component);
  }
};
defineExpose({
  navigateTo,
});
const selectSection = (section: SidebarSectionType) => {
  activeSectionKey.value = section.key;
  activeItemKey.value = null;
  if (section.component) {
    emit('item-selected', section.component);
  }
};
const selectItem = (sectionKey: string, itemKey: string) => {
  activeSectionKey.value = sectionKey;
  activeItemKey.value = itemKey;
  const section = sidebarSections.find((s) => s.key === sectionKey);
  const item = section?.items?.find((i) => i.key === itemKey);
  if (item?.component) {
    emit('item-selected', item.component);
  }
};
// Ciclo de vida
const handleResize = () => (windowWidth.value = window.innerWidth);
onMounted(() => window.addEventListener('resize', handleResize));
onMounted(() => {
  const initial = sidebarSections.find((s) => s.default);
  if (initial?.component) {
    activeSectionKey.value = initial.key;
    emit('item-selected', initial.component);
  }
});
onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
</script>

<style scoped>
.v-list {
  padding: 10px;
}

.LStyleSideBar {
  width: 300px !important;
  border-right: 1px solid var(--color-background-site);
  transition: transform 0.3s ease;
}

.LStyleSideBar.mobile-mode {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2000;
  transform: translateX(-100%) !important;
  transition:
    transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.2s;
}

.LStyleSideBar.mobile-mode.is-open {
  transform: translateX(0) !important;
}
</style>
