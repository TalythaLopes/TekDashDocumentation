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
import NavBar from '../components/NavBars/NavBar.vue'
import NavBarTekDash from '@/components/NavBars/NavBarTekDash.vue';
import BodyImgDireita from '@/components/Body/BodyImgDireita.vue';
import BodyTexto from '@/components/Body/BodyTexto.vue';
import BodyImgTopicos from '@/components/Body/BodyImgTopicos.vue';
import BodyTutorial from '@/components/Body/BodyTutorial.vue';
import BottomInfos from '@/components/NavBars/BottomInfos.vue';
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