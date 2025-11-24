<template>
  <component :is="tag" :to="to" :href="href" class="LStyleButton" :class="variant" target="_blank" 
  :style="{ minWidth: minWidth ? (typeof minWidth === 'number' ? minWidth + 'px' : minWidth) : undefined }">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  text: string
  to?: string
  href?: string
  variant: "primary" | "secondary" | "secondary-gray"
  minWidth?: string | number
}>()

const tag = computed(() => {
  if (props.to) return "router-link"
  if (props.href) return "a"
  return "button"
})
</script>

<style scoped>
.LStyleButton {
  display: inline-block;
  padding: 12px 16px;
  border-radius: 40px;

  transition: transform 0.25s ease;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  overflow: hidden;
}
.LStyleButton:hover {
  transform: scale(1.06);
}

/* primary = botão principal */
.primary {
  background-color: var(--color-principal);
  color: var(--color-background);
  border: none;
}

/* secondary = botão branco com borda */
.secondary {
  background-color: var(--color-background);
  color: var(--color-principal);
  border: 1.5px solid var(--color-principal);
  font-weight: 600;
}

/* secondary = botão branco com borda */
.secondary-gray {
  background-color: var(--color-background-site);
  color: var(--color-principal);
  border: 1.5px solid var(--color-principal);
  font-weight: 600;
}
</style>
