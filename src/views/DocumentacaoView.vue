<template>
  <ToolbarDocumentation :drawer="drawer" :isDesktop="isDesktop" @toggle-drawer="toggleDrawer" />
  <SideBarDocumentation
    :toolbarHeight="isMobile ? 45 : 64"
    v-if="isDesktop || drawer"
    v-model="drawer"
    :isDesktop="isDesktop"
    :activeSectionKey="currentSectionKey"
    :activeItemKey="currentItemKey"
    @navigate="handleItemSelected"
  />
  <div class="LStyleAreaConteudo">
    <v-container class="LStyleConteudo" fluid>
      <component :is="currentComponent" @navigate="handleNavigate" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { ref, computed, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import { sidebarSections } from '@/components/navigation/sidebar/sidebar.data';

import ToolbarDocumentation from '@/components/navigation/ToolbarDocumentation.vue';
import SideBarDocumentation from '@/components/navigation/sidebar/SideBarDocumentation.vue';

type SidebarExposed = {
  navigateTo: (section: string, item?: string) => void;
};

// Estado
const drawer = ref(true);
const windowWidth = ref(window.innerWidth);
const currentSectionKey = ref<string | undefined>(undefined);
const currentItemKey = ref<string | undefined>(undefined);
const currentComponent = shallowRef<Component | null>(null);

// Computados
const isDesktop = computed(() => windowWidth.value >= 1000);
const isMobile = computed(() => windowWidth.value < 600);

// Métodos
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const handleItemSelected = ({ section, item }: { section: string; item?: string }) => {
  currentSectionKey.value = section;
  currentItemKey.value = item ?? undefined;

  const sectionData = sidebarSections.find((s) => s.key === section);
  if (!sectionData) return;

  if (item && sectionData.items) {
    const itemData = sectionData.items.find((i) => i.key === item);
    if (itemData?.component) {
      currentComponent.value = itemData.component;
      return;
    }
  }

  if (sectionData.component) {
    currentComponent.value = sectionData.component;
  }
};

const handleNavigate = ({ section, item }: { section: string; item?: string }) => {
  handleItemSelected({ section, item });
};

const handleResize = () => {
  const width = window.innerWidth;
  windowWidth.value = width;

  if (width >= 1000 && !drawer.value) drawer.value = true;
  if (width < 1000 && drawer.value) drawer.value = false;
};

// Lifecycle
onMounted(() => {
  const defaultSection =
    sidebarSections.find((section) => section.default && section.component) ??
    sidebarSections.find((section) => section.component);

  if (defaultSection?.component) {
    currentComponent.value = defaultSection.component;
    currentSectionKey.value = defaultSection.key;
    currentItemKey.value = undefined;
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
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
  .LStyleAreaConteudo {
    margin-top: 45px;
  }
  .LStyleConteudo {
    margin-bottom: 0px;
  }
}
</style>
