<template>
  <div class="bottom-section">
    <WorkInProgress theme="light" />
  </div>
</template>

<script lang="ts" setup>
import WorkInProgress from '../WorkInProgress.vue';
</script>

<style scoped>
.bottom-section {
  display: flex;
  flex-direction: column;
  background-color: var(--vt-c-gray);
  height: 530px;
}
</style>