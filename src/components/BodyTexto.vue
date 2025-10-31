/*  VIBE CODING, REFAZ ESSE TREM */

<template>
  <section class="vantagens-section">
    <h2 class="title">Vantagens do TekDash</h2>

    <div class="vantagens-container">
      <div
        v-for="(item, index) in vantagens"
        :key="index"
        class="vantagem-card"
      >
        <v-icon size="50">{{ item.icon }}</v-icon>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Vantagem {
  icon: string
  title: string
  description: string
}

const vantagens: Vantagem[] = [
  {
    icon: 'mdi-relation-one-or-many-to-one-or-many',
    title: 'Integração total com o ERP',
    description:
      'Todos os dados da sua empresa moveleira em um só sistema, sem necessidade de lançamentos manuais.'
  },
  {
    icon: 'mdi-arrow-decision',
    title: 'Decisões mais inteligentes',
    description:
      'Transforme informações em insights e tome decisões estratégicas com base em indicadores confiáveis.'
  },
  {
    icon: 'mdi-finance',
    title: 'Crescimento sustentável',
    description:
      'Identifique oportunidades, reduza custos e aumente a eficiência em todos os setores da operação.'
  }
]
</script>

<style scoped>
.vantagens-section {
  background-color: var(--color-background-site);
  padding: 80px 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vt-c-gray);
  text-align: center;
  margin-bottom: 50px;
}

.vantagens-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 90%;
  max-width: 1200px;
}

.vantagem-card {
  background-color: var(--color-background);
  border-radius: 24px;
  padding: 40px 30px;
  flex: 1 1 300px;
  max-width: 360px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.2s ease;
}

.vantagem-card:hover {
  transform: translateY(-4px);
}

.vantagem-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vt-c-gray);
  margin: 0;
}

.vantagem-card p {
  font-size: 1rem;
  color: var(--vt-c-gray);
  line-height: 1.4;
}

/* Responsividade */
@media (max-width: 900px) {
  .vantagens-container {
    flex-direction: column;
    align-items: center;
  }

  .vantagem-card {
    max-width: 90%;
  }
}
</style>
