<template>
  <NavBar />
  <NavBarTekDash />
  <div>
    <SectionPrincipal />
    <SectionCardsVantagens />
    <SectionTemas />
    <SectionTutorial />
  </div>
  <BottomInfos />
  <WhatsApp />
</template>

<script lang="ts" setup>
import NavBar from '../components/navigation/NavBar.vue'
import NavBarTekDash from '@/components/navigation/NavBarTekDash.vue';
import SectionPrincipal from '@/components/home/SectionPrincipal.vue';
import SectionCardsVantagens from '@/components/home/SectionCardsVantagens.vue';
import SectionTemas from '@/components/home/SectionTemas.vue';
import SectionTutorial from '@/components/home/SectionTutorial.vue';
import BottomInfos from '@/components/navigation/BottomInfos.vue';
import WhatsApp from '@/components/common/WhatsApp.vue';
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