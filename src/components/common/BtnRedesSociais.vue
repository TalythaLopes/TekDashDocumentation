<template>
  <v-btn class="LStyleSocialBtn" icon elevation="0" target="_blank" :href="link">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
  link: string
}>()
</script>

<style scoped>
.LStyleSocialBtn {
  width: auto;
  height: auto;
  border-radius: 50%;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
    background-color: transparent;
  }
}

.LStyleSocialBtn .v-icon {
  font-size: 40px;
  color: var(--color-principal);
  transition: all 0.5s ease;
}
</style>
