<template>
  <section ref="sectionRef">
    <h1 ref="titleRef" :class="{ 'LStyleInView': inViewTitle }">Temas para acompanhar sua empresa</h1>
    <div class="LStyleCarrossel">
      <div v-for="(item, index) in items" :key="index" class="LStyleCarrosselItem" 
        :class="{ LStyleActive: index === activeIndex, 'LStyleInView': inView }"
        :style="{ animationDelay: `${0.2 * index}s` }" @click="setActive(index)">
        <img :src="item.image" :alt="item.title" class="LStyleCarrosselImage" />
        <v-icon class="CarrosselIcon">{{ item.icon }}</v-icon>
        <transition name="text-fade">
          <div v-if="index === activeIndex" class="LStyleCarrosselText">
            <h4>{{ item.title }}</h4>
            <p class="pb-0">{{ item.description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
// Tipagens
interface CarrosselItem {
  image: string
  icon: string
  title: string
  description: string
};
// Dados do carrossel
const items: CarrosselItem[] = [
  {
    image: '/img/TemaVendas.jpg',
    icon: 'mdi-invoice-text-check',
    title: 'Vendas',
    description: 'Analise a movimentação das vendas de forma rápida e dinâmica.'
  },
  {
    image: '/img/TemaFinanceiro.jpeg',
    icon: 'mdi-finance',
    title: 'Financeiro',
    description: 'Acompanhe suas finanças na palma da sua mão.'
  },
  {
    image: '/img/TemaEstoque.jpeg',
    icon: 'mdi-package-variant',
    title: 'Estoque',
    description: 'Tenha atualização sobre seu estoque há qualquer momento.'
  },
  {
    image: '/img/TemaProducao.jpg',
    icon: 'mdi-factory',
    title: 'Produção',
    description: 'Painéis sobre a produção da sua empresa sempre atualizados.'
  }
]
// Estados iniciais e referências aos elementos do DOM
const sectionRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

const inView = ref(false)
const inViewTitle = ref(false)
const activeIndex = ref(0)

let interval: number | undefined
let observer: IntersectionObserver | null = null
// Métodos
function startInterval() {
  if (interval) clearInterval(interval)

  interval = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }, 8000)
}

const setActive = (index: number) => {
  activeIndex.value = index
  startInterval()
}

function createObserver(refElement: typeof sectionRef, callback: () => void, threshold = 0.2, rootMargin = "0px") {
  const obs = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      callback()
      obs.unobserve(entry.target)
    }
  }, { threshold, rootMargin })

  if (refElement.value) obs.observe(refElement.value)
  return obs;
}
// Ciclo de vida
onMounted(() => {
  interval = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }, 8000)

  createObserver(titleRef, () => {
    inViewTitle.value = true

    const triggerCards = () => {
      inView.value = true
      activeIndex.value = 0
      startInterval()
    }

    if (sectionRef.value) {
      const rect = sectionRef.value.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) setTimeout(triggerCards, 200)
      else observer = createObserver(sectionRef, triggerCards, 0.2, "-100px 0px 0px 0px")
    }
  }, 0.2)
})
onBeforeUnmount(() => { if (interval) clearInterval(interval) })
onUnmounted(() => { if (observer && sectionRef.value) observer.unobserve(sectionRef.value) });
</script>

<style scoped>
h1 {
  color: var(--color-text);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

h1.LStyleInView {
  opacity: 1;
  transform: translateY(0);
}

.LStyleCarrossel {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.LStyleCarrosselItem {
  position: relative;
  width: 200px;
  height: 555px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.6s ease;
  flex-shrink: 0;
  opacity: 0;
  transform: translateY(30px);
}

.LStyleCarrosselItem.LStyleActive { width: 410px; }
.LStyleCarrosselItem.LStyleInView { animation: slideUp 0.8s ease forwards; }

.LStyleCarrosselImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: brightness(0.5);
}

.LStyleCarrosselItem.LStyleActive .LStyleCarrosselImage {
  transform: scale(1.05);
  filter: brightness(1);
}

.CarrosselIcon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: rgba(255, 255, 255, 0.9);

  opacity: 1;
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
}

.LStyleActive .CarrosselIcon {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.LStyleCarrosselItem:not(.LStyleActive) .CarrosselIcon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.LStyleCarrosselText {
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  color: var(--color-background);
  text-align: left;
  /*background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 60%);*/
  background-color: rgba(0, 0, 0, 0.5);
  /*backdrop-filter: blur(4px); /* opcional, dá um efeito de vidro */
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.LStyleCarrosselText h4 {
  font-size: 26px;
  font-weight: 700;
}

.text-fade-enter-active {
  transition: opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s
}

.text-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.text-fade-enter-from,
.text-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}


@media (max-width: 1110px) {
  .LStyleCarrossel {
    flex-direction: column;
    align-items: center;
  }

  .LStyleCarrosselItem {
    width: 90%;
    height: 200px;
  }

  .LStyleCarrosselItem.LStyleActive {
    width: 90%;
    height: 300px;
  }

  h1 {
    text-align: center;
    padding: 0 32px; 
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .LStyleCarrossel { gap: 12px; }
  .LStyleCarrosselItem { height: 120px; }
  .LStyleCarrosselItem.LStyleActive { height: 250px; }
  .LStyleCarrosselText {
    bottom: 12px;
    left: 12px;
    right: 12px;
  }
}
</style>
