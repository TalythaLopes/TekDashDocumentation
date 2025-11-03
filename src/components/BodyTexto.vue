/* respondividade titulo | card pode ser um componente */

<template>
  <section>
    <h1>Vantagens do TekDashboard</h1>

    <div class="card-container">
      <div v-for="(item, index) in vantagens" :key="index" class="card">
        <v-icon size="48">{{ item.icon }}</v-icon>
        <h3>{{ item.title }}</h3>
        <p class="pb-0" :style="{ fontSize: '20px' }">{{ item.description }}</p>
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
</script>

<style scoped>
section {
  background-color: var(--color-background-site);
}

h1 {
  color: var(--color-text);
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
  padding: 40px 40px;
  flex: 1 1 300px;
  max-width: 450px;
  min-width: 250px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.2s ease;
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
}
</style>
