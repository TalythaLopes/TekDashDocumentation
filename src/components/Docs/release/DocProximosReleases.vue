<template>
  <h1 class="LStyleDocumentation">Em Breve</h1>
  <p>Confira as novidades que estão chegando para você.</p>
  <div class="LStyleDivider">
    <ReleaseCards />
  </div>
</template>

<script setup lang="ts">
import ReleaseCards from './ReleaseCards.vue';
</script>

<style scoped>
.LStyleDivider {
  height: auto;
  margin: 30px 0 0 40px;
}
</style>
