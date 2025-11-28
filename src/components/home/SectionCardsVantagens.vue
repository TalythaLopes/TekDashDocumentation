<template>
  <section ref="sectionRef">
    <h1 ref="titleRef" :class="{ 'LStyleInView': inViewTitle }">Vantagens do TekDashboard</h1>

    <div ref="cardRef" class="LStyleCardContainer">
      <div v-for="(item, index) in vantagens" :key="index" class="LStyleCardWrapper"
        :class="{ 'LStyleInView': inViewCards }" :style="{ animationDelay: `${0.5 * index}s` }">
        <div class="LStyleCard">
          <v-icon size="48">{{ item.icon }}</v-icon>
          <h3>{{ item.title }}</h3>
          <p class="pb-0" :style="{ fontSize: '20px' }">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Tipagem
interface Vantagem {
  icon: string
  title: string
  description: string
}
// Dados dos cards
const vantagens: Vantagem[] = [
  {
    icon: 'mdi-relation-one-or-many-to-one-or-many',
    title: 'Sincronização de dados',
    description:
      'As informações são sincronizadas diretamente com seu sistema ERP Tek-System, garantindo que você sempre tenha os dados mais atualizados para tomar as melhores decisões.'
  },
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Visualização Completa',
    description:
      'Vá além dos números. Com nossos dashboards, você pode analisar gráficos de performance, mapas com dados de pedidos por cidade e estado e indicadores-chave sobre clientes, produtos e equipes.'
  },
  {
    icon: 'mdi-finance',
    title: 'Dashboards inteligentes',
    description:
      'Visualize seus principais indicadores de forma clara e organizada. Nossos painéis são estruturados em temas de dados, permitindo que você navegue facilmente por vendas, finanças, estoque e muito mais.'
  }
]
// Estados iniciais e referências aos elementos do DOM
const titleRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

const inViewCards = ref(false)
const inViewTitle = ref(false)

let observer: IntersectionObserver | null = null
// Ciclo de vida
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (entry.target === titleRef.value) {
          inViewTitle.value = true;
          setTimeout(() => (inViewCards.value = true), 300);
        }
        observer?.unobserve(entry.target);
      }
    }
  }, { threshold: 0.2, rootMargin: "-50px" });
  if (titleRef.value) observer.observe(titleRef.value);
  if (cardRef.value) observer.observe(cardRef.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
section {
  background-color: var(--color-background-site);
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

.LStyleCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1400px;
}

.LStyleCardWrapper {
  flex: 1 1 300px;
  max-width: 450px;
  min-width: 250px;
  opacity: 0;
  transform: translateY(30px);
  display: flex;
  flex-direction: column;
}
.LStyleCardWrapper.LStyleInView { animation: slideUp 0.8s forwards ease-out; }

.LStyleCard {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 35px;
  padding: 40px;
  background-color: var(--color-background);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  gap: 16px;
  text-align: left;

  transition: all 0.5s ease;
  will-change: transform;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1); 
  }
}
.LStyleCard h3 {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  max-width: 300px;
}

@media (max-width: 1110px) {
  h1 {
    text-align: center;
    padding: 0 32px; 
  }
  .LStyleCardContainer {
    flex-direction: column;
    align-items: center;
  }
  .LStyleCardWrapper {
    flex: 1 1 auto;
    max-width: 900px;
    min-width: 90%;
  }
  .LStyleCard { padding: 32px 32px 32px 24px; }
  .LStyleCard h3 { max-width: 100%; }
}

@media (max-width: 600px) {
  .LStyleCardContainer {
    gap: 12px;
    width: 100%;
  }

  .LStyleCardWrapper { max-width: 90%; }

  .LStyleCard {
    align-items: center;
    text-align: center;
    padding: 32px 24px;
    gap: 12px;
  }
}
</style>
