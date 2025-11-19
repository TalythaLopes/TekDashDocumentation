/* botoões - vibe coded *mudar urgente* */

<template>
  <section>
    <div class="LStyleContainer">
      <div class="LStyleText">
        <div class="LStyleAnimatedBlock block-1">
          <h4>ERP Tek-System na palma da mão</h4>
        </div>
        <div class="LStyleAnimatedBlock block-2">
          <h2>
            <!-- Com o TekDashboard, o seu ERP Tek-System vai com você.-->
            Visualize indicadores, acompanhe resultados e mantenha o
            <strong>controle total do seu negócio em qualquer lugar.</strong>
          </h2>
        </div>
      </div>
      <div class="LStyleContainerImage">
        <img ref="imgRef" src="/img/TelaTekDash.png" alt="Mulher loira de costas olhando o TekDashboard no celular e no notebook" class="LStyleImage"/>
      </div>
      <div class="LStyleButtons">
        <div class="LStyleAnimatedBlock block-3 LStyleButtons">
          <router-link to="/documentacao" class="LStyleBtnDoc">Mais informações sobre o TekDashboard</router-link>
        </div>
        <div class="LStyleAnimatedBlock block-4 LStyleButtons">
          <a href="https://tekdashboard.teksystem.com.br/" target="_blank" class="LStyleBtnLogin">Fazer login no
            TekDashboard</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
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
}

.block-1 { animation-delay: 0.2s; }
.block-2 { animation-delay: 0.4s; }
.block-3 { animation-delay: 0.6s; }
.block-4 { animation-delay: 0.8s; }

section { padding-top: 30px; }

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
  max-width: 600px;
}

.LStyleButtons {
  grid-area: form;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 12px;
}

.LStyleContainerImage {
  grid-area: image;
  width: 760px;
  height: 550px;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
}

.LStyleContainerImage .LStyleImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.15);
  opacity: 0;
  animation: zoomOut 1.4s ease forwards;
  transform-origin: center center;
  transition: transform 0.4s ease;
}

.LStyleContainerImage .LStyleImage.loaded {
  animation: none;
  transform: scale(1);
  opacity: 1;
}

.LStyleContainerImage:hover .LStyleImage.loaded { transform: scale(1.05);}

.LStyleText h4 {
  color: var(--color-principal);
  margin-bottom: 10px;
}

.LStyleButtons .LStyleBtnDoc,
.LStyleButtons .LStyleBtnLogin {
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-weight: 600;
  transition: 0.3s ease;
  text-align: center;
  cursor: pointer;
  font-size: 15px;

  &:hover{
    transform: scale(1.06);
  }
}
.LStyleButtons .LStyleBtnDoc {
  background-color: var(--color-background);
  color: var(--color-principal);
  border: var(--color-principal) 1.5px solid;
}
.LStyleButtons .LStyleBtnLogin {
  background-color: var(--color-principal);
  color: var(--color-background);
  border: none;
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
  .LStyleContainerImage img { height: 200px; }
}

@media (max-width: 600px) {
  .LStyleContainer { gap: 20px; }
}
</style>
