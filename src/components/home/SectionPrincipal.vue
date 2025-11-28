<template>
  <section>
    <div class="LStyleContainer">
      <div class="LStyleText">
        <h4 class="LStyleAnimatedBlock" style="--delay: .2s">ERP Tek-System na palma da mão</h4>
        <h2 class="LStyleAnimatedBlock" style="--delay: .4s">
          Visualize indicadores, acompanhe resultados e mantenha o
          <strong>controle total do seu negócio em qualquer lugar.</strong>
        </h2>
      </div>
      <div class="LStyleContainerImage">
        <img ref="imgRef" src="/img/TelaTekDash.png" class="LStyleImage" alt="Mulher loira de costas olhando o TekDashboard">
      </div>
      <div class="LStyleButtons">
        <div class="LStyleAnimatedBlock" style="--delay: .6s">
          <Button text="Mais informações sobre o TekDashboard" variant="secondary" :minWidth="350" href="/documentacao" />
        </div>
        <div class="LStyleAnimatedBlock" style="--delay: .8s">
          <Button  text="Fazer login no TekDashboard" variant="primary" :minWidth="350" href="https://tekdashboard.teksystem.com.br/" />
        </div>
        <div class="LStyleLojasArea">
          <DisponivelAppStore class="LStyleAnimatedBlock" style="--delay: 1s" />
          <DisponivelGooglePlay class="LStyleAnimatedBlock" style="--delay: 1.2s" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Button from '../common/Button.vue'
import DisponivelAppStore from '../common/DisponivelAppStore.vue'
import DisponivelGooglePlay from '../common/DisponivelGooglePlay.vue'
// Estados iniciais e referências aos elementos do DO
const imgRef = ref<HTMLImageElement | null>(null);
// Ciclo de vida
onMounted(async () => {
  await nextTick()
  const img = imgRef.value
  if (!img) return
  img.addEventListener('animationend', () => img.classList.add('loaded'))
  setTimeout(() => { if (!img.classList.contains('loaded')) img.classList.add('loaded') }, 1600)
})
</script>

<style scoped>
.LStyleAnimatedBlock {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
  animation-delay: var(--delay);
}

section { padding-top: 120px; }

.LStyleContainer {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 760px;
  grid-template-areas: "text-top image"
                       "form     image";
  gap: 40px;
  align-items: center;
}

.LStyleText {
  grid-area: text-top;
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 600px;
}

.LStyleText h4 { color: var(--color-principal); }

.LStyleButtons {
  grid-area: form;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 350px;
}

.LStyleContainerImage {
  grid-area: image;
  width: 760px;
  height: 550px;
  overflow: hidden;
  border-radius: 16px;
}

.LStyleContainerImage .LStyleImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.15);
  opacity: 0;
  animation: zoomOut 1.4s ease forwards;
  transition: transform 0.4s ease;
}

.LStyleImage.loaded {
  animation: none;
  transform: scale(1);
  opacity: 1;
}

.LStyleContainerImage:hover .LStyleImage.loaded { transform: scale(1.05);}

.LStyleLojasArea {
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

@media (max-width: 1330px) {
  .LStyleContainer { grid-template-columns: 1fr 620px; }
  .LStyleContainerImage { width: 620px; height: 450px; }
}

@media (max-width: 1250px) {
  .LStyleContainer { grid-template-columns: 1fr 520px; }
  .LStyleContainerImage { width: 520px; height: 380px; }
}

@media (max-width: 1200px) {
  .LStyleContainer {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text-top"
      "image"
      "form";
    text-align: center;
    justify-items: center;
    gap: 24px;
  }
  .LStyleText { max-width: 90%; margin: 0 auto; }
  .LStyleContainerImage { width: 100%; height: 200px; }
  .LStyleImage { height: 200px; }
}

@media (max-width: 600px) {
  section { padding-top: 70px !important; }
  .LStyleContainer { gap: 20px; }
  .LStyleText { gap: 10px; }
  .LStyleText h4 { font-size: 32px !important; }
  .LStyleText h2 { font-size: 18px !important; }
}
</style>
