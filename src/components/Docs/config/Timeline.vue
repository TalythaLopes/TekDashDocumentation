<template>
  <div class="LStyleTimeline">
    <div v-for="(item, index) in items" :key="index" class="LStyleTimelineItem">
      <div class="LStyleCircle">{{ index + 1 }}</div>

      <div class="LStyleContent">
        <h5>{{ item.title }}</h5>
        <slot :name="`step-${index}`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string;
}
const props = defineProps<{
  items: TimelineItem[];
}>();
</script>

<style scoped>
.LStyleTimeline {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.LStyleTimelineItem {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  color: var(--color-text);
  z-index: 1;
}

.LStyleTimelineItem::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  border-left: 2px dashed var(--color-principal);
  z-index: 0;
}

.LStyleTimelineItem:last-child::before {
  content: none;
}

.LStyleCircle {
  width: 40px;
  height: 40px;
  background: var(--color-principal);
  outline: 4px solid var(--color-principal);
  outline-offset: 2px;
  color: var(--color-background);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: bold;
  z-index: 2;
  flex-shrink: 0;
}
</style>
