<template>
  <NavBar />
  <NavBarTekDash />
  <div>
    <SectionPrincipal />
    <SectionCardsVantagens />
    <SectionTemas />
    <SectionTutorial />
    <SectionGaleriaFotos />
    <SectionAbraSuaConta />
  </div>
  <Footer @footer-visible="isFooterVisible = true" @footer-hidden="isFooterVisible = false" />
  <WhatsApp :footerVisible="isFooterVisible" />
</template>

<script lang="ts" setup>
import NavBar from '../components/navigation/NavBar.vue'
import NavBarTekDash from '@/components/navigation/NavBarTekDash.vue';
import SectionPrincipal from '@/components/home/SectionPrincipal.vue';
import SectionCardsVantagens from '@/components/home/SectionCardsVantagens.vue';
import SectionTemas from '@/components/home/SectionTemas.vue';
import SectionTutorial from '@/components/home/SectionTutorial.vue';
import SectionGaleriaFotos from '@/components/home/SectionGaleriaFotos.vue';
import SectionAbraSuaConta from '@/components/home/SectionQueroNaMinhaEmpresa.vue';
import Footer from '@/components/navigation/Footer.vue';
import WhatsApp from '@/components/common/BtnWhatsApp.vue';

import { ref } from 'vue'
const isFooterVisible = ref(false)
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