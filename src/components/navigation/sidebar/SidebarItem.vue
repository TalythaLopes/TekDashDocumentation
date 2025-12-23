<template>
  <v-list-item
    link
    class="LStyleSubsectionHeader"
    :class="{ LStyleSelectedSubitem: active }"
    @click="$emit('select')"
  >
    <v-list-item-content class="LStyleSubitem">
      <div class="LStyleDivider" />
      <v-list-item-title class="LStyleSubitemTitle">
        {{ title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  active: boolean
}>()

defineEmits<{
  (e: 'select'): void
}>()
</script>

<style scoped>
.LStyleSubsectionHeader {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 0 0 40px; /* Garante ausência de espaço entre os dividers */
  margin: 0 !important;
}

.LStyleSubitem {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text);
}

.LStyleDivider {
  width: 3px;
  height: 40px;
  background-color: var(--color-principal-background);
}

.LStyleSubitemTitle {
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.3 !important;
}

.LStyleSelectedSubitem .LStyleSubitemTitle { color: var(--color-principal) !important; }
.LStyleSelectedSubitem .LStyleDivider { background-color: var(--color-principal); }
</style>
