<template>
  <section ref="sectionRef">
    <div class="LStyleContainer">
      <div>
        <h1 ref="titleRef" :class="{ 'LStyleInView': inViewTitle }" class="LStyleText">Destrave o poder dos seus dados</h1>
        <div :class="['LStyleButtonContainer', { LStyleInView: inViewButton }]">
          <Button text="Quero o TekDashboard na minha empresa" variant="primary" :minWidth="320"
          href="https://api.whatsapp.com/send?phone=5532999724221&text=Oi%2C%20quero%20TekDashboard%20na%20minha%20empresa." />
        </div>
      </div>
      <div ref="imageRef" class="LStyleContainerImage" :class="{ LStyleInView: inViewImage }">
        <img src="/img/TelaMobileTekDash.jpg" class="LStyleImage"
        alt="Duas pessoas de costas olhando no celular a tela do TekDashboard em destaque"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '../common/Button.vue'

const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)

const inViewTitle = ref(false)
const inViewButton = ref(false)
const inViewImage = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = createObserver(imageRef, () => {
    inViewImage.value = true;

    setTimeout(() => {
      inViewTitle.value = true;
      setTimeout(() => {
        inViewButton.value = true;
      }, 200);													   
    }, 200);
  }, 0.2);
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => { if (observer && sectionRef.value) observer.unobserve(sectionRef.value); });

function createObserver(refElement: typeof sectionRef, callback: () => void, threshold = 0.2, rootMargin = "0px") {
  const obs = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry?.isIntersecting) {
      callback();
      obs.unobserve(entry.target);
    }
  }, { threshold, rootMargin });

  if (refElement.value) obs.observe(refElement.value);
  return obs;
}
</script>

<style scoped>
section { background-color: var(--color-background-site); }

.LStyleContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
}

.LStyleText,
.LStyleButtonContainer,
.LStyleContainerImage {
  opacity: 0;
  transform: translateY(30px);
}

.LStyleInView { animation: slideUp 0.8s ease forwards; }
.LStyleButtonContainer { margin-top: 80px; }

.LStyleText {
  max-width: 400px;
  color: var(--color-text);
}

.LStyleContainerImage {
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
}

.LStyleImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.LStyleContainerImage:hover .LStyleImage { transform: scale(1.05); }

@media (max-width: 1000px) {
  .LStyleContainer {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .LStyleText { width: 100%; max-width: none; }
  .LStyleButtonContainer { margin: 20px auto 0 auto; }
  .LStyleContainerImage { width: 90vw; height: auto; }
}

@media (max-width: 600px) { .LStyleContainer { gap: 20px; } }
</style>
