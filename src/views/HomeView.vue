<template>
  <ToolbarHome />
  <div>
    <SectionPrincipal />
    <SectionCardsVantagens />
    <SectionTemas />
    <SectionTutorial />
    <SectionGaleriaFotos />
    <SectionQueroNaMinhaEmpresa />
  </div>
  <SectionFooter @footer-visible="isFooterVisible = true" @footer-hidden="isFooterVisible = false" />
  <BtnWhatsApp :footerVisible="isFooterVisible" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// Components fixed
import ToolbarHome from '@/components/navigation/ToolbarHome.vue';
import BtnWhatsApp from '@/components/common/BtnWhatsApp.vue';
// Home Components in order
import SectionPrincipal from '@/components/home/SectionPrincipal.vue';
import SectionCardsVantagens from '@/components/home/SectionCardsVantagens.vue';
import SectionTemas from '@/components/home/SectionTemas.vue';
import SectionTutorial from '@/components/home/SectionTutorial.vue';
import SectionGaleriaFotos from '@/components/home/SectionGaleriaFotos.vue';
import SectionQueroNaMinhaEmpresa from '@/components/home/SectionQueroNaMinhaEmpresa.vue';
import SectionFooter from '@/components/home/SectionFooter.vue';
// Estados iniciais e referências aos elementos do DOM
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