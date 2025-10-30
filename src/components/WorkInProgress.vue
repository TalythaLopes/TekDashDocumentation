<template>
    <div class="em-construcao" :class="theme">
        <img :src="iconSrc" alt="Ícone de construção" />
        <p :style="{ color: colortext }">Em construção</p>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    theme?: 'light' | 'dark'
}

const props = defineProps<Props>()
const theme = computed(() => props.theme || 'light')
const iconSrc = computed(() => theme.value === 'dark' ? '/img/wip-dark.png' : '/img/wip-light.png')
const colortext = computed(() => theme.value === 'dark' ? 'var(--vt-c-gray)' : 'var(--color-background-site)')
</script>

<style scoped>
.em-construcao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

p {
    font-size: 50px;
    font-weight: 600;
    margin: 0;
}
</style>