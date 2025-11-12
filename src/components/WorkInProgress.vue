<template>
  <div class="em-construcao" :class="theme">
    <img :src="iconSrc" alt="Ícone de página em construção" />
    <h1 :style="{ color: colortext }">Em construção</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// Props
interface Props {
  theme?: 'light' | 'dark'
}
const props = defineProps<Props>()
// Computados
const theme = computed(() => props.theme || 'light')
const iconSrc = computed(() => theme.value === 'dark' ? '/icons/wip-dark.png' : '/icons/wip-light.png')
const colortext = computed(() => theme.value === 'dark' ? 'var(--vt-c-red)' : 'var(--color-background-site)')
</script>

<style scoped>
.em-construcao {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>