<template>
  <v-navigation-drawer
    v-model="internalDrawer"
    :permanent="isDesktop"
    class="LStyleSideBar"
    :style="{
      top: `${props.toolbarHeight}px`,
      height: `calc(100% - ${props.toolbarHeight}px)`,
    }"
  >
    <v-list nav density="compact">
      <SidebarSectionItem
        v-for="(section, index) in sidebarSections"
        :key="section.key"
        :title="section.title"
        :icon="section.icon"
        :items="section.items"
        :open="openSections.includes(index)"
        :active="props.activeSectionKey === section.key"
        :activeItemKey="props.activeItemKey"
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
import { ref, watch, onMounted } from 'vue';
import type { SidebarSection as SidebarSectionType } from './sidebar.data';
// Props e Emits
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  isDesktop: { type: Boolean, required: true },
  toolbarHeight: { type: Number, required: true },
  activeSectionKey: { type: String, default: null },
  activeItemKey: { type: String, default: null },
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'update:activeSectionKey', value: string | null): void;
  (e: 'update:activeItemKey', value: string | null): void;
  (e: 'navigate', payload: { section: string; item?: string }): void;
}>();
// Estados iniciais e referências aos elementos do DOM
const internalDrawer = ref(props.modelValue);
const openSections = ref<number[]>([]);
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
  emit('update:activeSectionKey', section.key);
  if (section.items && itemKey) {
    if (!section) return;
    const item = section.items.find((i) => i.key === itemKey);
    if (item) {
      emit('update:activeItemKey', itemKey);
      const index = sidebarSections.indexOf(section);
      openSections.value = [...new Set([...openSections.value, index])];
      emit('navigate', { section: section.key, item: itemKey });
      return;
    }
  }
  if (section.component) {
    emit('update:activeItemKey', null);
    emit('navigate', { section: section.key });
  }
};
defineExpose({
  navigateTo,
});
const selectSection = (section: SidebarSectionType) => {
  emit('update:activeSectionKey', section.key);
  emit('update:activeItemKey', null);
  if (section.component) {
    emit('navigate', { section: section.key });
  }
};

const selectItem = (sectionKey: string, itemKey: string) => {
  emit('update:activeSectionKey', sectionKey);
  emit('update:activeItemKey', itemKey);

  emit('navigate', { section: sectionKey, item: itemKey });
};
</script>

<style scoped>
.LStyleSideBar {
  width: 300px !important;
  border-right: 1px solid var(--color-background-site);
  transition: transform 0.3s ease;
}
</style>
