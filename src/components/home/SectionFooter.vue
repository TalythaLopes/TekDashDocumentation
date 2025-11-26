<template>
  <div class="LStyleFooter">
    <h5>Siga a Tek-System:</h5>
    <div class="LStyleRedesSociais">
      <BtnRedesSociais icon="mdi-instagram" link="https://www.instagram.com/teksysteminformatica/" />
      <BtnRedesSociais icon="mdi-facebook"  link="https://www.facebook.com/teksysteminformatica" />
      <BtnRedesSociais icon="mdi-linkedin"  link="https://www.linkedin.com/company/tek-system/posts/?feedView=all" />
      <BtnRedesSociais icon="mdi-youtube"   link="https://www.youtube.com/user/comercialteksystem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import BtnRedesSociais from '../common/BtnRedesSociais.vue'
// Ciclo de vida
onMounted(() => {
  const footer = document.querySelector('.LStyleFooter')
  if (!footer) return
  observer = new IntersectionObserver(
    ([entry]) => { emit(entry?.isIntersecting ? 'footer-visible' : 'footer-hidden') },
    { threshold: 0.01 }
  )
  observer.observe(footer)
})
onUnmounted(() => { observer?.disconnect() })
// Métodos
const emit = defineEmits(['footer-visible', 'footer-hidden'])
let observer: IntersectionObserver | null = null
</script>

<style scoped>
.LStyleFooter {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  height: 140px;
}

.LStyleFooter h5 {
  padding-bottom: 20px;
  color: var(--color-principal);
}

.LStyleRedesSociais {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}
</style>