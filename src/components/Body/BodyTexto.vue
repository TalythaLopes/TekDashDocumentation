/* respondividade titulo | card pode ser um componente */

<template>
  <section ref="sectionRef">
    <div>
      <h1 ref="titleRef" :class="{ 'in-view': inViewTitle }">Vantagens do TekDashboard</h1>
    </div>

    <div class="card-container">
      <div v-for="(item, index) in vantagens" :key="index" class="card" :class="{ 'in-view': inView }"
        :style="{ animationDelay: `${0.2 * index}s` }">
        <v-icon size="48">{{ item.icon }}</v-icon>
        <h3>{{ item.title }}</h3>
        <p class="pb-0" :style="{ fontSize: '20px' }">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Vantagem {
  icon: string
  title: string
  description: string
}

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

const sectionRef = ref<HTMLElement | null>(null);
const inView = ref(false);

const titleRef = ref<HTMLElement | null>(null);
const inViewTitle = ref(false);

let observer: IntersectionObserver | null = null;

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

onMounted(() => {
  createObserver(titleRef, () => {
    inViewTitle.value = true;

    const triggerCards = () => {
      inView.value = true;
    };

    if (sectionRef.value) {
      const rect = sectionRef.value.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(triggerCards, 200);
      } else {
        observer = createObserver(sectionRef, triggerCards, 0.2, "-100px 0px 0px 0px");
      }
    }
  }, 0.2);
});

onUnmounted(() => {
  if (observer && sectionRef.value) observer.unobserve(sectionRef.value);
});
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

h1.in-view {
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1400px;
}

.card {
  background-color: var(--color-background);
  border-radius: 35px;
  padding: 40px;
  flex: 1 1 300px;
  max-width: 450px;
  min-width: 250px;
  height: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.2s ease;
  opacity: 0;
  transform: translateY(30px);
}

.card.in-view {
  animation: slideUp 0.8s ease forwards;
}

.card:hover {
  transform: scale(1.05);
}

.card h3 {
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  max-width: 300px;
}

@media (max-width: 900px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 90%;
  }

  h1 {
    text-align: center;
    padding: 0 32px; 
    margin: 0 auto;
  }
}

@media (max-width: 400px) {
  .card-container {
    gap: 12px;
    width: 100%;
  }

  .card {
    flex: 1 1 auto;
    padding: 32px 24px;
    gap: 12px;
    height: auto;
  }
}
</style>
