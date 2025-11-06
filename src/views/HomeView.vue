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
import NavBar from '../components/navBars/NavBar.vue'
import NavBarTekDash from '@/components/navBars/NavBarTekDash.vue';
import BodyImgDireita from '@/components/body/BodyImgDireita.vue';
import BodyTexto from '@/components/body/BodyTexto.vue';
import BodyImgTopicos from '@/components/body/BodyImgTopicos.vue';
import BodyTutorial from '@/components/body/BodyTutorial.vue';
import BottomInfos from '@/components/navBars/BottomInfos.vue';
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