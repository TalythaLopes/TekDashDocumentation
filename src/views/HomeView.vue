<template>
    <NavBar />
    <NavBarTekDash />
    <div>
        <BodyImgDireita />
        <BodyTexto />
        <BodyImgTopicos />
        <BodyTutorial />
    </div>
    <BottomInfos />
</template>

<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
import NavBarTekDash from '@/components/NavBarTekDash.vue';
import BodyImgDireita from '@/components/BodyImgDireita.vue';
import BodyTexto from '@/components/BodyTexto.vue';
import BodyImgTopicos from '@/components/BodyImgTopicos.vue';
import BodyTutorial from '@/components/BodyTutorial.vue';
import BottomInfos from '@/components/BottomInfos.vue';
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
}
</style>