/* respondividade titulo carrossel - vibe coded *mudar* */

<template>
  <section>
    <h1>Temas para acompanhar sua empresa</h1>

    <div class="carousel">
      <div v-for="(item, index) in items" :key="index" class="carousel-item" :class="{ active: index === activeIndex }"
        @click="setActive(index)">
        <img :src="item.image" :alt="item.title" class="carousel-image" />
        <transition name="fade">
          <div v-if="index === activeIndex" class="carousel-text">
            <h4>{{ item.title }}</h4>
            <p class="pb-0">{{ item.description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface CarouselItem {
  image: string
  title: string
  description: string
}

const items: CarouselItem[] = [
  {
    image: '/img/TemaVendas.jpg',
    title: 'Vendas',
    description: 'Analise a movimentação das vendas de forma rápida e dinâmica.'
  },
  {
    image: '/img/TemaFinanceiro.jpeg',
    title: 'Financeiro',
    description: 'Acompanhe suas finanças na palma da sua mão.'
  },
  {
    image: '/img/TemaEstoque.jpeg',
    title: 'Estoque',
    description: 'Tenha atualização sobre seu estoque há qualquer momento.'
  },
  {
    image: '/img/TemaProducao.jpg',
    title: 'Produção',
    description: 'Painéis sobre a produção da sua empresa sempre atualizados.'
  }
]

const activeIndex = ref(0)
let interval: number | undefined

function setActive(index: number) {
  activeIndex.value = index
}

onMounted(() => {
  interval = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }, 8000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
h1 {
  color: var(--color-text);
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.carousel-item {
  position: relative;
  width: 200px;
  height: 555px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.6s ease;
  flex-shrink: 0;
}

.carousel-item.active {
  width: 410px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: brightness(0.5);
}

.carousel-item.active .carousel-image {
  transform: scale(1.05);
  filter: brightness(1);
}

.carousel-text {
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

.carousel-text h4 {
  font-size: 26px;
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsivo */
@media (max-width: 1110px) {
  .carousel {
    flex-direction: column;
    align-items: center;
  }

  .carousel-item {
    width: 90%;
    height: 200px;
  }

  .carousel-item.active {
    width: 90%;
    height: 300px;
  }
}
</style>
