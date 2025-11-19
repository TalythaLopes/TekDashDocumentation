<template>
  <v-btn ref="whatsRef" class="LStyleWhatsAppBtn" icon target="_blank" :style="{ bottom: props.footerVisible ? '105px' : '35px' }"
    href="https://api.whatsapp.com/send?phone=5532999724221&text=Oi%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20TekDashboard.">
    <v-icon>mdi-whatsapp</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({ footerVisible: Boolean })
</script>

<style scoped>
.LStyleWhatsAppBtn .v-icon {
  color:var(--color-background-site);
  font-size: 40px;
}

.LStyleWhatsAppBtn {
  position: fixed;
  bottom: 35px;
  right: 65px;
  z-index: 1000;
  width: 70px !important;
  height: 70px !important;
  padding: 15px;
  border-radius: 50%;
  background-color: var(--color-principal);
  transition: all 0.5s ease;

  &:hover{
    transform: scale(1.2);
  }
}

@media (max-width: 600px) {
  .LStyleWhatsAppBtn {
    right: 35px;
  }
}
</style>