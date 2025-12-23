<template>
  <v-list-item class="LStyleSectionHeader" @click="onHeaderClick">
    <div class="LStyleRow">
      <div class="LStyleLeft">
        <div class="LStyleIconCircle" :class="{ LStyleIconActive: active }">
          <v-icon class="LStyleIcon" size="22">{{ icon }}</v-icon>
        </div>

        <v-list-item-title class="LStyleSectionTitle" :class="{ LStyleSectionActive: active }">
          {{ title }}
        </v-list-item-title>
      </div>

      <v-icon v-if="hasItems" class="LStyleArrowIcon" :class="{ LStyleArrowActive: active }" @click.stop="$emit('toggle')">
        {{ open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      </v-icon>
    </div>
  </v-list-item>

  <v-expand-transition>
    <div v-show="open && hasItems">
      <SidebarItem
        v-for="item in items"
        :key="item.key"
        :title="item.title"
        :active="activeItemKey === item.key"
        @select="$emit('select-item', item.key)"
      />
    </div>
  </v-expand-transition>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue';
import type { SidebarItem as Item } from './sidebar.data';
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  icon: string;
  open: boolean;
  active: boolean;
  activeItemKey: string | null;
  items?: Item[];
}>();

const emit = defineEmits<{
  (e: 'toggle'): void;
  (e: 'select-section'): void;
  (e: 'select-item', key: string): void;
}>();

const hasItems = computed(() => !!props.items?.length);

const onHeaderClick = () => {
  emit('select-section');
  if (hasItems.value) emit('toggle');
};
</script>

<style scoped>
:deep(.v-list-item__content) {
  display: flex;
  width: 100%;
}

.LStyleSectionHeader {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  color: var(--color-text);
}

.LStyleRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.LStyleLeft {
  display: flex;
  align-items: center;
}

.LStyleArrowIcon {
  color: var(--color-text) !important;
  transition: color 0.2s ease;
}

.LStyleArrowActive {
  color: var(--color-principal) !important;
}

.LStyleIconCircle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: var(--color-principal-background);
}

.LStyleIconActive {
  background-color: var(--color-principal);
}

.LStyleIcon {
  color: var(--color-principal);
}

.LStyleIconActive .LStyleIcon {
  color: var(--color-background-soft);
}

.LStyleSectionTitle {
  font-size: 18px !important;
  padding: 3px;
  font-weight: 400 !important;
}

.LStyleSectionActive {
  color: var(--color-principal);
}
</style>
